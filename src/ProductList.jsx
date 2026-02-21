import React from "react";
import ProductCard from "./ProductCard.jsx"; 

export default function ProductList({ products }) {
  return (
    <div>
      <h3>Product List</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}