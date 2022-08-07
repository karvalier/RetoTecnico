import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

describe('Card component', () => {
  const product = {
    "name": "Leche",
    "price": 75000,
    "amount": 2,
    "id": 1
  }
  const handleClick = jest.fn();
  const component = <Card 
    data={product}
    inCart={0}
    onClick={handleClick}
  />;  

  test('it render Card', () => {
      const result = render(component);
      expect(result.container.querySelector('.card')).toBeInTheDocument();
  });

  test('it renders name Card', () => {
      render(component);
      expect(screen.getByText('Leche')).toBeInTheDocument();
  });

  test('it renders price Card', () => {
    render(component);
    expect(screen.getByText('75000$')).toBeInTheDocument();
  });

  test('it renders amount Card', () => {
    render(component);
    expect(screen.getByText('Stock Available: 2')).toBeInTheDocument();
  });

  test('eventHandler called on click', () => {
    render(component);
    const card = screen.getAllByTestId('button-add-to-cart');
    fireEvent.click(card[0]);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

})