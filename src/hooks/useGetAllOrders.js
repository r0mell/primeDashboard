import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useGetAllOrders = () => {

   const [orders, setOrders] = useState([])

   const colums = [
      {
         title: 'UID',
         field: 'UID'
      },
      {
         title: 'Nombre',
         field: 'completeName'
      },
      {
         title: 'Nick',
         field: 'nickName'
      },
      {
         title: 'email',
         field: 'email'
      },
      {
         title: 'isAdmin',
         field: 'isAdmin'
      },
      {
         title: 'Cantidad Productos',
         field: 'amountProducts'
      },
      {
         title: 'Cantidad Ordenes',
         field: 'amountOrders'
      }

   ]

   useEffect(async () => {

      try {
         const orders = await axios.get('http://localhost:3001/api/v1/order')

         /*const allUsers = users.data.map((item) => {
            return {
               ...item,
               'amountProducts': item.toEdit.length,
               'completeName': item.firstName + ' ' + item.lastName,
               'UID': item.id.slice(-5),
               'amountOrders': item.order.length
            }
         })
         console.log(allUsers);
         setUsers(allUsers)*/
         console.log(orders.data);


      } catch (error) {
         console.log(error);
      }

   }, [])

   return { orders, colums }

}

export default useGetAllOrders