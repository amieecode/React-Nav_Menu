import React from 'react'
import { Nav,NavLink,Bars,NavMenu } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
            <h1>ABSUMSA</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to='/home' activeStyle> Home </NavLink>
            <NavLink to='/about' activeStyle> About </NavLink>
            <NavLink to='/event' activeStyle> Event </NavLink>
            <NavLink to='/Contact-us' activeStyle> Contact Us </NavLink>
            <NavLink to='/resources' activeStyle> Our Resources </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
};

export default Navbar;
