import React from 'react' 

import "./Header.css";
 
import Logo from './Logo';
import Location from './Location';
import Search from './Search';
import Login from './Login';
import Checkout from './Checkout';

function Header() {
  return (
    <div className="header">
        <Logo />
        <Location />
        <Search />
        <Login /> 
        <Checkout /> 
    </div>
  )
}
export default Header