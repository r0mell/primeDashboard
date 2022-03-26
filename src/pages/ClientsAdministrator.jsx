import React, { useEffect, useState } from 'react';
import TemplateDash from '../containers/TemplateDash';
import axios from 'axios'
import MaterialTable from '@material-table/core';
import useGetAllClients from '../hooks/useGetAllClients'


const ClientsAdministrator = () => {

   const { users, colums } = useGetAllClients()

   return (
      <div className='layout-wrapper'>

         <TemplateDash />

         <div className="layout-main-container">
            <div className="layout-main">
               <div>pagina para la administracion de los clientes Unick</div>

               <MaterialTable
                  columns={colums}
                  data={users}
               />



            </div>
         </div>
      </div>
   )
}

export default ClientsAdministrator;
