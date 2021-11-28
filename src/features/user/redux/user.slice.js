import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _get from 'lodash.get';
import { userApi } from './../api/user.api';
export const getUsers = createAsyncThunk('user/getUsers', async () => {
  try {
    const response = await userApi.getUsers();
    return response.data;
  } catch (error) {}
});
export const postUsers = createAsyncThunk(
  'user/post',
  async (user, { rejectWithValue }) => {
    try {
      const response = await userApi.postUser(user);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);
export const putUsers = createAsyncThunk('user/putUsers', async (value) => {
  try {
    const response = await userApi.putUser(value);
    return response.data;
  } catch (error) {}
});

export const getUserDetail = createAsyncThunk(
  'user/getUserDetail',
  async (id) => {
    try {
      const response = await userApi.getUserDetail(id);
      return response.data;
    } catch (error) {}
  }
);

const initialState = {
  // users
  listUser: [],
  isListUserLoading: false,
  messenger: null,

  // user
  itemUser: null,
  isItemUserLoading: false,
};

const useSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // get list user
    [getUsers.pending]: (state) => {
      state.isListUserLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isListUserLoading = false;
      state.listUser = action.payload.users;
    },
    [getUsers.rejected]: (state) => {
      state.isListUserLoading = false;
    },

    // get user detail
    [getUserDetail.pending]: (state) => {
      state.isItemUserLoading = true;
    },
    [getUserDetail.fulfilled]: (state, action) => {
      state.isItemUserLoading = false;
      state.itemUser = action.payload.user;
    },
    [getUserDetail.rejected]: (state) => {
      state.isItemUserLoading = false;
    },

    [postUsers.fulfilled]: (state, action) => {
      if (action.payload.name) {
        state.listUser = [...state.listUser, action.payload];
      }
      state.messenger = action.payload;
    },
    [postUsers.rejected]: (state, action) => {
      state.messenger = action.payload;
    },
  },
});

const { reducer: useReducer } = useSlice;
export default useReducer;
