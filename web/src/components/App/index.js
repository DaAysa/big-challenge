import { useState, useEffect } from 'react';

import { fetchCategories, fetchCategory } from '../../api/category';
import { fetchProducts, fetchProduct } from '../../api/product';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchCategories(setCategories);
  }, [setCategories]);

  useEffect(() => {
    if (categories[0]) {
      fetchCategory(categories[0].id, setCategory);
    }
  }, [setCategory, categories]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, [setProducts]);

  useEffect(() => {
    if (products[0]) {
      fetchProduct(products[0].id, setProduct);
    }
  }, [setProduct, products])

  return (
    <div></div>
  )
}

export default App;
