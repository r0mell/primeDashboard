import React, { useState, useEffect } from 'react';
import TemplateDash from '../containers/TemplateDash';
import axios from 'axios'
import MaterialTable from '@material-table/core';
import useGetAllProducts from '../hooks/useGetAllProducts'

const ProductAdministrator = () => {

   const { columnas, products } = useGetAllProducts()

   return (

      <div className='layout-wrapper'>

         <TemplateDash />

         <div className="layout-main-container">
            <div className="layout-main">

               <div className="productsAdmin-card">
                  <div>
                     All Products
                  </div>
                  <div className="tabla">

                     <MaterialTable
                        columns={columnas}
                        data={products}
                     />
                  </div>


               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductAdministrator;
