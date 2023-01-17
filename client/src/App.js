import React from 'react';
import { useState, useEffect } from 'react';
import {  Routes, Route , useNavigate } from "react-router-dom";

// import Navbar from './components/Navbar';
import Landing from './views/Landing';
import Signup from './views/Signup';
// import './App.css';


function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  //  if (!user) return <Signup onLogin={setUser} />
  // if (!user) navigate("/signup")

  function handleLogin(user) {
    setUser(user);
  }

  // function handleLogout() {
  //   setUser(null);
  // }

  return (
  
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup onLogin={setUser}/>} />
    </Routes>
 
  );
}

export default App;
