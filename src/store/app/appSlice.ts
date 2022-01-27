import { createSlice } from '@reduxjs/toolkit';

import type { AppSlice } from './appSlice.types';

export const initialState: AppSlice = {
  loading: false,
  tema: localStorage.getItem('tema'),
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearApp: (state) => {
      state.loading = initialState.loading;
    },
    storeTema: (state, { payload }) => {
      localStorage.setItem('tema', payload);
      state.tema = payload;
    },
  },
});

export default appSlice;
