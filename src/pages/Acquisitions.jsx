import MaterialTable from '@material-table/core'
import React, { useEffect, useState } from 'react'
import TemplateDash from '../containers/TemplateDash'
import axios from 'axios'

const Acquisitions = () => {


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


               <MaterialTable
                  columns={columnas}
                  data={products}
                  title="Tus Compras"

                  options={{
                     search: false,
                     pageSizeOptions: [10, 15], pageSize: 10, paginationType: "stepped", showFirstLastPageButtons: false,


                  }}


               />


            </div>
         </div>
      </div>
   )
}

export default Acquisitions