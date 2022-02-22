import React from 'react'
import { Button } from 'primereact/button';

const OrderItem = ({ itemCart, handleRemoveToCart }) => {
   return (
      <>

         <div className="order-item">

            <div className="image-container">

               <img src={itemCart.images[1]} alt={itemCart.title} />
               <img src={itemCart.images[1]} alt={itemCart.title} />
               <div>
                  <h5 className="p-mb-2">{itemCart.proyectName}</h5>
                  <span className="product-category">@ {itemCart.createdBy}</span>
               </div>
            </div>

            <div className="product-list-detail">

               <h4 className="p-mb-2">$21312</h4>

            </div>

            <div className="product-list-action">
               <Button type="submit" className="p-mt-2 p-button-danger " icon="pi pi-trash" onClick={handleRemoveToCart(itemCart)} />


            </div>

         </div>


      </>
   )
}

export default OrderItem;
