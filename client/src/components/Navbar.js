import React, { useState } from 'react';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import  Profile  from "./Profile"
import ProfileDrop from './ProfileDrop'
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

export default function Navbar({ user, onLogout }) {
    const navigate = useNavigate()
    const [isCartOpen, setIsCartOpen] = useState(false);
   
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                onLogout(null);
                navigate('/signup')
            }
        });
    }

  function handleCartClick() {
    setIsCartOpen(!isCartOpen);
  }
  function handleCartCreate(){
    fetch(`/carts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify({
        user_id: user.id,
      }),
    })
  }
  
    
    return (
        <>
            {!user ? (
                <></>
            ) : (
                <nav className='navbar'>
                    {/* <Profile /> */}
                    <ShoppingCartIcon onClick={handleCartClick} size={20} strokeWidth={1} className='shopping-cart' />
                    <button onClick={handleCartCreate} >Click me!</button>
                    <button onClick={()=>navigate('/flowers')}> Products </button>
                    <ProfileDrop onLogout={handleLogoutClick} />
                    <Cart isOpen={isCartOpen}/>
                </nav>

            )}

        </>

    )
}