import React, { memo, useEffect, useState, useMemo } from 'react';
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
import { getUsers } from 'features/user/redux/user.slice';
import {
  getListCategorySubject,
  removeCategorySubject,
} from '../redux/category_subject.slice';
import { initForm } from '../helpers/subject.helpers';
import { MapOptions } from 'helpers/convert/map-options';

const CategorySubjectScreen = () => {
  const dispatch = useDispatch();
  const [itemSubject, setItemSubject] = useState(initForm);
  const [isDialogSubject, setIsDialogSubject] = useState(false);
  const [isDialogSubjectRemove, setIsDialogSubjectRemove] = useState(false);
  const [listChecked, setListChecked] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { listCategorySubject, listUser, isCategorySubjectLoading } =
    useSelector((state) => ({
      listCategorySubject: state.category_subject.listCategorySubject,
      isCategorySubjectLoading: state.category_subject.isCategorySubjectLoading,

      listUser: state.user.listUser,
    }));

  useEffect(() => {
    dispatch(getListCategorySubject());
    dispatch(getUsers());
  }, [dispatch]);
  const listSelectMajor = MapOptions(listUser);
  const isCheckedAll = useMemo(() => {
    return (
      listCategorySubject &&
      listCategorySubject.every((i) => listChecked.includes(i.id))
    );
  }, [listCategorySubject, listChecked]);

  const handleCheckedAll = (isChecked) => {
    if (isChecked) {
      setListChecked(
        Array.from(
          new Set([...listChecked, ...listCategorySubject.map((i) => i.id)])
        )
      );
    } else {
      setListChecked(
        listChecked.filter(
          (id) => !listCategorySubject.find((i) => i.id === id)
        )
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
      const response = await dispatch(removeCategorySubject(id));
      if (removeCategorySubject.fulfilled.match(response)) {
        toast.success('X??a th??nh c??ng !');
      } else {
        toast.error('X??a th???t b???i !');
      }
      setIsLoading(false);
      setListChecked([]);
    });
  };

  if (isCategorySubjectLoading) {
    return <Loading />;
  }
  return (
    <>
      <TitleMain> Danh s??ch m??n h???c</TitleMain>
      <WrapContent>
        <TitleControl>T??m ki???m</TitleControl>
        <BoxSearchInput>
          <BoxControl className="box-control">
            <label htmlFor="" className="label-control">
              T??m ki???m
            </label>
            <InputSearch
              type="text"
              placeholder="T??m ki???m"
              className="input-filter input-search"
            />
          </BoxControl>

          <BoxControl className="box-control">
            <label htmlFor="" className="label-control">
              Chuy??n ng??nh
            </label>
            <Select
              className="select-option input-search"
              options={listSelectMajor || []}
              placeholder="Chuy??n ng??nh "
            />
          </BoxControl>
        </BoxSearchInput>
      </WrapContent>
      <WrapContent>
        <HeaderTable>
          <Button
            disabled={!listChecked.length || isLoading}
            loading={isLoading}
            onClick={handleRemoveAll}
          >
            X??a t???t c???
          </Button>
          <Button
            icon={<IoMdAdd />}
            color="primary"
            onClick={() => {
              setIsDialogSubject(true);
              setItemSubject(initForm);
            }}
          >
            Th??m
          </Button>
        </HeaderTable>
        {listCategorySubject && listCategorySubject.length > 0 ? (
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
                  <Th sort>T??n B??? M??n</Th>
                  <Th sort>M?? Code</Th>
                  <Th align="right">Thao t??c</Th>
                </Tr>
              </Thead>
              <Tbody>
                {listCategorySubject.map((row, index) => (
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
            <div>Kh??ng c?? k???t qu??? n??o</div>
            <img src={EmptyResultImage} alt="" />
          </EmptyResult>
        )}

        <PopupOverlay
          open={isDialogSubject}
          setOpen={setIsDialogSubject}
          title={itemSubject?.id ? 'S???a B??? M??n ' : 'Th??m B??? M??n  '}
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

export default memo(CategorySubjectScreen);
