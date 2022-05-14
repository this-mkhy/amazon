import React from 'react'
import { Link } from "react-router-dom";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import "./Header.css";
 
function Checkout() {
  return (
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
  )
}
export default Checkout