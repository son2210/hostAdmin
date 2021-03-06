import React, { memo, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import { RiDeleteBinFill } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';
import {Link}  from  "react-router-dom"
import { BiExit, BiDotsVerticalRounded } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { toast } from 'react-toastify';
import _get from 'lodash.get';

import { WrapContent } from 'styles/common/common-styles';
import {
  TableCustom,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from 'components/Table/TableCustom';
import { TablePagination } from 'components/Pagination/Pagination';
import {
  GroupPagination,
  GroupAction,
  BoxMain,
  ListAction,
} from './ConfirmTable.styles';
import PopupOverlay from 'components/PopupOverlay/PopupOverlay';
import ReviewProduct from './../Review/ReviewProduct';
import RemoveProduct from './../RemoveProduct/RemoveProduct';
import { useDispatch, useSelector } from 'react-redux';
import { approveProduct } from '../../redux/product.slice';
import GroupAlert from './../../../../components/AlertMessage/AlertMessage';
import Refuse from '../ActionProduct/refuse/Refuse';
import { useSortableData } from 'helpers/sortingTable/sortingTable';

const ConfirmTable = ({ data, listProductType ,result}) => {
  const dispatch = useDispatch();
  const { useLogin } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [itemRemove, setItemRemove] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [refuse, setRefuse] = useState(null);
  const [itemRefuse, setItemRefuse] = useState(false);
  const [isShowAction, setIsShowAction] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  const [product, setProduct] = useState({
    id: '',
    name: '',
    subject: '',
    description: '',
  });
  const [pagination, setPagination] = useState({
    page: 1,
    pageLength: 20,
    totalRecords: 100,
  });

  const handleChangePage = (values) => {
    setPagination({ ...pagination, ...values });
  };

  const review = (item) => {
    setProduct(item);
    setOpen(!open);
  };

  const removeProduct = (item) => {
    setOpenRemove(true);
    setItemRemove(item);
  };

  const handleConfirm = async (item) => {
    setIsLoading(true);
    setDisableButton(true);
    const productUpdateStatus = {
      id: item.id,
      status: item.status + 1,
      message: null,
    };
    const response = await dispatch(approveProduct(productUpdateStatus));
    if (approveProduct.fulfilled.match(response)) {
      toast.success('Ch???p nh???n th??nh c??ng !');
    } else {
      toast.error(_get(response.payload, 'name[0]'));
    }
    setIsLoading(false);
    setDisableButton(false);
  };

  const handleRefuse = (item) => {
    setRefuse(item);
    setItemRefuse(true);
  };
  // sort 
  const { dataSort, requestSort } = useSortableData(data ? data : []);
  return (
    <WrapContent>
      <BoxMain>
        {result === 2 && <div className="messengers">K???t qu??? t??m ki???m :  { data ? data.length : "0"} </div>}
        <TableCustom className="table-confirm">
          <Thead>
            <Tr>
              <Th sort onClick={() => requestSort('id')}>
                STT
              </Th>
              <Th sort onClick={() => requestSort('name')}>
                T??n ????? t??i
              </Th>
              <Th sort onClick={() => requestSort('class')}>
                L???p
              </Th>
              <Th sort onClick={() => requestSort('subject')}>
                M??n
              </Th>
              <Th className="fix-th" sort>
                K??? h???c
              </Th>
              <Th sort onClick={() => requestSort('students')}>
                Th??nh vi??n
              </Th>
              <Th align="right">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {result === 1 ?  <Tr> <div className = "resultLoader"> </div> </Tr>:
          <>
            {dataSort?.length> 0? dataSort.map((item, index) => {
              return (
                <Tr key={index}>
                  <Td> {item.id}</Td>
                  <Td>{item.name} </Td>
                  <Td>{item.class} </Td>
                  <Td>{item.subject && item.subject.name} </Td>
                  <Td> </Td>
                  <Td>
                    {item.students &&
                      item.students.map((element, i) => {
                        return (
                          <li key={i}>
                            {element.name} - {element.student_code}
                          </li>
                        );
                      })}
                  </Td>
                  <Td>
                    <GroupAction>
                      <span
                        className="show-action"
                        onClick={() => setIsShowAction(item.id)}
                      >
                        <BiDotsVerticalRounded />
                      </span>

                      {item.id === isShowAction && (
                        <OutsideClickHandler
                          onOutsideClick={() => setIsShowAction(null)}
                        >
                          <ListAction>
                            {/* ch???p nh???n  */}
                            {item.status === 1 && (
                              // gi???ng vi??n ph?? duy???t
                              <button
                                disabled={
                                  useLogin.id === item.teacher_id &&
                                  !disableButton
                                    ? false
                                    : true
                                }
                                className="item-action"
                                onClick={() => handleConfirm(item)}
                              >
                                {isLoading ? (
                                  <span className="loader"></span>
                                ) : (
                                  <span className="icon-action">
                                    <FiCheck />
                                  </span>
                                )}
                                Ch???p nh???n l???n 1
                              </button>
                            )}
                            {item.status === 2 && (
                              // ch??? nhi???m ph?? duy???t
                              <button
                                className="item-action"
                                disabled={!disableButton ? false : true}
                                onClick={() => handleConfirm(item)}
                              >
                                {isLoading ? (
                                  <span className="loader"></span>
                                ) : (
                                  <span className="icon-action">
                                    <FiCheck />
                                  </span>
                                )}
                                Ch???p nh???n l???n 2
                              </button>
                            )}

                            {/* xem tr????cs */}
                            <div
                              className="item-action"
                              onClick={() => {
                                review(item);
                                setOpen(true);
                              }}
                            >
                              <span className="icon-action">
                                <AiOutlineEye />
                              </span>
                              Xem tr?????c
                            </div>
                            {/* c???p nh???t  */}
                            <div
                              className="item-action"
                            >
                              <span className="icon-action">
                                <MdModeEdit />
                              </span>
                              <Link to={`/product/update/${item.id}`} > S???a</Link>
                             
                            </div>
                            {/* t??? tr???i */}
                            {item.status === 1 && (
                              <button
                                disabled={
                                  useLogin.id === item.teacher_id &&
                                  !disableButton
                                    ? false
                                    : true
                                }
                                className="item-action "
                                onClick={() =>
                                  handleRefuse(item) + setDisableButton(true)
                                }
                              >
                                <span className="icon-action">
                                  <BiExit />
                                </span>
                                T??? ch???i
                              </button>
                            )}
                            {item.status === 2 && (
                              <button
                                disabled={
                                  useLogin.id === item.teacher_id &&
                                  !disableButton
                                    ? false
                                    : false
                                }
                                className="item-action "
                                onClick={() =>
                                  handleRefuse(item) + setDisableButton(true)
                                }
                              >
                                <span className="icon-action">
                                  <BiExit />
                                </span>
                                T??? ch???i
                              </button>
                            )}
                            {item.status === 3 && ( ""
                              // <button
                              //   disabled={!disableButton ? false : true}
                              //   hidden={true}
                              //   className="item-action "
                              //   onClick={() =>
                              //     handleRefuse(item) + setDisableButton(true)
                              //   }
                              // >
                              //   <span className="icon-action">
                              //     <BiExit />
                              //   </span>
                              //   T??? ch???i
                              // </button>
                            )}

                            {/* x??a  */}
                            <div
                              className="item-action"
                              onClick={() => removeProduct(item)}
                            >
                              <span className="icon-action">
                                <RiDeleteBinFill />
                              </span>
                              X??a
                            </div>
                          </ListAction>
                        </OutsideClickHandler>
                      )}
                    </GroupAction>
                  </Td>
                </Tr>
              );
            }) : <div className = "result"> Ch??a c?? s???n ph???m n??o !</div>
            }
           </>
}
          </Tbody>
        </TableCustom>
        <GroupPagination>
          <TablePagination
            pageLengthMenu={[20, 50, 100]}
            page={pagination.page}
            pageLength={pagination.pageLength}
            totalRecords={pagination.totalRecords}
            onPageChange={handleChangePage}
          />
        </GroupPagination>
      </BoxMain>

      {/* chi ti???t s???n ph???m  */}
      <PopupOverlay
        open={open}
        setOpen={setOpen}
        size="xl"
        title="Chi Ti???t S???n Ph???m "
        scroll
        setDisableButton={setDisableButton}
      >
        <ReviewProduct data={product} setOpen={setOpen} />
      </PopupOverlay>

      {/* x??a s???n ph???m  */}
      <RemoveProduct
        open={openRemove}
        setOpen={setOpenRemove}
        item={itemRemove}
      />
      {/* t??? tr???i s???n ph???m  */}
      <PopupOverlay
        open={itemRefuse}
        setOpen={setItemRefuse}
        size="md"
        title="L?? do ?"
        setDisableButton={setDisableButton}
      >
        <Refuse
          item={refuse}
          setItemRefuse={setItemRefuse}
          setDisableButton={setDisableButton}
        />
      </PopupOverlay>

      <GroupAlert />
    </WrapContent>
  );
};

export default memo(ConfirmTable);
