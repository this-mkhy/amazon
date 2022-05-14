import React from 'react'
import { Link } from "react-router-dom";

import "./Header.css";
 
function Logo() {
  return (
    <div className="logo">
        <Link to="/">
            <img
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6g_BzCpqhJnSxm6-BQcetgzjVqx1UCoPzKVlN3jL_F1ma3EiD0vIHLyFbHG5Z76cADVA&usqp=CAU"
                alt="amazon logo"
            />
        </Link>
    </div>
  )
}
export default Logo