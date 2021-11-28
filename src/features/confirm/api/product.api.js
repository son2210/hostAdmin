import api from 'api/api';
import {
  PRODUCT_PATH,
  PRODUCT_TYPE,
  CHAIRMAN_APPROVE_PATH,
  CAMPUSES_PATH,
  SEARCH_PATH
} from './../constants/confirm.paths';

const getListProduct = () => {
  return api.get(PRODUCT_PATH.LIST);
};

const putStatusProduct = (product) => {
  console.log('product', product);
};
const postProductApprove = (data) => {
  if (data.status === 2 || data.status === 1) {
    return api.post(
      PRODUCT_PATH.APPROVE.replace(':id', data.id.toString()),
      data
    );
  } else if (data.status === 3) {
    const test = {
      status: data.status,
      message: data.message,
    };
    return api.put(
      CHAIRMAN_APPROVE_PATH.CHAIRMAN_APPROVE.replace(':id', data.id.toString()),
      test
    );
  }
};
const productRemove = (id) => {
  return api.delete(PRODUCT_PATH.REMOVE.replace(':id', id.toString()));
};
const productTypes = () => {
  return api.get(PRODUCT_TYPE.LIST);
};
const detailProduct = (id) => {
  return api.get(PRODUCT_PATH.DETAIL.replace(':id', id.toString()));
};
const getCampus = () => {
  return api.get(CAMPUSES_PATH.LIST);
};
const productUser  = (id)=>{
  return  api.post(PRODUCT_PATH.PRODUCT_USER,id)
}
// search product 
const seachProduct  = (data)=>{
  return api.post(SEARCH_PATH.SEARCH_NAME,data)
}
// lọc theo chuyên ngành 
const filter = (data)=>{
  return api.post(SEARCH_PATH.FILTER_PATH,data)
}
//  trạng thái sp
const filterStatus  = (id)=>{
  return api.get(SEARCH_PATH.FILTE_STATUS.replace(":id",id.toString()))
}
export const confirmProductApi = {
  getListProduct,
  putStatusProduct,
  postProductApprove,
  productRemove,
  productTypes,
  detailProduct,
  getCampus,
  productUser,
  seachProduct,
  filter,
  filterStatus
};
