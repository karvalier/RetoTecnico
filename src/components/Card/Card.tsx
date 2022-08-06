import React, { useState } from 'react';
import { Button, ButtonToolbar, Icon, IconButton, Input, Panel, Placeholder } from 'rsuite';
import { Product } from '../../types/types';
import './Card.scss';

const Card = (props: { 
  data: Product, 
  inCart: number,  
  onClick?: (data: Product) => void
}) => {
  const [amountToCard, setAmountToCard] = useState(1);

  return (
    <Panel shaded bordered bodyFill className='card'>
        <Placeholder.Graph active />
        <div className='title'>{props.data.name}</div>
        <div className='text'>{props.data.price}$</div>
        <div>Stock Available:  {props.data.amount}</div>
        <div>Available to add to cart: {props.data.amount - props.inCart}</div>
        <ButtonToolbar>
          <IconButton  
            icon={ <Icon icon="minus"/> } 
            onClick={() => {
              amountToCard > 1 && setAmountToCard(amountToCard - 1);
            }}
          />
          <Input value={amountToCard.toString()} />
          <IconButton  
            icon={ <Icon icon="plus"/> } 
            onClick={() => {
              amountToCard < (props.data.amount - props.inCart) && setAmountToCard(amountToCard + 1);
            }}
          />
          <Button 
            appearance="primary"
            disabled={props.data.amount === props.inCart}
            onClick={() => {
              props.onClick && props.onClick({ ...props.data, amount: amountToCard });
              setAmountToCard(1);
            }}
          >
            Add to cart
          </Button>
        </ButtonToolbar>
    </Panel>
  );
}

export default Card;
