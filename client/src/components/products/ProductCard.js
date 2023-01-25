import React from "react";

export default function ProductCard({product,currentUser}) {
    
    const {id ,name, price , inventory_count , image} = product;
    function getProduct(){
        console.log({id});
        console.log(currentUser.id);
    }
    function handleSubmit() {
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
        })
    }
    return (
        <div className="product-card-container">
        <div className="product-card">
            <img src={image}></img>
            <h3>{name}</h3>
            <p>${price}</p>
            <p> Only {inventory_count} Left!</p>
            <button onClick={()=>handleSubmit()} className="form-button">click me!</button>
        </div>
    </div>
    
    )
}