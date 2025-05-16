import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import employeeReducer from './slices/employeeSlice';
import assetReducer from './slices/assetSlice';
import expenseReducer from './slices/expenseSlice';
import incomeReducer from './slices/incomeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    employees: employeeReducer,
    assets: assetReducer,
    expenses: expenseReducer,
    income: incomeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;