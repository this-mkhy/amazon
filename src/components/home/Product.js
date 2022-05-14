import React from "react";

import { Link } from "react-router-dom";
import "./product.css";

function Product({ id, title,  price, rating, image }) {
  return (
    <div className="product">
       <div className="info">
          <h5 className="title">{title}</h5>
          <p className="price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="rating">
            {
              Array(rating).fill().map((_, indx) => (
                <span>⭐</span>
              )) 
            }
          </div>
      </div>

      <img className="productImg" src={image} alt="product-image" />
      <Link to="/product">See more</Link>
    </div>
  );
}

export default Product;