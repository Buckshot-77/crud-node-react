import  React, {useState, useEffect } from 'react';
import { Header } from './Header';
import { ProductList } from './ProductList';
import axios from 'axios';

export const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const products = await fetchProducts();
      console.log(products)
    })();
  }, []);
  const fetchProducts = async () => {
    return axios.get('http://localhost:3001/');
  };
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
};
