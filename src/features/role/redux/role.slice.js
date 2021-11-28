import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _get from 'lodash.get';

import { roleApi } from '../api/role.api';

export const getRole = createAsyncThunk(
  'role/getRole',
  async (_, { rejectWithValue }) => {
    try {
      const response = await roleApi.getRole();
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const postRole = createAsyncThunk(
  'role/postRole',
  async (value, { rejectWithValue }) => {
    try {
      const response = await roleApi.postRole(value);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const removeRoles = createAsyncThunk(
  'role/removeRole',
  async (id, { rejectWithValue }) => {
    try {
      await roleApi.removeRole(id);
      return id;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const putRole = createAsyncThunk(
  'role/putRole',
  async (value, { rejectWithValue }) => {
    try {
      const response = await roleApi.putRole(value);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const getRoleDetail = createAsyncThunk(
  'role/getRoleDetail',
  async (id, { rejectWithValue }) => {
    try {
      const response = await roleApi.getRoleDetail(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

const initialState = {
  // roles
  listRole: [],
  total: null,
  isListRoleLoading: false,

  // role
  itemRole: null,
  isItemRoleLoading: false,
};

const roleSlice = createSlice({
  name: 'role',
  initialState,

  extraReducers: {
    // get list role
    [getRole.pending]: (state) => {
      state.isListRoleLoading = true;
    },
    [getRole.fulfilled]: (state, action) => {
      state.isListRoleLoading = false;
      state.listRole = action.payload.data;
      state.total = action.payload.total;
    },
    [getRole.rejected]: (state) => {
      state.isListRoleLoading = false;
    },

    // get role detail
    [getRoleDetail.pending]: (state) => {
      state.isItemRoleLoading = true;
    },
    [getRoleDetail.fulfilled]: (state, action) => {
      state.isItemRoleLoading = false;
      state.itemRole = action.payload.data;
    },
    [getRoleDetail.rejected]: (state) => {
      state.isItemRoleLoading = false;
    },

    // post role
    [postRole.fulfilled]: (state, action) => {
      state.listRole = [...state.listRole, action.payload.data];
    },
    [postRole.rejected]: (state) => {
      state.isListRoleLoading = false;
    },

    // remove role
    [removeRoles.fulfilled]: (state, action) => {
      if (state.listRole) {
        state.listRole = state.listRole.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    [removeRoles.rejected]: (state) => {
      state.isListRoleLoading = false;
    },

    // put role
    [putRole.fulfilled]: (state, action) => {
      state.listRole = state.listRole.map((item) =>
        item.id === action.payload.data.id ? action.payload.data : item
      );
    },
    [putRole.rejected]: (state) => {
      state.isListRoleLoading = false;
    },
  },
});

const { reducer: roleReducer } = roleSlice;

export default roleReducer;
