import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useGetAllOrders = () => {

   const [orders, setOrders] = useState([])

   const colums = [
      {
         title: 'UID',
         field: 'UID',
         editable: false
      },
      {
         title: 'Cliente Email',
         field: 'client',
         editable: false
      },
      {
         title: 'Cantidad Productos',
         field: 'amountProducts',
         editable: false
      },
      {
         title: 'Precio Final',
         field: 'totalPrice',
         type: "currency",
         align: "left",
         editable: false
      },
      {
         title: 'Estado Orden',
         field: 'orderState',
         lookup: { "pending": "Pendiente", "inprocess": "En Proceso", "sent": "Enviado" }
      },
   ]

   useEffect(async () => {

      try {
         const orders = await axios.get('http://localhost:3001/api/v1/order')

         const allOrders = orders.data.map((item) => {
            return {
               ...item,
               'UID': item.id.slice(-5),
               'amountProducts': item.productList.length,
               'totalPrice': item.totalPrice,
               'client': item.productList[0].user.email
               //'amountOrders': item.order.length,
            }
         })
         //console.log(allUsers);
         //console.log(orders.data);
         setOrders(allOrders)


      } catch (error) {
         console.log(error);
      }

   }, [])

   return { orders, colums }

}

export default useGetAllOrders