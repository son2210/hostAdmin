import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _get from 'lodash.get';

import { subjectApi } from '../api/subject.api.js';

export const getListCategorySubject = createAsyncThunk(
  'category_subject/getListSubject',
  async (_, { rejectWithValue }) => {
    try {
      const response = await subjectApi.getListCategorySubject();
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const postCategorySubject = createAsyncThunk(
  'category_subject/postSubject',
  async (newSubject, { rejectWithValue }) => {
    try {
      const response = await subjectApi.postCategorySubjects(newSubject);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const removeCategorySubject = createAsyncThunk(
  'category_subject/removeSubject',
  async (id, { rejectWithValue }) => {
    try {
      await subjectApi.removeCategorySubject(id);
      return id;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

export const putCategorySubject = createAsyncThunk(
  'category_subject/update',
  async (subject, { rejectWithValue }) => {
    try {
      const response = await subjectApi.putCategorySubject(subject);
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

const initialState = {
  listCategorySubject: [],
  isCategorySubjectLoading: false,
};
const Category_subjectSlice = createSlice({
  name: 'category_subject',
  initialState,
  extraReducers: {
    // get list subject
    [getListCategorySubject.pending]: (state) => {
      state.isCategorySubjectLoading = true;
    },
    [getListCategorySubject.fulfilled]: (state, action) => {
      state.isCategorySubjectLoading = false;
      state.listCategorySubject = action.payload.data;
    },
    [getListCategorySubject.rejected]: (state) => {
      state.isCategorySubjectLoading = false;
    },

    // post subject
    [postCategorySubject.fulfilled]: (state, action) => {
      state.listCategorySubject = [
        ...state.listCategorySubject,
        action.payload.data,
      ];
    },
    [postCategorySubject.rejected]: (state) => {
      state.isListSubjectLoading = false;
    },

    // remove subject
    [removeCategorySubject.fulfilled]: (state, action) => {
      state.listCategorySubject = state.listCategorySubject.filter(
        (item) => item.id !== action.payload
      );
    },
    [removeCategorySubject.rejected]: (state) => {
      state.isListSubjectLoading = false;
    },

    // put subject
    [putCategorySubject.fulfilled]: (state, action) => {
      state.listCategorySubject = state.listCategorySubject.map((item) =>
        item.id === action.payload.data.id ? action.payload.data : item
      );
    },
    [putCategorySubject.rejected]: (state) => {
      state.isListSubjectLoading = false;
    },
  },
});
const { reducer: category_subjectReducer } = Category_subjectSlice;
export default category_subjectReducer;
