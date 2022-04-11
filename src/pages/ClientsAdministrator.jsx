import React from 'react';
import TemplateDash from '../containers/TemplateDash';
import MaterialTable from '@material-table/core';
import useGetAllClients from '../hooks/useGetAllClients';
import { ExportCsv, ExportPdf } from '@material-table/exporters';


const ClientsAdministrator = () => {

   const { users, colums } = useGetAllClients()

   const updatePermits = (newClient, oldClient) => {

      //un Patch para actualizar el estado 
      console.log(newClient, oldClient);
   }

   return (
      <div className='layout-wrapper'>

         <TemplateDash />

         <div className="layout-main-container">
            <div className="layout-main">
               {/* <div>pagina para la administracion de los clientes Unick</div> */}

               <MaterialTable
                  columns={colums}
                  data={users}

                  editable={{
                     onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {

                        updatePermits(newRow, oldRow)
                        setTimeout(() => resolve(), 500)
                     })

                  }}

                  options={{
                     exportMenu: [{
                        label: 'Export PDF',
                        exportFunc: (cols, datas) => ExportPdf(cols, datas, 'ClientsAdministrator')
                     }, {
                        label: 'Export CSV',
                        exportFunc: (cols, datas) => ExportCsv(cols, datas, 'ClientsAdministrator')
                     }],
                     pageSizeOptions: [10, 15], pageSize: 10, paginationType: "stepped", showFirstLastPageButtons: false,
                     actionsColumnIndex: -1

                  }}
                  title="Administración Clientes"
               />



            </div>
         </div>
      </div>
   )
}

export default ClientsAdministrator;
