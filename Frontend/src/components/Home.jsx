import React, { useState, useEffect } from 'react';
import { ProductList } from './ProductList';
import axios from 'axios';

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts.data.products);
    })();
  }, []);

  const fetchProducts = async () => {
    return axios.get('http://localhost:3001/');
  };

  const deleteProduct = async (productID) => {
    await axios.delete(`http://localhost:3001/${productID}`);
    const fetchedProducts = await fetchProducts();
    setProducts(fetchedProducts.data.products);
  };

  return (
      <ProductList products={products} deleteProduct={deleteProduct} />
  );
};
