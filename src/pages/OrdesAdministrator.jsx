import React, { useEffect, useState } from 'react';
import TemplateDash from '../containers/TemplateDash';
import MaterialTable from '@material-table/core';
import useGetAllOrders from '../hooks/useGetAllOrders'


const OrdesAdministrator = () => {

   const { orders, colums } = useGetAllOrders()


   return (
      <div className='layout-wrapper'>

         <TemplateDash />

         <div className="layout-main-container">
            <div className="layout-main">
               <div>
                  <p>esto es la pagina para administracion de ordenes de compras realidas</p>

                  <MaterialTable
                     columns={colums}
                     data={orders}
                  />



               </div>
            </div>
         </div>
      </div>
   )
}

export default OrdesAdministrator;
