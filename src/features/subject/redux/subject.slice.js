import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _get from 'lodash.get';

import { subjectApi, sortMajor } from './../api/subject.api.js';

export const getListSubject = createAsyncThunk(
  'subject/getListSubject',
  async (_, { rejectWithValue }) => {
    try {
      const response = await subjectApi.getListSubject();
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const postSubject = createAsyncThunk(
  'subject/postSubject',
  async (newSubject, { rejectWithValue }) => {
    try {
      const response = await subjectApi.postSubject(newSubject);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const removeSubject = createAsyncThunk(
  'subject/removeSubject',
  async (id, { rejectWithValue }) => {
    try {
      await subjectApi.removeSubject(id);
      return id;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const putSubject = createAsyncThunk(
  'subject/update',
  async (subject, { rejectWithValue }) => {
    try {
      const response = await subjectApi.putSubject(subject);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);
// lọc
export const SortMajor = createAsyncThunk('subject/sortMajor', async (id) => {
  try {
    const response = await sortMajor.sortMajors(id);
    console.log('response.data.data', response.data.data);
    return response.data.data;
  } catch (error) {}
});
const initialState = {
  listSubject: [],
  isListSubjectLoading: false,
};
const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  extraReducers: {
    // get list subject
    [getListSubject.pending]: (state) => {
      state.isListSubjectLoading = true;
    },
    [getListSubject.fulfilled]: (state, action) => {
      state.isListSubjectLoading = false;
      state.listSubject = action.payload.data;
    },
    [getListSubject.rejected]: (state) => {
      state.isListSubjectLoading = false;
    },

    // post subject
    [postSubject.fulfilled]: (state, action) => {
      console.log("ở đây",action.payload)
      state.listSubject = [...state.listSubject, action.payload.data];
    },
    [postSubject.rejected]: (state) => {
      state.isListSubjectLoading = false;
    },

    // remove subject
    [removeSubject.fulfilled]: (state, action) => {
      state.listSubject = state.listSubject.filter(
        (item) => item.id !== action.payload
      );
    },
    [removeSubject.rejected]: (state) => {
      state.isListSubjectLoading = false;
    },

    // put subject
    [putSubject.fulfilled]: (state, action) => {
      state.listSubject = state.listSubject.map((item) =>
        item.id === action.payload.data.id ? action.payload.data : item
      );
    },
    [putSubject.rejected]: (state) => {
      state.isListSubjectLoading = false;
    },
    // lọc theo majors
    [SortMajor.pending]: (state) => {
      // state.isListSubjectLoading = true;
    },
    [SortMajor.fulfilled]: (state, action) => {
      state.listSubject = action.payload;
      state.isListSubjectLoading = false;
    },
  },
});
const { reducer: subjectReducer } = subjectSlice;
export default subjectReducer;
