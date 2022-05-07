import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import MenuItems from '../constants/consts';
import MenuClients from '../constants/menuClients';

import { Toast } from 'primereact/toast';
import TemplateDash from '../containers/TemplateDash';
import MaterialTable from '@material-table/core';
import { ExportCsv, ExportPdf } from '@material-table/exporters';

import useGetAllOrders from '../hooks/useGetAllOrders';
import AppContext from '../context/AppContext';

const OrdesAdministrator = () => {

   const { putOrderState, user } = useContext(AppContext)
   const { orders, colums } = useGetAllOrders()

   const navigate = useNavigate()
   const toast = useRef()


   const generateReport = (data) => {

      toast.current.show({ severity: 'info', summary: 'Generando Orden', detail: 'El detalle de la orden esta siendo generada' });

      setTimeout(() => {
         navigate(`/orders/reports/${data.id}`)
      }, 2000);

   }

   const updateStateOrder = (newRow) => {

      const { orderState, id } = newRow
      putOrderState(orderState, id)

   }

   return (
      <>
         {
            user
               ? <div className='layout-wrapper'>

                  {
                     user.isAdmin
                        ? < TemplateDash menu={MenuItems} />
                        : < TemplateDash menu={MenuClients} />
                  }

                  <div className="layout-main-container">
                     <Toast ref={toast} />
                     <div className="layout-main">
                        <div>

                           <MaterialTable
                              columns={colums}
                              data={orders}

                              actions={[
                                 {
                                    icon: () => <i className="pi pi-file-pdf"></i>,
                                    tooltip: 'generate report',
                                    onClick: (event, rowData) => {

                                       generateReport(rowData)

                                    }
                                 }
                              ]}

                              editable={{
                                 onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {

                                    updateStateOrder(newRow, oldRow)
                                    setTimeout(() => resolve(), 500)
                                 })

                              }}

                              options={{
                                 exportMenu: [{
                                    label: 'Export PDF',
                                    exportFunc: (cols, datas) => ExportPdf(cols, datas, 'OrdersAdministrator')
                                 }, {
                                    label: 'Export CSV',
                                    exportFunc: (cols, datas) => ExportCsv(cols, datas, 'OrdersAdministrator')
                                 }],
                                 pageSizeOptions: [10, 15], pageSize: 10, paginationType: "stepped", showFirstLastPageButtons: false,
                                 actionsColumnIndex: -1

                              }}
                              title="Administración Ordenes"
                           />



                        </div>
                     </div>
                  </div>
               </div>
               : <div>Cargando informacion</div>
         }

      </>
   )
}

export default OrdesAdministrator;
