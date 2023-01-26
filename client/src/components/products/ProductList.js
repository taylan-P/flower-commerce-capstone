import React from "react";
import ProductCard from "./ProductCard"

export default function ProductList({products , currentUser, onAddCart}){
    // console.log(products);
    const renderProducts = products.map((product) => (
            <ProductCard
              key={Math.floor(Math.random() * (1 - 10000 + 1)) + 1}
              product={product}
              currentUser={currentUser}
              onAddCart={onAddCart}
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