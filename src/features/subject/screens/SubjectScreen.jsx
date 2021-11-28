import React, { memo, useEffect, useState, useMemo, useCallback } from 'react';
import Select from 'react-select';
import { IoMdAdd } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

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
import {
  TableCustom,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
} from 'components/Table/TableCustom';
import { Button } from 'components/Button/Button';
import { TablePagination } from 'components/Pagination/Pagination';
import Loading from 'components/Loading/Loading';
import GroupAlert from 'components/AlertMessage/AlertMessage';
import PopupOverlay from 'components/PopupOverlay/PopupOverlay';
import CheckboxSingle from 'components/FormElements/ElementCheckbox/CheckboxSingle';

import ActionSubject from '../components/ActionSubject/ActionSubject';
import RemoveSubject from '../components/RemoveSubject/RemoveSubject';

import EmptyResultImage from 'assets/images/empty-result.gif';
import { getMajors } from 'features/majors/redux/majors.slice';
import {
  getListSubject,
  removeSubject,
  SortMajor,
} from './../redux/subject.slice';
import { initForm } from './../helpers/subject.helpers';
import { MapOptions } from 'helpers/convert/map-options';
const SubjectScreen = () => {
  const dispatch = useDispatch();
  const [itemSubject, setItemSubject] = useState(initForm);
  const [isDialogSubject, setIsDialogSubject] = useState(false);
  const [isDialogSubjectRemove, setIsDialogSubjectRemove] = useState(false);
  const [listChecked, setListChecked] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [messengerSort, setMessengerSort] = useState(null);
  const { listSubject, listMajors, isListSubjectLoading } = useSelector(
    (state) => ({
      listSubject: state.subject.listSubject,
      isListSubjectLoading: state.subject.isListSubjectLoading,
      listMajors: state.majors.listMajors,
    })
  );
  const getAll = useCallback(()=>{
    dispatch(getListSubject());
    dispatch(getMajors());
  },[dispatch])
  useEffect(() => {
    getAll()
  }, [dispatch,getAll]);

  const listSelectMajor = MapOptions(listMajors);

  const isCheckedAll = useMemo(() => {
    return listSubject && listSubject.every((i) => listChecked.includes(i.id));
  }, [listSubject, listChecked]);

  const handleCheckedAll = (isChecked) => {
    if (isChecked) {
      setListChecked(
        Array.from(new Set([...listChecked, ...listSubject.map((i) => i.id)]))
      );
    } else {
      setListChecked(
        listChecked.filter((id) => !listSubject.find((i) => i.id === id))
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
      const response = await dispatch(removeSubject(id));
      if (removeSubject.fulfilled.match(response)) {
        toast.success('Xóa thành công !');
      } else {
        toast.error('Xóa thất bại !');
      }
      setIsLoading(false);
      setListChecked([]);
    });
  };
  const handleSortMajos = async (data) => {
    const majors_id = data.value;
    if (majors_id === 0) {
      dispatch(getListSubject());
      setMessengerSort(null);
    } else {
      const response = await dispatch(SortMajor(majors_id));
      if (SortMajor.fulfilled.match(response)) {
        setMessengerSort(data.label);
      }
    }
  };
  if (isListSubjectLoading) {
    return <Loading />;
  }
  return (
    <>
      <TitleMain> Danh sách môn học</TitleMain>
      <WrapContent>
        <TitleControl>Tìm kiếm</TitleControl>
        <BoxSearchInput>
          <BoxControl className="box-control">
            <label htmlFor="" className="label-control">
              Tìm kiếm
            </label>
            <InputSearch
              type="text"
              placeholder="Tìm kiếm"
              className="input-filter input-search"
            />
          </BoxControl>

          <BoxControl className="box-control">
            <label htmlFor="" className="label-control">
              Chuyên ngành
            </label>
            <Select
              className="select-option input-search"
              options={
                listSelectMajor
                  ? [{ label: 'All', value: 0 }, ...listSelectMajor]
                  : []
              }
              placeholder="Chuyên ngành "
              onChange={(e) => handleSortMajos(e)}
            />
          </BoxControl>
        </BoxSearchInput>
      </WrapContent>
      <WrapContent>
        <HeaderTable>
          <div className="resultSeach">
            {messengerSort && (
              <span>
                Kết quả : &nbsp; {messengerSort} ( {listSubject.length} )
              </span>
            )}
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
                setIsDialogSubject(true);
                setItemSubject(initForm);
              }}
            >
              Thêm
            </Button>
          </div>
        </HeaderTable>

        {listSubject && listSubject.length > 0 ? (
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
                  <Th sort>STT</Th>
                  <Th sort>Tên Môn Học</Th>
                  <Th sort>Mã Môn </Th>
                  {!messengerSort && <Th sort>Tên Chuyên Ngành </Th>}
                  <Th align="right">Thao tác</Th>
                </Tr>
              </Thead>
              <Tbody>
                {listSubject.map((row, index) => (
                  <Tr key={row.id}>
                    <Td>
                      <CheckboxSingle
                        checked={listChecked.includes(row.id)}
                        onChange={() => handleChangeChecked(row.id)}
                      />
                    </Td>
                    <Td>{index + 1}</Td>
                    <Td>{row.name}</Td>
                    <Td>{row.code}</Td>
                    {!messengerSort && <Td>{row.majors && row.majors.name}</Td>}
                    <Td>
                      <BoxActionTable>
                        <Button
                          color="warning"
                          icon={<MdModeEdit />}
                          size="small"
                          onClick={() => {
                            setItemSubject(row);
                            setIsDialogSubject(true);
                          }}
                        />
                        <Button
                          color="danger"
                          size="small"
                          icon={<BsTrash />}
                          onClick={() => {
                            setItemSubject(row);
                            setIsDialogSubjectRemove(true);
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

        <PopupOverlay
          open={isDialogSubject}
          setOpen={setIsDialogSubject}
          title={itemSubject?.id ? 'Sửa Môn Học' : 'Thêm Môn Học '}
        >
          <ActionSubject
            item={itemSubject}
            setOpen={setIsDialogSubject}
            options={listSelectMajor}
          />
        </PopupOverlay>

        <RemoveSubject
          item={itemSubject}
          open={isDialogSubjectRemove}
          setOpen={setIsDialogSubjectRemove}
        />
      </WrapContent>

      <GroupAlert />
    </>
  );
};

export default memo(SubjectScreen);
