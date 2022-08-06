import { configureStore } from '@reduxjs/toolkit';
import cartState from './cart.state';
import productsState from './products.state';

export const store = configureStore({
  reducer: {
    products : productsState.reducer,
    cart: cartState.reducer

  },
});

export type StoreType = ReturnType<typeof store.getState>;
