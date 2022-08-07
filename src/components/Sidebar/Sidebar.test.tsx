import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sidebar from './Sidebar';

describe('Card component', () => {
  const products = [{
    "name": "Leche",
    "price": 75000,
    "amount": 2,
    "id": 1
  },
  {
    "name": "Arroz",
    "price": 25000,
    "amount": 2,
    "id": 2
  }
]
  const handleClick = jest.fn();
  const component = <Sidebar
    title='Cart Test'
    listProduct={products}
    onClick={handleClick}
    />

  test('it render Sidebar', () => {
      const result = render(component);
      expect(result.container.querySelector('.sidebar')).toBeInTheDocument();
  });

  test('it renders price Card', () => {
    render(component);
    expect(screen.getByText('Total to Pay: 200000$')).toBeInTheDocument();
  });

  test('it render Sidebar', () => {
    render(component);
    expect(screen.getAllByTestId('list-item-cart')).toHaveLength(2);
  });


  test('eventHandler called on click', () => {
    render(component);
    const button = screen.getAllByTestId('sidebar-button');
    fireEvent.click(button[0]);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

})