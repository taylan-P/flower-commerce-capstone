import React from "react";
import CartCard from './CartCard'

export default function CartList({user}){
const renderProductsToCart = user.carts[0].products.map((product) => (
    <CartCard 
    key={Math.floor(Math.random() * (1 - 1000 + 1)) + 1}
    product={product}
    />
));
// return <><h1>hello world!</h1></>
return <div className="CartItem">{renderProductsToCart}</div>
}