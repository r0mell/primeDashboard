import React from 'react'
import { Button } from 'primereact/button';

const ProductItem = ({ product, handleAddToCart }) => {

  const { id } = product
  const UID = id.slice(-5)

  return (

    <div className="p-col-12 p-md-4 p-lg-4">
      <div className="product-grid-item card">
        <div className="product-grid-item-top">

          <div>
            <p>{UID}</p>
            {/*  <span className="product-category"></span> */}
          </div>

          <span className=''>{product.category}</span>
        </div>

        <div className="product-grid-item-content">
          <img src={product.images[0]} />
          <h3 className="product-name">{product.title}</h3>
          <h4 className="product-description">@{product.createdBy}</h4>
          {/* <Rating ></Rating> */}
        </div>

        <div className="product-grid-item-bottom">
          <span className="product-price">${product.price}</span>
          <Button
            className="p-button-sm"
            icon="pi pi-shopping-cart"
            label="Editar"
            onClick={handleAddToCart(product)}
          />
        </div>

      </div>
    </div>

  );
}

export default ProductItem;