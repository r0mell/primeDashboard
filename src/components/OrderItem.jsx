import React from 'react'
import { Button } from 'primereact/button';

const OrderItem = () => {
   return (
      <>

         <div className="order-item">

            <div className="image-container">

               <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="asdasd" />
               <div>
                  <h5 className="p-mb-2">asdasdasd</h5>
                  <i className="pi pi-tag product-category-icon"></i>
                  <span className="product-category">asdasdas</span>
               </div>
            </div>

            <div className="product-list-detail">

               <h4 className="p-mb-2">$21312</h4>

            </div>

            <div className="product-list-action">
               <Button type="submit" className="p-mt-2 p-button-danger " icon="pi pi-trash" />


            </div>

         </div>


      </>
   )
}

export default OrderItem;
