import React from "react";

export default function ProductCard({product}){
    
    const {name, price , inventory_count , image} = product;
    return (
        <div className="product-card-container">
        <div className="product-card">
            <img src={image}></img>
            <h3>{name}</h3>
            <p>{price}$</p>
            <p> Only {inventory_count} Left!</p>
            <button className="form-button">click me!</button>
        </div>
    </div>
    
    )
}