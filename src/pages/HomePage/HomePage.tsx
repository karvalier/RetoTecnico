import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlexboxGrid } from 'rsuite';
import Card from '../../components/Card/Card';
import { addProduct } from '../../state/cart.state';
import { loadProducts } from '../../state/products.state';
import { StoreType } from '../../state/store';
import { Product } from '../../types/types';

const  HomePage = () => {
  const products = useSelector((state: StoreType) => state.products);
  const cart = useSelector((state: StoreType) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts())
  }, []);

  const addToCard = (data: Product) => {
    dispatch(addProduct(data));
  }

  return (
    <FlexboxGrid justify="center">
      {
        products.map(product => 
          <Card 
            data={product} 
            key={product.id}
            inCart={cart.products.find(productCart => productCart.id === product.id)?.amount || 0}
            onClick={addToCard}
          />
        )
      }
    </FlexboxGrid>
  );
}

export default HomePage;