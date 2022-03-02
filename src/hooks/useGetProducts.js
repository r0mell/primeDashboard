import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

const useGetProducts = (page) => {

  const { getProducts } = useContext(AppContext);

  useEffect(() => {

    getProducts(page)

  }, [page])

}

export default useGetProducts;






/*import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (page) => {

  const API = `http://localhost:3001/api/v1/products/paginator?page=${page}&limit=3`;

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(API)
      .then(res => setProducts(res.data.results))
      .catch((e) => console.log(e))
  }, [page]);

  return products;

};

export default useGetProducts;

*/
