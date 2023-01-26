import React from 'react';
import { useState, useEffect } from 'react';
import {  Routes, Route , useNavigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './views/Landing';
import Signup from './views/Signup';
import ProductPage from './views/ProductPage';
import Error from './views/Errors';
// import './App.css';


function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([])

// const [products , setProducts] = useState(null);
const navigate = useNavigate();

useEffect(() => {
  fetch("/me").then((response) => {
    if (response.ok) {
      response.json().then((user) => {
        
        const cart = user.carts[0].products
        const items = user.carts[0].cart_items
        setUser(user)
        setCart(cart)
      })
    } else 
    navigate('/signup')
  })
  // .then(console.log(user))
  // const products = user.carts[0].products
  // setCart(products)
}, []);

  function addCart(newObj){
    setCart([...cart, newObj])
  }
  // console.log(user)
  // function pullProducts(){
  //   fetch('/products')
  //   .then((res) => res.json())
  //   .then(setProducts)
  // }
  // if (!user) return <Signup onLogin={setUser} />
  // if (!user) navigate("/signup")

  // function handleLogin(user) {
  //   setUser(user);
  // }

  // function handleLogout() {
  //   setUser(null);
  // }

  return (
    <>
    <Navbar user={user} cartItems={cart} onLogout={setUser}/>
    <Routes>
      <Route path="/" element={<Landing user={user}/>} />
      <Route path="/signup" element={<Signup onLogin={setUser} />} />
 
      <Route path="/flowers" element={<ProductPage onAddCart={addCart} currentUser={user}/>} />
      <Route path="/error" element={<Error />} />
    </Routes>
    </>
 
  );
}
export default App;
