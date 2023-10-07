import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AppState } from '../index';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export interface AuthState {
  authState: boolean;
  count: number;
}

const initState: AuthState = {
  authState: false,
  count: 0,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    setAuthState: (state, action) => {
      state.authState = action.payload;
    },
    addCount: state => {
      state.count = state.count + 1;
    },
    addCountParam: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['count'],
};

const delayAction = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const { setAuthState, addCount, addCountParam } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export const selectCount = (state: AppState) => state.auth.count;

export default persistReducer(authPersistConfig, authSlice.reducer);

export const addAsync = createAsyncThunk('auth/add', async (_, thunkAPI) => {
  await delayAction(1000);
  thunkAPI.dispatch(addCount());
  const state = (thunkAPI.getState() as AppState).auth;
  return state.count;
});

export const addAsyncParam = createAsyncThunk('auth/addParam', async (num: number, thunkAPI) => {
  await delayAction(1000);
  thunkAPI.dispatch(addCountParam(num));
  const state = (thunkAPI.getState() as AppState).auth;
  return state.count;
});
