import { createSlice } from '@reduxjs/toolkit';

import type { AppSlice } from './appSlice.types';

export const initialState: AppSlice = {
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearApp: (state) => {
      state = initialState;
    },
  },
});

export default appSlice;
