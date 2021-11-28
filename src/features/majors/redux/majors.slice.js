import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _get from 'lodash.get';

import { majorsApi } from '../api/majors.api';

export const getMajors = createAsyncThunk(
  'majors/getMajors',
  async (_, { rejectWithValue }) => {
    try {
      const response = await majorsApi.getMajors();
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const postMajors = createAsyncThunk(
  'majors/postMajors',
  async (majors, { rejectWithValue }) => {
    try {
      const response = await majorsApi.postMajors(majors);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const removeMajors = createAsyncThunk(
  'majors/removeMajors',
  async (id, { rejectWithValue }) => {
    try {
      await majorsApi.removeMajors(id);
      return id;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const putMajors = createAsyncThunk(
  'majors/putMajors',
  async (majors, { rejectWithValue }) => {
    try {
      const response = await majorsApi.putMajors(majors);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

const initialState = {
  listMajors: [],
  isMajorsLoading: false,
};

const majorsSlice = createSlice({
  name: 'majors',
  initialState,

  extraReducers: {
    // list majors
    [getMajors.pending]: (state) => {
      state.isMajorsLoading = true;
    },
    [getMajors.fulfilled]: (state, action) => {
      state.isMajorsLoading = false;
      state.listMajors = action.payload.data;
    },
    [getMajors.rejected]: (state) => {
      state.isMajorsLoading = false;
    },

    // create majors
    [postMajors.fulfilled]: (state, action) => {
      state.isMajorsLoading = false;
      if (state.listMajors) {
        state.listMajors = [...state.listMajors, action.payload.data];
      }
    },
    [postMajors.rejected]: (state) => {
      state.isMajorsLoading = false;
    },

    // remove majors
    [removeMajors.fulfilled]: (state, action) => {
      state.isMajorsLoading = false;
      if (state.listMajors) {
        state.listMajors = state.listMajors.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    [removeMajors.rejected]: (state) => {
      state.isMajorsLoading = false;
    },

    // put majors
    [putMajors.fulfilled]: (state, action) => {
      state.isMajorsLoading = false;
      if (state.listMajors) {
        state.listMajors = state.listMajors.map((item) =>
          item.id === action.payload.data.id ? action.payload.data : item
        );
      }
    },
    [putMajors.rejected]: (state) => {
      state.isMajorsLoading = false;
    },
  },
});

const { reducer: majorsReducer } = majorsSlice;

export default majorsReducer;
