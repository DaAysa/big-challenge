import axios from 'axios';

export const fetchProducts = async (setProducts) => {
  try{
    const { data: products } = await axios({
      url: 'http://localhost:8000/api/products/',
    });

    setProducts(products);
  } catch (error) {
    console.log(error);
  }
}

export const fetchProduct = async (id, setProduct) => {
  try {
    const { data: product } = await axios({
      url: `http://localhost:8000/api/products/${id}/`,
    });

    setProduct(product);
  } catch (error) {
    console.log(error);
  }
}
