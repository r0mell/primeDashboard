import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useGetAllClients = () => {

   const [users, setUsers] = useState([])

   const colums = [
      {
         title: 'UID',
         field: 'UID',
         editable: false
      },
      {
         title: 'Nombre',
         field: 'completeName',
         editable: false
      },
      {
         title: 'Nick',
         field: 'nickName',
         editable: false
      },
      {
         title: 'email',
         field: 'email',
         editable: false
      },
      {
         title: 'isAdmin',
         field: 'isAdmin',
         lookup: { true: "Admin", false: "Client" }
      },
      {
         title: 'Cantidad Productos',
         field: 'amountProducts',
         editable: false
      },
      {
         title: 'Cantidad Ordenes',
         field: 'amountOrders',
         editable: false
      }

   ]

   useEffect(async () => {

      try {
         const users = await axios.get('http://localhost:3001/api/v1/users')

         const allUsers = users.data.map((item) => {
            return {
               ...item,
               'amountProducts': item.toEdit.length,
               'completeName': item.firstName + ' ' + item.lastName,
               'UID': item.id.slice(-5),
               'amountOrders': item.order.length
            }
         })
         console.log(allUsers);
         setUsers(allUsers)

      } catch (error) {
         console.log(error);
      }

   }, [])

   return { users, colums }

}

export default useGetAllClients