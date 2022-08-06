import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Container, FlexboxGrid, Icon, Button, Toggle } from 'rsuite';
import Navbar from '../../components/Navbar/Navbar';
import SidebarCart from '../../components/Sidebar/Sidebar';
import cartState, { buyProducts } from '../../state/cart.state';
import productsState, { loadProducts } from '../../state/products.state';
import { StoreType } from '../../state/store';
import HomePage from '../HomePage/HomePage';
import ProductPage from '../ProductPage/ProductPage';
import './MainPage.scss';

const  MainPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const cart = useSelector((state: StoreType) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadProducts())
  }, []);

  const onBuy = () => {
    cart.products.forEach( product => {
      dispatch(productsState.actions.addToCart({ id: product.id, amount: product.amount }))
    })
    dispatch(buyProducts());
  }

  const onClean = () => {
    dispatch(cartState.actions.cleanProducts());
  }

  return (
    <div className={darkMode ? 'main dark-mode' : 'main light-mode'}>
      <Navbar>
        <FlexboxGrid align='middle'>
          {
            darkMode ? <div>Light Mode <Icon icon='sun-o' /></div> : 
              <div> Dark Mode <Icon icon='moon-o' /> </div> 
          }
          <Toggle value={darkMode} onChange={(value) =>  setDarkMode(value)}/>
        </FlexboxGrid>
      </Navbar>
      <Container>
          <Switch>
            <Route exact path="/"> 
              <HomePage />
            </Route>
            <Route exact path="/add-product"> 
              <ProductPage />
            </Route>
          </Switch>
        <SidebarCart 
          title='Cart'
          listProduct={cart.products}
          totalAmount={cart.amount}
          onClick={onBuy}
          onClean={onClean}
        />
        <Button 
          icon={<Icon icon="plus" />} 
          placement="left"
          appearance='primary'
          onClick={() => history.push('/add-product')}
          style={{ position: 'fixed', bottom: '10px', right: '10px' }}
        >
          Create Product
        </Button>
    </Container>
    </div>
  );
}

export default MainPage;