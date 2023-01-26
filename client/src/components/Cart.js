import React, { useEffect ,useState } from 'react';
import CartList from './cart/CartList'

export default function Cart({isOpen,user , cartItems}) {
  // useEffect(() => {
  //   fetch('/carts/' + id)
  //   .then((response) => {
  //     if (response.ok) {
  //       response.json()
  //       .then(setCart);
  //     }  
  //   });
  // }, []);
  // console.log(cart);


  return (
    <div className={isOpen ? 'Cart open' : 'Cart'}>
      <h1>Cart</h1>
      <CartList cartItems={cartItems} user={user} />
    </div>
  );
}
