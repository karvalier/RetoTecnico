import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimpleThunk } from '../types/SimpleTunk';
import { Product } from '../types/types';

const dataProducts = {
  products: [
    {
      "name": "Leche",
      "price": 75000,
      "amount": 2,
      "id": 1
      },
      {
      "name": "Cereal",
      "price": 85300,
      "amount": 3,
      "id": 2
      },
      {
      "name": "Huevos",
      "price": 75000,
      "amount": 12,
      "id": 3
      },
      {
      "name": "Carne",
      "price": 85300,
      "amount": 21,
      "id": 4
      },
      {
      "name": "Queso",
      "price": 75000,
      "amount": 8,
      "id": 5
      },
      {
      
      "name": "Arroz",
      "price": 85300,
      "amount": 9,
      "id": 6
      },
      {
      "name": "Frijoles",
      "price": 85300,
      "amount": 32,
      "id": 7
      },
      {
      "name": "Lentejas",
      "price": 175000,
      "amount": 42,
      "id": 8
      },
      {
      "name": "Avena",
      "price": 85300,
      "amount": 56,
      "id": 9
      },
      {
      "name": "Pollo",
      "price": 375000,
      "amount": 23,
      "id": 10
      }
  ]
}

const initialStateProducts: Product[] = [];

const products = createSlice({
  name: 'products',
  initialState: initialStateProducts,
  reducers: {
    addProducts( state, action: PayloadAction<Product[]>) {
      return [...action.payload];
    },
    addProduct(state,  action: PayloadAction<Product>) {
      return [{ ...action.payload, id: action.payload?.id || state.length + 1 }, ...state ];
    },
    addToCart(state, action: PayloadAction<{id: number, amount: number}>) {
      const selIndicator = state.find(
        (i) => i.id === action.payload.id
      );
      if (selIndicator) {
        selIndicator.amount = selIndicator.amount - action.payload.amount
      }
    },
  },
});

export const loadProducts = (): SimpleThunk => async (dispatch) => {
  dispatch(products.actions.addProducts(dataProducts.products));
};

export const addProduct = (data: Product): SimpleThunk => async (dispatch) => {
  dispatch(products.actions.addProduct(data));
};

export default products;
