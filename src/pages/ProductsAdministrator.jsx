import React, { useState, useEffect } from 'react';
import TemplateDash from '../containers/TemplateDash';
import axios from 'axios'
import MaterialTable from '@material-table/core';

const ProductAdministrator = () => {

   const [products, setProducts] = useState([])

   const columnas = [
      {
         title: 'id',
         field: 'id'
      },
      {
         title: 'createdBy',
         field: 'createdBy'
      },
      {
         title: 'category',
         field: 'category'
      }
   ]

   useEffect(() => {

      axios.get('http://localhost:3001/api/v1/products/')
         .then(product => {
            console.log(product.data)
            setProducts(product.data)
         })
         .catch(e => console.log(e))
   }, [])


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
