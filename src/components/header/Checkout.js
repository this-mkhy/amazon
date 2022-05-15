import React from 'react'
import { Link } from "react-router-dom";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import "./Header.css";
 
const styles = {
    hoverStyle: {
      color: 'white'
    }
};

function Checkout() {
  return (
        <div className="checkout">
            <Link to="/orders" style={styles.hoverStyle}>
                <span className="orders">Orders</span>
            </Link>
    
            <Link to="/checkout" style={styles.hoverStyle}>
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