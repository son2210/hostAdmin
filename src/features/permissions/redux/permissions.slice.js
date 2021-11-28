import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _get from 'lodash.get';

import { permissionsApi } from '../api/permissions.api';

export const getPermissions = createAsyncThunk(
  'permissions/getPermissions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await permissionsApi.getPermissions();
      return response.data.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const postPermissions = createAsyncThunk(
  'permissions/postPermissions',
  async (value, { rejectWithValue }) => {
    try {
      const response = await permissionsApi.postPermissions({
        permissions: value,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const removePermissions = createAsyncThunk(
  'permissions/removePermissions',
  async (id, { rejectWithValue }) => {
    try {
      await permissionsApi.removePermissions(id);
      return id;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const putPermissions = createAsyncThunk(
  'permissions/putPermissions',
  async (value, { rejectWithValue }) => {
    try {
      const response = await permissionsApi.putPermissions({
        permissions: value,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

const initialState = {
  listPermission: [],
  isListPermissionLoading: false,
};

const permissionsSlice = createSlice({
  name: 'permissions',
  initialState,

  extraReducers: {
    // get permissions
    [getPermissions.pending]: (state) => {
      state.isListPermissionLoading = true;
    },
    [getPermissions.fulfilled]: (state, action) => {
      state.listPermission = action.payload;
      state.isListPermissionLoading = false;
    },
    [getPermissions.rejected]: (state) => {
      state.isListPermissionLoading = false;
    },

    // post permission
    [postPermissions.fulfilled]: (state, action) => {
      state.listPermission = [...state.listPermission, action.payload.data];
    },
    [postPermissions.rejected]: (state) => {
      state.isListPermissionLoading = false;
    },

    // remove permission
    [removePermissions.fulfilled]: (state, action) => {
      state.listPermission = state.listPermission.filter(
        (item) => item.id !== action.payload
      );
    },
    [removePermissions.rejected]: (state) => {
      state.isListPermissionLoading = false;
    },

    // put permission
    [putPermissions.fulfilled]: (state, action) => {
      state.listPermission = state.listPermission.map((item) =>
        item.id === action.payload.data.id ? action.payload.data : item
      );
    },
    [putPermissions.rejected]: (state) => {
      state.isListPermissionLoading = false;
    },
  },
});

const { reducer: permissionsReducer } = permissionsSlice;

export default permissionsReducer;
