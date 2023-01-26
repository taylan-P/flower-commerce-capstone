import React, { useEffect } from "react";
import CartCard from './CartCard'

export default function CartList({user,cartItems}){
    const reversed = [...cartItems].reverse();

const renderProductsToCart = reversed.map((product) => (
    <CartCard 
    key={Math.floor(Math.random() * (1 - 10000 + 1)) + 1}
    product={product}
    />
));
//return <><h1>hello world!</h1></>
return <div className="CartItem">{renderProductsToCart}</div>

}