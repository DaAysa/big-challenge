import axios from 'axios';

export const fetchCategories = async (setCategories) => {
  try{
    const response = await axios({
      url: 'http://localhost:8000/api/categories/',
    });

    setCategories(response.data);
  } catch (error) {
    console.log(error);
  }
}

export const fetchCategory = async (id, setCategory) => {
  try {
    const response = await axios({
      url: `http://localhost:8000/api/categories/${id}/`,
    });

    setCategory(response.data);
  } catch (error) {
    console.log(error);
  }
}
