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
    fetchCategory(4, setCategory)
  }, [setCategory])

  useEffect(() => {
    fetchProducts(setProducts);
  }, [setProducts]);

  useEffect(() => {
    fetchProduct(3, setProduct)
  }, [setProduct])

  return (
    <div>
      
    </div>
  )
}

export default App;
