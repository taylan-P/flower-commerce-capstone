import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function ProductCard({product,currentUser,onAddCart}) {
    
    const {id ,name, price , inventory_count , image} = product;
    // function getProduct(){
    //     console.log({id});
    //     console.log(currentUser.id);
    // }
    function addToCart() {
        // e.preventDefault();
        const newObj = {
          cart_id: currentUser.id,
          product_id: id,
          quantity: 1
        }
        fetch(`/cart_items`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newObj)
        }).then(r=> r.json())
        .then((newObj) => onAddCart(newObj.product))
    }
    return (
        <div className="product-card-container">
        <div className="product-card">
            <img src={image}></img>
            <h3>{name}</h3>
            <p>${price}</p>
            <p> Only {inventory_count} Left!</p>
            <ShoppingCartIcon onClick={()=>addToCart()} className="product-cart" />
        </div>
    </div>
    
    )
}