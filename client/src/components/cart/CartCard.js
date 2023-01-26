import React from "react";

export default function CartCard({ product }) {
    const { name, price, inventory_count, image } = product;
    return (
        <>
            <div className="CartItem-info">
            <img src={image} alt={name} className="CartItem-image" />
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>quantity: {inventory_count}</p>
            </div>
            <div className="CartItem-remove">
                <i className="fas fa-times-circle"></i>
            </div>
        </>
    )
}