import React from 'react';
import { Link } from 'react-router-dom'

import paypal from '../assets/img/PayPal.png'
import HeaderMain from '../components/HeaderMain';

const CheckPay = () => {

   return (


      <div className='checkpay-container'>
         <HeaderMain />

         <img src={paypal} alt="logo-paypal" />
         <h1>Gracias Por Tu Compra !!</h1>
         <h3>Tu pago se ha verificado, tu orden esta siendo procesada.</h3>

         <Link to='/product/products'>
            <button >Volver</button>
         </Link>

      </div>

   )
}

export default CheckPay;
