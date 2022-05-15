import React from 'react'
import { Link } from "react-router-dom";

import "./Header.css";
 
const styles = {
    hoverStyle: {
      color: 'white'
    }
};

function Login() {
  return (
        <div className="login">
            <Link to="/login" style={styles.hoverStyle}>
                <div className="hello">
                    <span>
                        Hello, Sign In
                    </span>
                </div>
            </Link>
            
            <Link to="/login" style={styles.hoverStyle}>
                <div className="account">
                    <span>
                        Account & Lists
                    </span>
                </div>
            </Link>
        </div>
  )
}
export default Login