import React, { useState, useContext, useRef } from 'react';

import { Toast } from 'primereact/toast';

import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import AppContext from '../context/AppContext';


const ProductList = () => {

  const { products, addToEdit } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const toast = useRef()

  useGetProducts(page)


  const handleAddToCart = product => () => {

    toast.current.show({ severity: 'success', summary: 'Producto Agregado', detail: 'Producto listo para edición' });

    addToEdit(product)
  }

  const handlePageIncrement = () => {
    setPage(page + 1)
  }

  const handlePageDecrement = () => {

    if (page == 1) {
      setPage(1)
    } else {

      setPage(page - 1)
    }

  }

  return (
    <>
      <div className="p-grid">

        <Toast ref={toast} />

        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
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




