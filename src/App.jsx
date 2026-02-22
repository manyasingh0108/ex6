import React, { useEffect, useState } from 'react';
import ProductList from './ProductList.jsx'; 

export default function App() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
       
        setproducts(data.products); 
      })
      .catch((error) => { 
         console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="app"> 
      <center><h2>Product Listing - (2500030961) - Manya Singh</h2> </center>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}