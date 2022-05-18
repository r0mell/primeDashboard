import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MenuItems from '../constants/consts';
import MenuClients from '../constants/menuClients';

import MaterialTable from '@material-table/core'
import axios from 'axios'
import TemplateDash from '../containers/TemplateDash'
import { Toast } from 'primereact/toast';
import AppContext from '../context/AppContext';


const Acquisitions = () => {

   const { user } = useContext(AppContext);

   const colums = [
      {
         title: 'UID',
         field: 'UID'
      },
      {
         title: 'Cliente',
         field: 'client'
      },
      {
         title: 'Cantidad Productos',
         field: 'amountProducts',
         align: "center",
      },
      {
         title: 'Precio Final',
         field: 'totalPrice',
         type: "currency",
         align: "left"
      },
      {
         title: 'Estado Orden',
         field: 'orderState',
         lookup: { "pending": "Pendiente", "inprocess": "En Proceso", "sent": "Enviado" }
      },
   ]

   const URI = `http://localhost:3001/api/v1/order/clients/ordersBy`

   const [orderss, setorders] = useState(null)
   const toast = useRef()
   const navigate = useNavigate()


   const generateReport = (data) => {

      toast.current.show({ severity: 'info', summary: 'Generando Orden', detail: 'El detalle de la orden está siendo generada' });

      console.log(data.id);
      setTimeout(() => {
         navigate(`/orders/reports/${data.id}`)
      }, 2000);

   }

   useEffect(async () => {

      const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
      const newToken = JSON.parse(loggedUserJSON)

      const config = {
         headers: {
            Authorization: `Bearer ${newToken.token}`
         }
      }

      try {

         const userOrders = await axios.get(URI, config)

         const ordersByUser = userOrders.data.order.map((item) => {

            return {
               ...item,
               'UID': item.id.slice(-5),
               'amountProducts': item.productList.length,
               'totalPrice': item.totalPrice,
               'client': userOrders.data.nickName
            }

         })
         setorders(ordersByUser);
         console.log(userOrders.data);


      } catch (error) {
         console.log(error);
      }
   }, [])


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
                  <Toast ref={toast} />
                  <div className="layout-main">

                     {
                        orderss
                           ? <MaterialTable
                              columns={colums}
                              data={orderss}

                              actions={[
                                 {
                                    icon: () => <i className="pi pi-file-pdf"></i>,
                                    tooltip: 'generate report',
                                    onClick: (event, rowData) => {

                                       generateReport(rowData)

                                    }
                                 }
                              ]}

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
                              title="Tus Compras"
                           />

                           : <div>Cargando información</div>
                     }

                  </div>
               </div>
            </div>
            : <div>Cargando información</div>
         }


      </>
   )
}

export default Acquisitions