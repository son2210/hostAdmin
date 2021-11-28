import React, { memo, useEffect, useState } from 'react';
import Select from 'react-select';
import { MdModeEdit } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import {
  TableCustom,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from 'components/Table/TableCustom';
import {
  WrapContent,
  TitleMain,
  TitleControl,
  BoxControl,
  BoxSearchInput,
  InputSearch,
  GroupPagination,
  BoxActionTable,
  HeaderTable,
  EmptyResult,
} from 'styles/common/common-styles';
import GroupAlert from 'components/AlertMessage/AlertMessage';

import HightLightText from 'components/HightLightText/HightLightText';
import { TablePagination } from 'components/Pagination/Pagination';
import { Button } from 'components/Button/Button';
import Loading from 'components/Loading/Loading';
import PopupOverlay from 'components/PopupOverlay/PopupOverlay';

import { getUsers } from './../../redux/user.slice';
import EmptyResultImage from 'assets/images/empty-result.gif';
import { USER_PATHS } from './../../constants/user.paths';
import avatarEmpty from 'assets/images/empty-avatar.png';
import AddUser from 'features/user/components/ActionUser/AddUser';
import { GroupRole } from './UserScreen.styles';
import { useSortableData } from 'helpers/sortingTable/sortingTable';

const UserScreen = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { isListUserLoading, listUser } = useSelector((state) => ({
    isListUserLoading: state.user.isListUserLoading,
    listUser: state.user.listUser,
  }));
  const addUser = () => {
    setOpen(true);
  };

  const { dataSort, requestSort } = useSortableData(listUser);

  if (isListUserLoading) {
    return <Loading />;
  }

  return (
    <>
      <TitleMain>User</TitleMain>
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

          <BoxControl className="box-control">
            <label htmlFor="" className="label-control">
              Vai trò
            </label>
            <Select
              className="select-option input-search"
              options={[
                { label: 'Quản trị', value: 1 },
                { label: 'Giáo vụ', value: 2 },
                { label: 'Giảng viên', value: 3 },
                { label: 'Sinh viên', value: 4 },
              ]}
              placeholder="Tìm theo vai trò"
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
            )} */}{' '}
          </div>
          <div className="buttonAction">
            <Button color="primary">Tải file excel</Button>

            <Button
              color="primary"
              icon={<IoMdAdd />}
              onClick={() => addUser()}
            >
              Thêm
            </Button>
          </div>
        </HeaderTable>

        {listUser && listUser.length > 0 ? (
          <TableCustom>
            <Thead>
              <Tr>
                <Th sort onClick={() => requestSort('id')}>
                  STT
                </Th>
                <Th sort onClick={() => requestSort('name')}>
                  Tên
                </Th>
                <Th>Ảnh</Th>
                <Th sort onClick={() => requestSort('email')}>
                  Email
                </Th>
                <Th sort onClick={() => requestSort('student_code')}>
                  MSSV
                </Th>
                <Th>Vai trò</Th>
                <Th align="right">Thao tác</Th>
              </Tr>
            </Thead>

            <Tbody>
              {dataSort.map((row) => (
                <Tr key={row.id}>
                  <Td>{row?.id}</Td>
                  <Td>{row?.name}</Td>
                  <Td>
                    <img
                      src={row?.avatar || avatarEmpty}
                      width="50px"
                      height="50px"
                      alt=""
                    />
                  </Td>
                  <Td>{row?.email}</Td>
                  <Td>{row?.student_code || '-'}</Td>
                  <Td>
                    <GroupRole>
                      {row.roles &&
                        row?.roles.map((item) => (
                          <div className="item-role">
                            <HightLightText value={item.name}>
                              {item.name}
                            </HightLightText>
                          </div>
                        ))}
                    </GroupRole>
                  </Td>
                  <Td>
                    <BoxActionTable>
                      <Button
                        color="warning"
                        to={USER_PATHS.USER_PROFILE.replace(/:id/, row.id)}
                        icon={<MdModeEdit />}
                        size="small"
                      />

                      <Button
                        color="danger"
                        disabled={true}
                        size="small"
                        icon={<BsTrash />}
                      />
                    </BoxActionTable>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </TableCustom>
        ) : (
          <EmptyResult>
            <div>Không có kết quả nào</div>
            <img src={EmptyResultImage} alt="" />
          </EmptyResult>
        )}
        <PopupOverlay open={open} setOpen={setOpen} title="Thêm Tài Khoản ">
          <AddUser setOpen={setOpen} />
        </PopupOverlay>
        <GroupPagination>
          <TablePagination
            pageLengthMenu={[20, 50, 100]}
            page={10}
            pageLength={100}
            totalRecords={10}
            onPageChange={() => null}
          />
        </GroupPagination>
      </WrapContent>
      <GroupAlert />
    </>
  );
};

export default memo(UserScreen);
