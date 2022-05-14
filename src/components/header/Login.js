import React from 'react'
import { Link } from "react-router-dom";

import "./Header.css";
 
function Login() {
  return (
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
  )
}
export default Login