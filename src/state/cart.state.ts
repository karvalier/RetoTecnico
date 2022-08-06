import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimpleThunk } from '../types/SimpleTunk';
import { Product } from '../types/types';

interface Cart {
    products: Product[]
    amount: number;
}

const initialStateCart: Cart = {
    products: [],
    amount: 0
};

const cart = createSlice({
  name: 'cart',
  initialState: initialStateCart,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {  
      const newAmount = state.amount + (action.payload.amount * action.payload.price);
      const newState = state; 
      const selIndicator = newState.products.find(
        (i) => i.id === action.payload.id
      );
      if (selIndicator) {
        selIndicator.amount = selIndicator.amount + action.payload.amount;
        newState.amount = newAmount;
      }
      else {
        newState.products.push(action.payload);
        newState.amount = newAmount;
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
