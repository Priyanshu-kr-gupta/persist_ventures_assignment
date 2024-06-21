import { configureStore } from '@reduxjs/toolkit';
import optionsReducer from '../features/optionsSlice';
import searchReducer from '../features/searchSlice';
export const store = configureStore({
  reducer: {
    options: optionsReducer,
    search: searchReducer
  },
});