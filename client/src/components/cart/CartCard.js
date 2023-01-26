import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";


export default function CartCard({ product }) {
    const { name, price, inventory_count, image } = product;
    
    // function handleDelete(){
    //     debugger
    //     // fetch('/cart_items/${id}')
    // }

    return (
        <>
            <div className="CartItem-info">
                <img src={image} alt={name} className="CartItem-image" />
                <h4>{name}</h4>
                <h3>{price}</h3>
            </div>
        </>
    )
}