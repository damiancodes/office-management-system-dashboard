// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
    login: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    }
  }
});

export const { reset, login, logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;