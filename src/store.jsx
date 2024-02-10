import { configureStore } from '@reduxjs/toolkit';
import shipmentsReducer from './store/shipmentsSlice';

export const store = configureStore({
  reducer: {
    shipments: shipmentsReducer,
  },
});