import axios from 'axios';

export const fetchCategories = async (setCategories) => {
  try{
    const { data: categories } = await axios({
      url: 'http://localhost:8000/api/categories/',
    });

    setCategories(categories);
  } catch (error) {
    console.log(error);
  }
}

export const fetchCategory = async (id, setCategory) => {
  try {
    const { data: category } = await axios({
      url: `http://localhost:8000/api/categories/${id}/`,
    });

    setCategory(category);
  } catch (error) {
    console.log(error);
  }
}
