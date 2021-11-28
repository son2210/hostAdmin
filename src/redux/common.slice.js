import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageTitle: null,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setPageTitle(state, action) {
      state.pageTitle = action.payload;
    },
  },
});

export const { setPageTitle } = commonSlice.actions;
export const commonReducer = commonSlice.reducer;
