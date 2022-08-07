
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

describe('Navbar component', () => {
    test('it renders Navbar', () => {
        const result = render(<Navbar>Login</Navbar>);
        expect(result.container.querySelector('#navbar')).toBeInTheDocument();
    });

    test('it renders children', () => {
        render(<Navbar>Login</Navbar>);
        expect(screen.getByText('Login')).toBeInTheDocument();
    });
})
