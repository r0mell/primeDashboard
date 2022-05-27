import React, { useContext } from 'react';
import MenuItems from '../constants/consts';
import MenuClients from '../constants/menuClients';

import TemplateDash from '../containers/TemplateDash';
import MaterialTable from '@material-table/core';
import useGetAllClients from '../hooks/useGetAllClients';
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import AppContext from '../context/AppContext';


const ClientsAdministrator = () => {

   const { users, colums } = useGetAllClients()
   const { putAdminPermits, user } = useContext(AppContext)

   const updatePermits = (newClient) => {

      //peticion Patch para actualizar los permisos de administrador
      const { isAdmin, id } = newClient
      //console.log(newClient);
      putAdminPermits(isAdmin, id)
   }

   return (
      <>
         {user
            ? <div className='layout-wrapper'>

               {
                  user.isAdmin
                     ? < TemplateDash menu={MenuItems} />
                     : < TemplateDash menu={MenuClients} />
               }

               <div className="layout-main-container">
                  <div className="layout-main">
                     {/* <div>pagina para la administracion de los clientes Unick</div> */}

                     <MaterialTable
                        columns={colums}
                        data={users}

                        editable={{
                           onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {

                              updatePermits(newRow)
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
                           pageSizeOptions: [10, 15], pageSize: 10, paginationType: "stepped", 
                           showFirstLastPageButtons: false,
                           actionsColumnIndex: -1

                        }}
                        title="Administración Clientes"
                     />
                  </div>
               </div>
            </div>

            : <div>Cargando informacion</div>
         }

      </>
   )
}

export default ClientsAdministrator;
