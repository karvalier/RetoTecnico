import React, { useEffect, useState } from 'react';
import { Button, Divider, Icon, Sidebar } from 'rsuite';
import { Product } from '../../types/types';
import './Sidebar.scss';

const SidebarCart = (props: { 
  title: string, 
  listProduct: Product[], 
  onClick?: () => void,
  onClean?: () => void,
}) => {
  const [totalPay, setTotalPay] = useState(0);

  useEffect(() => {
    let pay = props.listProduct.reduce(
      (total, product) => total + (product.price * product.amount), 0
    );
    setTotalPay(pay);
  },[props.listProduct])

  return (
    <Sidebar className='sidebar' >
      <div >
        <div className='header'>{props.title} <Icon icon='shopping-cart' /></div>
        {
          props.listProduct.map(product => 
            <div data-testid='list-item-cart'  key={product.name}>{product.name}: {product.amount}</div>
          )
        }
        <Divider />
        <div>Total to Pay: {totalPay}$</div>
        <Button 
          appearance="primary"
          data-testid="sidebar-button"
          onClick={() => props.onClick && props.onClick()}
        >
          Buy
        </Button>
        <Button 
          appearance="default"
          onClick={() => props.onClean && props.onClean()}
        >
          Clean
        </Button>
      </div>
    </Sidebar>
  );
}



export default SidebarCart;
