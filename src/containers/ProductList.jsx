import React, { useState, useContext } from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import AppContext from '../context/AppContext';


const ProductList = () => {

  const { state, addToEdit } = useContext(AppContext);
  const [page, setPage] = useState(1);

  const products = useGetProducts(page);


  const handleAddToCart = product => () => {
    addToEdit(product)
  }

  const handlePageIncrement = () => {
    setPage(page + 1)
  }

  const handlePageDecrement = () => {
    setPage(page - 1)
  }

  return (
    <>
      <div className="p-grid">

        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart} />
        ))}

      </div>

      <div className='product-paginator'>
        <button type='button' className='product-paginator-button' onClick={handlePageDecrement} > {`<`} </button>
        <button type='button' className='product-paginator-button' onClick={handlePageIncrement} > {`>`} </button>

      </div>

    </>
  )
}


export default ProductList;




