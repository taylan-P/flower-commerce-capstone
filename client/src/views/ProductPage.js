import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/products/ProductList";

export default function ProductPage({currentUser}){
 const [products , setProducts] = useState([])
const navigate = useNavigate()
    useEffect(() => {
        fetch("/products")
        .then((response) =>{
            if (response.ok) {
                response.json()
                .then(setProducts);
            } else 
            navigate('/error')
        });
    }, []);
    // console.log(products);
    
    // .then((res) => res.json())
    // .then(setPlants)
    // console.log(plants)
    return(
        <>
        <ProductList currentUser={currentUser} products={products} />
        </>
    )
}