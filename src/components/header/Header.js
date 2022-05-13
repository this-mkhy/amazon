import React from 'react'
import { Link } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Egy from '../../images/egypt.svg';
import "./Header.css";
 
function Header() {
  return (
    <div className="header">
        <Link to="/">
            <img
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6g_BzCpqhJnSxm6-BQcetgzjVqx1UCoPzKVlN3jL_F1ma3EiD0vIHLyFbHG5Z76cADVA&usqp=CAU"
                alt="amazon logo"
            />
        </Link>

        <div className="county">
            <div className="location">
                <LocationOnIcon />
            </div>
            <div className="deliver">
                <span className="desc1">Deliver to </span> <br />
                <span className="desc2">Egypt</span>
            </div>
        </div>

        <div className="search">
            <input className="searchInput" type="text" />
            <SearchIcon className="searchIcon" />
            <img src={Egy} alt="Egypt flag" style={{height: "20px", width: "20px", margin: "12px"}}/>
            <ArrowDropDownIcon style={{color: "#ffffff", marginLeft:"-17"}}/>

        </div>

        <div className="login">
            <Link to="/login">
                <div className="hello">
                    <span>
                        Hello, Sign In
                    </span>
                </div>
            </Link>
            
            <Link to="/login">
                <div className="account">
                    <span>
                        Account & Lists
                    </span>
                </div>
            </Link>
        </div>

        <div className="checkout">
            <Link to="/orders">
                <span className="orders">Orders</span>
                
            </Link>
    
            <Link to="/checkout">
                <div className="shopping">
                    <AddShoppingCartIcon />
                    
                    <span className="cart">
                        Cart
                    </span>
                </div>
            </Link>
        </div> 
    </div>
  )
}
export default Header