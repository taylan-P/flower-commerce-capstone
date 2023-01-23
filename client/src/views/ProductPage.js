import React, { useState } from "react";
import { useEffect } from "react";

export default function ProductPage(){
const [plants , setPlants] = useState([])
    useEffect(() => {
        fetch("/products")
          .then((res) => res.json())
          .then(setPlants);
          console.log(plants);
      }, []);

    return(
        <>
        </>
    )
}