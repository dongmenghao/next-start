'use client';
import store from './index';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

persistStore(store);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.__persistor}>
      </PersistGate> */}
      {children}
    </Provider>
  );
};
