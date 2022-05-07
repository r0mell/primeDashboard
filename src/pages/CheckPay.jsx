import React from 'react';
import { Link } from 'react-router-dom'

import paypal from '../assets/img/PayPal.png'
import HeaderMain from '../components/HeaderMain';
import logoUnick from '../assets/icons/Unick_logo.png'

const CheckPay = () => {

   return (

      <>
         <HeaderMain />
         <div className='checkpay-container'>

            <img src={logoUnick} alt="logo-unick" />
            <h1>Gracias Por Tu Compra !!</h1>
            <h3>Tu pago se ha verificado, tu orden esta siendo procesada.</h3>

            <Link to='/product/products'>
               <button >Volver</button>
            </Link>

         </div>


      </>
   )
}

export default CheckPay;
