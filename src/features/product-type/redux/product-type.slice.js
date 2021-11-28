import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _get from 'lodash.get';

import { productTypeApi } from './../api/product-type.api';

export const getProductType = createAsyncThunk(
  'productType/getProductType',
  async (_, { rejectWithValue }) => {
    try {
      const response = await productTypeApi.getProductTypes();
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const postProductType = createAsyncThunk(
  'productType/postProductType',
  async (value, { rejectWithValue }) => {
    try {
      const response = await productTypeApi.postProductTypes({
        product_type: value,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const putProductType = createAsyncThunk(
  'productType/putProductType',
  async (value, { rejectWithValue }) => {
    try {
      const response = await productTypeApi.putProductTypes({
        product_type: value,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const deleteProductType = createAsyncThunk(
  'productType/deleteProductType',
  async (id, { rejectWithValue }) => {
    try {
      productTypeApi.deleteProductTypes(id);
      return id;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

const initialState = {
  listProductType: [],
  isListProductTypeLoading: false,
};

const productTypeSlice = createSlice({
  name: 'product-type',
  initialState,
  extraReducers: {
    // get product type
    [getProductType.pending]: (state) => {
      state.isListProductTypeLoading = true;
    },
    [getProductType.fulfilled]: (state, action) => {
      state.isListProductTypeLoading = false;
      state.listProductType = action.payload.product_types;
    },
    [getProductType.rejected]: (state) => {
      state.isListProductTypeLoading = false;
    },

    // post product type
    [postProductType.fulfilled]: (state, action) => {
      state.isListProductTypeLoading = false;
      if (state.listProductType) {
        state.listProductType = [
          ...state.listProductType,
          action.payload.product_type,
        ];
      }
    },
    [postProductType.rejected]: (state) => {
      state.isListProductTypeLoading = false;
    },

    // delete product type
    [deleteProductType.fulfilled]: (state, action) => {
      state.isListProductTypeLoading = false;
      if (state.listProductType) {
        state.listProductType = state.listProductType.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    [deleteProductType.rejected]: (state) => {
      state.isListProductTypeLoading = false;
    },

    // put product type
    [putProductType.fulfilled]: (state, action) => {
      state.isListProductTypeLoading = false;
      if (state.listProductType) {
        state.listProductType = state.listProductType.map((item) =>
          item.id === action.payload.product_type.id
            ? action.payload.product_type
            : item
        );
      }
    },
    [putProductType.rejected]: (state) => {
      state.isListProductTypeLoading = false;
    },
  },
});

const { reducer: productTypeReducer } = productTypeSlice;

export default productTypeReducer;
