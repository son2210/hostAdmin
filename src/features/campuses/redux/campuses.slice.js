import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _get from 'lodash.get';

import { campusesApi } from './../api/campuses.api';

export const getCampuses = createAsyncThunk(
  'auth/getCampuses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await campusesApi.getCampuses();
      return response.data;
    } catch (error) {
      return rejectWithValue(_get(error.response.data, 'errors', ''));
    }
  }
);

const initialState = {
  listCampuses: [],
  isListCampusesLoading: false,
};

const campusesSlice = createSlice({
  name: 'campuses',
  initialState,

  extraReducers: {
    [getCampuses.pending]: (state) => {
      state.isListCampusesLoading = true;
    },
    [getCampuses.fulfilled]: (state, action) => {
      state.isListCampusesLoading = false;
      state.listCampuses = action.payload.campuses;
    },
  },
});

const { reducer: campusesReducer } = campusesSlice;

export default campusesReducer;
