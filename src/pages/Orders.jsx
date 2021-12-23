import { Button } from 'primereact/button';
import React from 'react'
import OrderItem from '../components/OrderItem';
import TemplateDash from '../containers/TemplateDash';

const Orders = () => {
   return (

      <>
         <div className='layout-wrapper'>

            <TemplateDash />

            <div className="layout-main-container">
               <div className="layout-main">

                  <div className="orders-card">
                     <h2>Lista de productos</h2>

                     <OrderItem />
                     <OrderItem />
                     <OrderItem />
                     <OrderItem />
                     <OrderItem />
                     <OrderItem />


                     <div className="orders-total">
                        <h4>Productos:25</h4>
                        <h4>{`Total:  $ 476`}</h4>
                        <Button type="submit" label='Comprar' className="p-button-success p-button-sm" icon="pi pi-shopping-bag" />
                     </div>

                  </div>
               </div>
            </div>
         </div>

      </>
   )
}

export default Orders;
