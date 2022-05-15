import React from "react";
import Product from "./Product";
import "./scroll.css"; 

export default function ScrollbarBottom(props) {
    console.log(props.products)
    return (
        <div className="scrollContainer">
            {
                props.products.map( product => (
                    <div style={{padding: "40px"}} key={product.id}>
                        <Product
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            rating={product.rating}
                            image={product.imageUrl}
                        />
                    </div>
                ))
            }
        </div>
  );
} 