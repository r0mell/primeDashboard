import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (page) => {

  const API = `http://localhost:3001/api/v1/products?page=${page}&limit=3`;


  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(API)
      .then(res => setProducts(res.data.results))
      .catch((e) => console.log(e))
  }, [page]);

  return products;

};

export default useGetProducts;



/* const useGetProducts = (page) => {

  return axios.get(`http://localhost:3001/api/v1/products?page=${page}&limit=3`)
    .then(res => {
      const products = res.data.results
      return products;
    })
    .catch((e) => console.log(e))

}

export default useGetProducts; */