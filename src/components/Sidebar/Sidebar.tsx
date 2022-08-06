import React from 'react';
import { Button, Divider, Icon, Sidebar } from 'rsuite';
import { Product } from '../../types/types';
import './Sidebar.scss';

const SidebarCart = (props: { 
  title: string, 
  listProduct: Product[], 
  totalAmount: number, 
  onClick?: () => void,
  onClean?: () => void,
}) => {

  return (
    <Sidebar className='sidebar'>
      <div >
        <div className='header'>{props.title} <Icon icon='shopping-cart' /></div>
        {
          props.listProduct.map(product => 
            <div key={product.name}>{product.name}: {product.amount}</div>
          )
        }
        <Divider />
        <div>Total to Pay: {props.totalAmount} $</div>
        <Button 
          appearance="primary"
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
