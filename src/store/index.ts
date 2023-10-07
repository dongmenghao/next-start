import { useDispatch } from 'react-redux';
import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice from './modules/authSlice';

const rootReducer = combineReducers({
  auth: authSlice,
});

const makeConfigStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

const makeStore = () => {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return makeConfigStore();
  } else {
    // we need it only on client side
    const persistConfig = {
      key: 'nextjs',
      blacklist: ['auth'], // make sure it does not clash with server keys
      storage,
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store: any = configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV !== 'production',
      middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
    });
    store.__persistor = persistStore(store); // Nasty hack
    return store;
  }
};

const store = makeStore();

export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
