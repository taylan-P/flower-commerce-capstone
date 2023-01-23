import React from 'react';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import  Profile  from "./Profile"
import ProfileDrop from './ProfileDrop'
import { useNavigate } from 'react-router-dom';

export default function Navbar({ user, onLogout }) {
    const navigate = useNavigate()
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                onLogout(null);
                navigate('/signup')
            }
        });
    }
    
    return (
        <>
            {!user ? (
                <></>
            ) : (
                <nav className='navbar'>
                    {/* <Profile /> */}
                    <ShoppingCartIcon size={20} strokeWidth={1} className='shopping-cart' />
                    <button className='btn'> Products </button>
                    <ProfileDrop onLogout={handleLogoutClick} />
                </nav>

            )}

        </>

    )
}