import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductPage({products}){
 const [plants , setPlants] = useState(null)
const navigate = useNavigate()
    useEffect(() => {
        fetch("/products")
        .then((response) =>{
            if (response.ok) {
                response.json()
                .then(setPlants);
            } else 
            navigate('/error')
        });
    }, []);
    // console.log(plants);
    
    // .then((res) => res.json())
    // .then(setPlants)
    // console.log(plants)
    return(
        <>
        </>
    )
}