import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './ducks/themes';
import tableReducer from './ducks/table';

export default configureStore({
  reducer: { theme: themeReducer, table: tableReducer },
  devTools: true,
});
