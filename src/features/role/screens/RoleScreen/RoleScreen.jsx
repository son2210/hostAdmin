import React, { memo, useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdAdd } from 'react-icons/io';
import { BsTrash } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import { toast } from 'react-toastify';

import {
  TableCustom,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
} from 'components/Table/TableCustom';

import {
  WrapContent,
  TitleMain,
  TitleControl,
  BoxControl,
  BoxSearchInput,
  InputSearch,
  HeaderTable,
  BoxActionTable,
  GroupPagination,
  EmptyResult,
} from 'styles/common/common-styles';
import Loading from 'components/Loading/Loading';
import { Button } from 'components/Button/Button';
import { TablePagination } from 'components/Pagination/Pagination';
import CheckboxSingle from 'components/FormElements/ElementCheckbox/CheckboxSingle';

import GroupAlert from 'components/AlertMessage/AlertMessage';
import RemoveRole from 'features/role/components/RemoveRole/RemoveRole';

import { initForm } from 'features/role/helpers/role.helpers';

import { getRole } from 'features/role/redux/role.slice';
import { removeRoles } from 'features/role/redux/role.slice';
import EmptyResultImage from 'assets/images/empty-result.gif';
import { ROLE_PATHS } from '../../constants/role.paths';
import { useSortableData } from 'helpers/sortingTable/sortingTable';

const headerCells = [
  { label: 'STT', fieldSort: 'id', sort: true },
  { label: 'Vai trò', fieldSort: 'name', sort: true },
  { label: 'Thao tác', sort: false, align: 'right' },
];

const RoleScreen = () => {
  const dispatch = useDispatch();
  const [itemRole, setItemRole] = useState(initForm);
  const [isDialogDeleteRole, setIsDialogDeleteRole] = useState(false);
  const [listChecked, setListChecked] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    dispatch(getRole());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [dispatch, fetchData]);

  const { listRole, isListRoleLoading } = useSelector((state) => ({
    listRole: state.role.listRole,
    isListRoleLoading: state.role.isListRoleLoading,
  }));
  const { dataSort, requestSort } = useSortableData(listRole);

  const isCheckedAll = useMemo(() => {
    return (
      listRole?.length > 0 && listRole.every((i) => listChecked.includes(i.id))
    );
  }, [listRole, listChecked]);

  const handleCheckedAll = (isChecked) => {
    if (isChecked) {
      setListChecked(
        Array.from(new Set([...listChecked, ...listRole.map((i) => i.id)]))
      );
    } else {
      setListChecked(
        listChecked.filter((id) => !listRole.find((i) => i.id === id))
      );
    }
  };

  const handleChangeChecked = (itemId) => {
    if (listChecked.includes(itemId)) {
      setListChecked(listChecked.filter((id) => id !== itemId));
    } else {
      setListChecked([...listChecked, itemId]);
    }
  };

  const handleRemoveAll = () => {
    listChecked.forEach(async (id) => {
      setLoading(true);
      const response = await dispatch(removeRoles(id));
      if (removeRoles.fulfilled.match(response)) {
        toast.success('Xóa thành công !');
      } else {
        toast.error('Xóa thất bại !');
      }
      setLoading(false);
      setListChecked([]);
    });
  };

  if (isListRoleLoading) {
    return <Loading />;
  }

  return (
    <>
      <TitleMain>Vai trò</TitleMain>
      <WrapContent>
        <TitleControl>Tìm kiếm</TitleControl>
        <BoxSearchInput>
          <BoxControl className="box-control">
            <label htmlFor="" className="label-control">
              Tên
            </label>
            <InputSearch
              type="text"
              placeholder="Tìm kiếm"
              className="input-filter input-search"
            />
          </BoxControl>
        </BoxSearchInput>
      </WrapContent>

      <WrapContent>
        <HeaderTable>
          <div className="resultSeach">
            {/* {messengerSort && (
              <span>
                Kết quả : &nbsp; {messengerSort} ( {listSubject.length} )
              </span>
            )} */}
          </div>
          <div className="buttonAction">
            <Button
              disabled={!listChecked.length || isLoading}
              onClick={handleRemoveAll}
              loading={isLoading}
            >
              Xóa tất cả
            </Button>
            <Button
              to={ROLE_PATHS.ROLE_ACTION_ADD}
              icon={<IoMdAdd />}
              color="primary"
            >
              Thêm
            </Button>
          </div>
        </HeaderTable>

        {listRole && listRole.length > 0 ? (
          <>
            <TableCustom>
              <Thead>
                <Tr>
                  <Th>
                    <CheckboxSingle
                      checked={isCheckedAll}
                      onChange={(e) => handleCheckedAll(e.target.checked)}
                    />
                  </Th>
                  {headerCells.map((cell) => (
                    <Th
                      key={cell.label}
                      sort={cell.sort}
                      align={cell.align}
                      onClick={() => requestSort(cell?.fieldSort)}
                    >
                      {cell.label}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {dataSort.map((item) => (
                  <Tr key={item.id}>
                    <Td>
                      <CheckboxSingle
                        checked={listChecked.includes(item.id)}
                        onChange={() => handleChangeChecked(item.id)}
                      />
                    </Td>
                    <Td>{item.id}</Td>
                    <Td>{item.name}</Td>
                    <Td>
                      <BoxActionTable>
                        <Button
                          color="warning"
                          icon={<MdModeEdit />}
                          size="small"
                          to={ROLE_PATHS.ROLE_ACTION_EDIT.replace(
                            ':id',
                            item.id
                          )}
                        />
                        <Button
                          color="danger"
                          size="small"
                          icon={<BsTrash />}
                          onClick={() => {
                            setIsDialogDeleteRole(true);
                            setItemRole(item);
                          }}
                        />
                      </BoxActionTable>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </TableCustom>

            <GroupPagination>
              <TablePagination
                pageLengthMenu={[20, 50, 100]}
                page={1}
                pageLength={listRole.length}
                totalRecords={100}
                onPageChange={() => null}
              />
            </GroupPagination>
          </>
        ) : (
          <EmptyResult>
            <div>Không có kết quả nào</div>
            <img src={EmptyResultImage} alt="" />
          </EmptyResult>
        )}
      </WrapContent>

      {/* overlay remove */}
      <RemoveRole
        item={itemRole}
        open={isDialogDeleteRole}
        setOpen={setIsDialogDeleteRole}
      />

      {/* alert message */}
      <GroupAlert />
    </>
  );
};
export default memo(RoleScreen);
