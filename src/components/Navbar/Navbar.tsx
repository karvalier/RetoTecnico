import React from 'react';
import './Navbar.scss';

const Navbar = (props: { children : React.ReactNode }) => {
  return (
    <div className='navbar' id='navbar'>
       {props.children}
    </div>
  );
}

export default Navbar;
