import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useGetAllProducts = () => {

   const [products, setProducts] = useState([])

   const columnas = [
      {
         title: 'UID',
         field: 'UID',
         editable: false
      },
      {
         title: 'Nombre',
         field: 'title'
      },
      {
         title: 'category',
         field: 'category'
      },
      {
         title: 'Cantidad de colores',
         field: 'amountColors',
         editable: false
      },
      {
         title: 'Precio',
         field: 'price',
         type: "currency",
         align: "left",
      },
      {
         title: 'Creado por',
         field: 'createdFor',
         editable: false
      }
   ]


   useEffect(async () => {

      try {
         const products = await axios.get('http://localhost:3001/api/v1/products/')

         const allProducts = products.data.map((item) => {
            return {
               ...item,
               'UID': item.id.slice(-5),
               'createdFor': item.user.nickName,
               'amountColors': item.images.length
            }
         })

         console.log(allProducts);
         setProducts(allProducts)

      } catch (error) {
         console.log(error);
      }

   }, [])

   return { columnas, products }

}

export default useGetAllProducts