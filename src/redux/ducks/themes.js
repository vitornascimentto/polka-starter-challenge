import { createSlice } from '@reduxjs/toolkit';

const initialState = { currentTheme: 'Dark' };

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setCurrentTheme: (state, action) => ({
      ...state,
      currentTheme: action.payload,
    }),
  },
});

export const { setCurrentTheme } = themeSlice.actions;

export default themeSlice.reducer;
