import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AuthSlice, Token } from './authSlice.types';

export const initialState: AuthSlice = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: Boolean(localStorage.getItem('token')),
};

const clientesSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuth: (state) => {
      state = initialState;
    },
    storeToken: (state, { payload }: PayloadAction<Token>) => {
      localStorage.setItem('token', payload ?? '');
      state.token = payload;
    },
    storeIsAuthenticated: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuthenticated = payload;
    },
  },
});

export default clientesSlice;
