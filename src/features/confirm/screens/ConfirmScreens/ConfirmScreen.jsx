import React, { memo, useEffect, useCallback, useState, useRef } from 'react';
import Select from 'react-select';
import { useParams } from 'react-router';
import {CgSortAz}  from "react-icons/cg"

import {
  getProductType,
  getDetail,
  getListCampuses,
  ProductUser,
  SearchProduct,
  filterProduct,
  filterStatusProduct
} from './../../redux/product.slice';

import { useSelector, useDispatch } from 'react-redux';
import {
  WrapContent,
  TitleMain,
  TitleControl,
  BoxControl,
  BoxSearchInput,
  InputSearch,
} from 'styles/common/common-styles';


import ConfirmTable from './../../components/ConfirmTable/ConfirmTable';
import PopupOverlay from 'components/PopupOverlay/PopupOverlay';
import Loading from 'components/Loading/Loading';
import { getSemesters } from '../../../uploadExcel/redux/uploadExcel.slice';
import { MapOptions } from 'helpers/convert/map-options';
import ReviewProduct from 'features/confirm/components/Review/ReviewProduct';

const ConfirmScreen = () => {
  const dispatch = useDispatch();
  const { path } = useParams();

  const { listProduct, isProductLoading, listProductType, productDetail } =
    useSelector((state) => state.product);
  const { useLogin } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(true);
  const { listSemester } = useSelector((state) => state.uploadExcel);
  const { listCampuses } = useSelector((state) => state.product);

  const listSelectOptionSemester = MapOptions(listSemester);
  const listSelectOptionCampuses = MapOptions(listCampuses);

  const [SearchName ,setName]=  useState(null)
  const [result,setResult]=  useState(0)
  const [Advanced,SetAdvanced]=  useState(false)
  const timeOutString = useRef(null)

  const ProductTypes = useCallback(() => {
    dispatch(getProductType());
  }, [dispatch]);

  const CampusesList = useCallback(() => {
    dispatch(getListCampuses());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSemesters());
    ProductTypes();
    dispatch(ProductUser({ user_id: useLogin.id }));
    CampusesList();
  }, [dispatch, ProductTypes, CampusesList, useLogin]);

  useEffect(() => {
    dispatch(getDetail(path));
  }, [dispatch, path]);
  // change tr???ng th??i sp
  const HandlerStatus=  async (data) => {
  const response = await  dispatch(filterStatusProduct(data.value))
  setResult(1)
  if(filterStatusProduct.fulfilled.match(response)){
    setResult(2)
  }
  };
  const ChangeSearch = (e)=>{
    const value = e.target.value
    if(!value){
      setName(value )
      if(timeOutString.current){
        clearTimeout(timeOutString.current)
      }
      timeOutString.current = setTimeout( async()=>{
       const response = await dispatch(ProductUser({ user_id: useLogin.id }));
       setResult(1)
       if(ProductUser.fulfilled.match(response)) {
        setResult(2)
       }      
      },800)
    
    }else{
      setName(value )
      if(timeOutString.current){
        clearTimeout(timeOutString.current)
      }
      timeOutString.current = setTimeout( async()=>{
        const data = {"text" : value }
        const response = await dispatch(SearchProduct(data))
        setResult(1)
        if(SearchProduct.fulfilled.match(response)) {
         setResult(2)
        } 
      },800)
    }
   
  }
// 
const Filter = (e,type)=>{
  const data={
    id:e.value,
    type : type
  }
  dispatch(filterProduct(data))
}
  if (isProductLoading) {
    return <Loading />;
  }
  return (
    <>
      <TitleMain> Danh s??ch s???n ph???m </TitleMain>
      <WrapContent>
        <div className="titleSearch"> 
        <TitleControl>T??m ki???m</TitleControl>
        <span onClick={()=>SetAdvanced(!Advanced)}><i className="icon"> <CgSortAz/></i> N??ng cao </span>
        </div>
        <BoxSearchInput>
          <BoxControl className="box-control">
            <label htmlFor="" className="label-control">
              T??n s???n ph???m
            </label>
            <InputSearch
              type="text"
              placeholder="T??m ki???m"
              className="input-filter input-search"
            onKeyUp={(e)=>ChangeSearch(e)}
            />
          </BoxControl>

          <BoxControl className="box-control">
            <label htmlFor="" className="label-control">
              Ch??? nhi???m
            </label>
            <Select
              className="select-option input-search"
              options={[
                { label: 'Qu???n tr???', value: 1 },
                { label: 'Gi??o v???', value: 2 },
                { label: 'Gi???ng vi??n', value: 3 },
                { label: 'Sinh vi??n', value: 4 },
              ]}
              placeholder="T??m theo ch??? nhi???m"
              onChange={(e)=>Filter(e,"major")}
            />
          </BoxControl>
        </BoxSearchInput>
        <BoxSearchInput>
          <BoxControl className="box-control">
            <label htmlFor="" className="label-control">
              B??? m??n
            </label>
            <Select
              className="select-option input-search"
              options={[
                { label: 'Qu???n tr???', value: 1 },
                { label: 'Gi??o v???', value: 2 },
                { label: 'Gi???ng vi??n', value: 3 },
                { label: 'Sinh vi??n', value: 4 },
              ]}
              placeholder="T??m theo b??? m??n"
              onChange={(e)=>Filter(e,"master_user")}
            />
          </BoxControl>

          <BoxControl className="box-control">
            <label htmlFor="" className="label-control">
              K?? h???c
            </label>
            <Select
              className="select-option input-search"
              options={
                ({ label: 'All', value: 1 },
                listSelectOptionSemester ? listSelectOptionSemester : [])
              }
              placeholder="T??m theo k?? h???c"
              onChange={(e)=>Filter(e,"semester")}
            />
          </BoxControl>
        </BoxSearchInput>
        <BoxSearchInput>
          <BoxControl className="box-control">
            <label htmlFor="" className="label-control">
              C?? s???
            </label>
            <Select
              className="select-option input-search"
              options={listSelectOptionCampuses}
              placeholder="T??m theo C?? S??? "
              onChange={(e)=>Filter(e,"campus")}
            />
          </BoxControl>
          <BoxControl className="box-control">
            <label htmlFor="" className="label-control">
            Tr???ng th??i
            </label>
            <Select
              className="select-option input-search"
              options={[
                { label: 'Gi???ng vi??n ph?? duy???t ', value:1},
                { label: 'Ch??? nhi???m ph?? duy???t ', value: 2 },
                { label: 'Ch??a th??m ', value: 0 },
                { label: 'Ph?? duy???t ', value: 3 },
              ]}
              placeholder="Tr???ng Th??i "
              onChange={(e)=>HandlerStatus(e) }
            />
          </BoxControl>
        </BoxSearchInput>
      </WrapContent>
     
      <ConfirmTable
        result={result}
        data={listProduct}
        listProductType={listProductType}
        productDetail={productDetail}
      />
      {path && productDetail && (
        <PopupOverlay
          open={open}
          setOpen={setOpen}
          size="xl"
          title="Chi Ti???t S???n Ph???m "
          scroll
        >
          <ReviewProduct
            data={productDetail && productDetail}
            setOpen={setOpen}
          />
        </PopupOverlay>
      )}
    </>
  );
};

export default memo(ConfirmScreen);
