import { createSlice } from '@reduxjs/toolkit';

import tableData from '../../constants/tableData';

const initialState = { currentPage: 1, totalPages: 2, data: [] };

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => ({
      ...state,
      currentPage: action.payload,
    }),
    setData: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setCurrentPage, setData } = tableSlice.actions;

export default tableSlice.reducer;

export const getTableData = () => (dispatch, state) => {
  dispatch(setData(tableData[state().table.currentPage]));
};

export const nextPage = () => (dispatch, state) => {
  const { currentPage, totalPages } = state().table;

  if (currentPage < totalPages) {
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(getTableData());
  }
};

export const previousPage = () => (dispatch, state) => {
  const { currentPage } = state().table;

  if (currentPage - 1 > 0) {
    dispatch(setCurrentPage(currentPage - 1));
    dispatch(getTableData());
  }
};
