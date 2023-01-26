import React, { useState } from 'react';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import  Profile  from "./Profile"
import ProfileDrop from './ProfileDrop'
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

export default function Navbar({ user, onLogout , cartItems}) {
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
 
  
    
    return (
        <>
            {!user ? (
                <></>
            ) : (
                <nav className='navbar'>
                    <ShoppingCartIcon onClick={handleCartClick} size={20} strokeWidth={1} className='shopping-cart' />
                    <button onClick={()=>navigate('/flowers')}> Products </button>
                    <ProfileDrop user={user} onLogout={handleLogoutClick} />
                    <Cart cartItems={cartItems} isOpen={isCartOpen}/>
                </nav>

            )}

        </>

    )
}