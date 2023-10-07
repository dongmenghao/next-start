import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../index';

export interface AuthState {
  authState: boolean;
}

const initState: AuthState = {
  authState: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    setAuthState: (state, action) => {
      state.authState = action.payload;
    },
  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;
