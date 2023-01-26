import React from "react";
import ProductCard from "./ProductCard"

export default function ProductList({products , currentUser}){
    // console.log(products);
    const renderProducts = products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currentUser={currentUser}
            />
          ));
    return <div className="product-card">{renderProducts}</div> 
    
}

// const renderPlants = plants.map((plant) => (
//     <PlantCard
//       key={plant.id}
//       plant={plant}
//       updatePlants={updatePlants}
//       deletePlant={deletePlant}
//     />
//   ));
//   return <ul className="cards">{renderPlants}</ul>;
// }