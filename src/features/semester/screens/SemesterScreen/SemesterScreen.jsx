import React, { memo, useEffect, useState, useMemo } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
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

import { Button } from 'components/Button/Button';
import { TablePagination } from 'components/Pagination/Pagination';
import Loading from 'components/Loading/Loading';
import PopupOverlay from 'components/PopupOverlay/PopupOverlay';
import GroupAlert from 'components/AlertMessage/AlertMessage';
import CheckboxSingle from 'components/FormElements/ElementCheckbox/CheckboxSingle';

import { getSemester, removeSemester } from './../../redux/semester.slice';
import EmptyResultImage from 'assets/images/empty-result.gif';
import { initForm } from './../../helpers/semester.helpers';
import ActionSemester from './../../components/ActionSemester/ActionSemester';
import RemoveSemester from './../../components/RemoveSemester/RemoveSemester';
import { useSortableData } from 'helpers/sortingTable/sortingTable';

const SemesterScreen = () => {
  const dispatch = useDispatch();
  const [itemSemester, setItemSemester] = useState(initForm);
  const [isDialogSemester, setIsDialogSemester] = useState(false);
  const [isDialogSemesterRemove, setIsDialogSemesterRemove] = useState(false);
  const [listChecked, setListChecked] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(getSemester());
  }, [dispatch]);

  const { listSemester, isListSemesterLoading } = useSelector(
    (state) => state.semester
  );
  const { dataSort, requestSort } = useSortableData(listSemester);

  const isCheckedAll = useMemo(() => {
    return (
      listSemester && listSemester.every((i) => listChecked.includes(i.id))
    );
  }, [listSemester, listChecked]);

  const handleCheckedAll = (isChecked) => {
    if (isChecked) {
      setListChecked(
        Array.from(new Set([...listChecked, ...listSemester.map((i) => i.id)]))
      );
    } else {
      setListChecked(
        listChecked.filter((id) => !listSemester.find((i) => i.id === id))
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
      setIsLoading(true);
      const response = await dispatch(removeSemester(id));
      if (removeSemester.fulfilled.match(response)) {
        toast.success('Xóa thành công !');
      } else {
        toast.error('Xóa thất bại !');
      }
      setIsLoading(false);
      setListChecked([]);
    });
  };

  if (isListSemesterLoading) {
    return <Loading />;
  }

  return (
    <>
      <TitleMain>Kỳ học</TitleMain>
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
              icon={<IoMdAdd />}
              color="primary"
              onClick={() => {
                setIsDialogSemester(true);
                setItemSemester(initForm);
              }}
            >
              Thêm
            </Button>
          </div>
        </HeaderTable>

        {listSemester && listSemester.length > 0 ? (
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
                  <Th sort onClick={() => requestSort('id')}>
                    STT
                  </Th>
                  <Th sort onClick={() => requestSort('name')}>
                    Kỳ học
                  </Th>
                  <Th align="right">Thao tác</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataSort.map((row) => (
                  <Tr key={row.id}>
                    <Td>
                      <CheckboxSingle
                        checked={listChecked.includes(row.id)}
                        onChange={() => handleChangeChecked(row.id)}
                      />
                    </Td>
                    <Td>{row.id}</Td>
                    <Td>{row.name}</Td>
                    <Td>
                      <BoxActionTable>
                        <Button
                          color="warning"
                          icon={<MdModeEdit />}
                          size="small"
                          onClick={() => {
                            setItemSemester(row);
                            setIsDialogSemester(true);
                          }}
                        />
                        <Button
                          color="danger"
                          size="small"
                          icon={<BsTrash />}
                          onClick={() => {
                            setItemSemester(row);
                            setIsDialogSemesterRemove(true);
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
                pageLength={10}
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

        {/* Dialog create / edit product type */}
        <PopupOverlay
          open={isDialogSemester}
          setOpen={setIsDialogSemester}
          title={itemSemester?.id ? 'Sửa Danh Mục' : 'Thêm Danh Mục '}
        >
          <ActionSemester item={itemSemester} setOpen={setIsDialogSemester} />
        </PopupOverlay>

        {/* overlay remove */}
        <RemoveSemester
          item={itemSemester}
          open={isDialogSemesterRemove}
          setOpen={setIsDialogSemesterRemove}
        />
      </WrapContent>
      <GroupAlert />
    </>
  );
};

export default memo(SemesterScreen);
