import axios from 'axios';

export const fetchProducts = async (setProducts) => {
  try{
    const response = await axios({
      url: 'http://localhost:8000/api/products/',
    });

    setProducts(response.data);
  } catch (error) {
    console.log(error);
  }
}

export const fetchProduct = async (id, setProduct) => {
  try {
    const response = await axios({
      url: `http://localhost:8000/api/products/${id}/`,
    });

    setProduct(response.data);
  } catch (error) {
    console.log(error);
  }
}
