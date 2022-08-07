import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimpleThunk } from '../types/SimpleTunk';
import { Cart, Product } from '../types/types';

const initialStateCart: Cart = {
    products: [],
};

const cart = createSlice({
  name: 'cart',
  initialState: initialStateCart,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {  
      const newState = state; 
      const selIndicator = newState.products.find(
        (i) => i.id === action.payload.id
      );
      if (selIndicator) {
        selIndicator.amount = selIndicator.amount + action.payload.amount;
      }
      else {
        newState.products.push(action.payload);
      }
    },
    cleanProducts() {
      return initialStateCart;
    }
  },
});

export const addProduct = (data: Product): SimpleThunk => async (dispatch) => {
  dispatch(cart.actions.addProduct(data));
};

export const buyProducts = (): SimpleThunk => async (dispatch) => {
  // Simulate Buy Products
  dispatch(cart.actions.cleanProducts());
};

export default cart;
