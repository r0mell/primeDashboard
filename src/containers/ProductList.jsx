import React from 'react'
import ProductItem from '../components/ProductItem'
import useProduct from '../hooks/useProduct'


const API = 'http://api.escuelajs.co/api/v1/products';


const ProductList = () => {

  const products = [{ id: 1, title: "rommel" }, { id: 2, title: "rommel" }, { id: 3, title: "rommel" }]

  const productss = useProduct(API);

  return (
    <>
      <div className="p-grid">

        {/*   {products.map((product) => (
               <ProductItem key={product.id} product={product} />
            ))} */}
        {productss.map((product) => {

          return <ProductItem key={product.id} product={product} />
        })}

      </div>

    </>
  )
}


export default ProductList;




