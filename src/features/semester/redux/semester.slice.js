import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _get from 'lodash.get';

import { semesterApi } from '../api/semester.api';

export const getSemester = createAsyncThunk(
  'semester/getSemester',
  async (_, { rejectWithValue }) => {
    try {
      const response = await semesterApi.getSemester();
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const postSemester = createAsyncThunk(
  'semester/postSemester',
  async (value, { rejectWithValue }) => {
    try {
      const response = await semesterApi.postSemester(value);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const removeSemester = createAsyncThunk(
  'semester/removeSemester',
  async (id, { rejectWithValue }) => {
    try {
      await semesterApi.removeSemester(id);
      return id;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const putSemester = createAsyncThunk(
  'semester/putSemester',
  async (value, { rejectWithValue }) => {
    try {
      const response = await semesterApi.putSemester(value);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

const initialState = {
  listSemester: [],
  isListSemesterLoading: false,
};

const semesterSlice = createSlice({
  name: 'semester',
  initialState,

  extraReducers: {
    // get semester
    [getSemester.pending]: (state) => {
      state.isListSemesterLoading = true;
    },
    [getSemester.fulfilled]: (state, action) => {
      state.isListSemesterLoading = false;
      state.listSemester = action.payload.semesters;
    },
    [getSemester.rejected]: (state) => {
      state.isListSemesterLoading = false;
    },

    // post semester
    [postSemester.fulfilled]: (state, action) => {
      state.listSemester = [...state.listSemester, action.payload];
    },
    [postSemester.rejected]: (state) => {
      state.isListSemesterLoading = false;
    },

    // remove semester
    [removeSemester.fulfilled]: (state, action) => {
      state.listSemester = state.listSemester.filter(
        (item) => item.id !== action.payload
      );
    },
    [removeSemester.rejected]: (state) => {
      state.isListSemesterLoading = false;
    },

    // put semester
    [putSemester.fulfilled]: (state, action) => {
      state.listSemester = state.listSemester.map((item) =>
        item.id === action.payload[0].id ? action.payload[0] : item
      );
    },
    [putSemester.rejected]: (state) => {
      state.isListSemesterLoading = false;
    },
  },
});

const { reducer: semesterReducer } = semesterSlice;

export default semesterReducer;
