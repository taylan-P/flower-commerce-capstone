import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error(){
    const navigate = useNavigate();
    function handleclick(){
        navigate('/');
    }
    return(
        <>
        <h1>ERROR: 404 NOT FOUND</h1>
        <button onClick={handleclick}>Back Home</button>
        </>
    )
}