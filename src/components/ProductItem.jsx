import React from 'react'

import { Button } from 'primereact/button';

const ProductItem = ({ product }) => {

   return (
      <div className="p-col-12 p-md-4 p-lg-4">
         <div className="product-grid-item card">
            <div className="product-grid-item-top">
               <div>
                  <i className="pi pi-tag product-category-icon">{product.id}</i>
                  <span className="product-category"></span>
               </div>
               <span className=''>123</span>
            </div>
            <div className="product-grid-item-content">
               <img src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png' />
               <div className="product-name">{product.title}</div>
               <div className="product-description">@Creador</div>
               {/* <Rating ></Rating> */}
            </div>
            <div className="product-grid-item-bottom">
               <span className="product-price">$123</span>
               <Button className="p-button-sm" icon="pi pi-shopping-cart" label="Add to Cart" ></Button>
            </div>
         </div>
      </div>

   );
}

export default ProductItem;


/*

      <div className="p-md-4">
         <div className="product-grid-item card">
            <div className="product-grid-item-top">
               <div>
                  <i className="pi pi-tag product-category-icon">{product.id}</i>
                  <span className="product-category"></span>
               </div>
               <span className=''>123</span>
            </div>
            <div className="product-grid-item-content">
               <img src='' />
               <div className="product-name">dsfsdfasd</div>
               <div className="product-description">asdfsadf</div>
               <Rating ></Rating>
            </div>
            <div className="product-grid-item-bottom">
               <span className="product-price">$123</span>
               <Button icon="pi pi-shopping-cart" label="Add to Cart" ></Button>
            </div>
         </div>
      </div>
*/