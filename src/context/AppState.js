import React, { useReducer, useEffect } from 'react'

import AppReducer from './AppReducer'
import AppContext from './AppContext'
import axios from 'axios'

import generatorId from '../utils/uidGenerator'



const AppState = (props) => {




   const initialState = {

      user: null,
      userToken: {},
      products: [],
      toEdit: [],
      myProducts: [],
      cart: []

   }

   useEffect(async () => {

      const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')

      if (loggedUserJSON) {
         const newToken = JSON.parse(loggedUserJSON)
         state.userToken = newToken

         getProfile()
         getToEdits()
      }

   }, [])


   const [state, dispatch] = useReducer(AppReducer, initialState)

   /*const getUser = () => {
      const products = useGetProducts(page);

      dispatch({
         type: 'GET_USERS',
         payload: products
      })
   }*/

   const getProducts = async (page) => {

      const API = `http://localhost:3001/api/v1/products/paginator?page=${page}&limit=3`;
      let products

      try {
         products = await axios.get(API)
      } catch (error) {
         console.log(error);
      }

      dispatch({
         type: 'GET_PRODUCTS',
         payload: products.data.results
      })
   }

   const getToken = async (credentials) => {

      let token

      const URI = 'http://localhost:3001/api/v1/login'

      try {
         token = await axios.post(URI, credentials)
         console.log(token.data);

         window.localStorage.setItem(
            'loggedNoteAppUser', JSON.stringify(token.data)
         )

      } catch (error) {
         console.log(error);
      }

      dispatch({
         type: 'GET_TOKEN',
         payload: token.data
      })

      return token.data

   }

   const addToEdit = async (productToEdit) => {

      // funcion para obtener un id unico para cada producto despues pasarlo a editar 
      //y guardarlo dentro de la vase ded datos 


      const id = generatorId()

      const content = {
         ...productToEdit,
         "auxId": id
      }
      //console.log(id);

      dispatch({
         type: 'ADD_TOEDIT',
         payload: content
      })
   }

   const getToEdits = async () => {

      //GET http://localhost:3001/api/v1/toEdit/62107709520b89f50719af02

      const config = {
         headers: {
            Authorization: `Bearer ${state.userToken.token}`
         }
      }

      let listToEdit

      const URI = `http://localhost:3001/api/v1/toEdit/${state.user.id}`

      try {
         listToEdit = await axios.get(URI, config)
         //console.log(listToEdit.data);
         return listToEdit.data

      } catch (error) {
         console.log(error);
      }


   }

   const removeToEdit = (toEditRemove) => {

      dispatch({
         type: 'REMOVE_TOEDIT',
         payload: toEditRemove
      })

   }

   const addMyProducts = async (newItem, valores, URLIMAGE) => {

      //guardar en la base de datos un nuevo producto usando la clase toedit 
      //agregar atributos para personalizar la prenda 

      const calculatePrice = () => {

         if (valores.stampingType == 'bordado') {
            return {
               updatePrice: newItem.price + 5
            }
         }

         if (valores.stampingType == 'estampado') {
            return {
               updatePrice: newItem.price + 2.50
            }
         }
      }

      const getColor = () => {

         if (valores.color == 'black') {
            return newItem.images[1]
         }
         if (valores.color == 'red') {
            return newItem.images[2]
         }
         if (valores.color == 'white') {
            return newItem.images[0]
         }
      }

      const content = {
         "productId": newItem.id,
         "imagesProduct": {
            "logo": URLIMAGE,
            "template": getColor()
         }
      }

      const newItemV = { ...content, ...valores, ...calculatePrice() }
      console.log(newItemV);


      const config = {
         headers: {
            Authorization: `Bearer ${state.userToken.token}`
         }
      }

      let itemToEdit

      const URI = `http://localhost:3001/api/v1/toEdit`

      try {
         itemToEdit = await axios.post(URI, newItemV, config)
         console.log(itemToEdit.data);

      } catch (error) {
         console.log(error);
      }


      dispatch({
         type: 'ADD_MYPRODUCTS',
         payload: valores
      })
   }

   const postNewOrder = async (arrayProducts) => {

      const config = {
         headers: {
            Authorization: `Bearer ${state.userToken.token}`
         }
      }

      let itemToEdit

      console.log(arrayProducts);


      const URI = `http://localhost:3001/api/v1/order/create-order`

      try {
         itemToEdit = await axios.post(URI, arrayProducts, config)
         console.log(itemToEdit.data.links[1].href);

         window.location.href = `${itemToEdit.data.links[1].href}`;



      } catch (error) {
         console.log(error);
      }



      /*

      dispatch({
           type: 'ADD_MYPRODUCTS',
          payload: valores 
      }) */


   }

   const getOrders = () => {

      /* Aqui se tiene que llamar a las ordenes que ha realizado cada cliente  */

   }

   const addToCart = (item) => {


      const id = generatorId()

      const content = {
         ...item,
         "auxId": id
      }

      //console.log(content);


      dispatch({
         type: 'ADD_CART',
         payload: content
      })

   }

   const removeToCart = (item) => {

      console.log(item);

      dispatch({
         type: 'REMOVE_CART',
         payload: item
      })

   }

   const logupUser = async (credentials) => {

      let newUser

      const URI = 'http://localhost:3001/api/v1/users'

      try {
         newUser = await axios.post(URI, credentials)
         console.log(newUser.data);


      } catch (error) {
         console.log(error);
      }

      dispatch({
         type: 'POST_NEWUSER',

      })

   }

   const getProfile = async () => {


      //armar la cabecera

      const config = {
         headers: {
            Authorization: `Bearer ${state.userToken.token}`
         }
      }

      let usuario
      try {
         //console.log(state.userToken.token);
         usuario = await axios.get('http://localhost:3001/api/v1/users/6229357a16f575c47a97b8ef', config)

      } catch (error) {

         //console.log('entra a este error');
         //console.log(error);
      }

      dispatch({
         type: 'GET_USER',
         payload: usuario.data
      })

   }

   const putUser = async (updateUser) => {

      const config = {
         headers: {
            Authorization: `Bearer ${state.userToken.token}`
         }
      }

      let token

      const URI = `http://localhost:3001/api/v1/users/${state.user.id}`

      try {
         token = await axios.put(URI, updateUser, config)
         console.log(token.data);

      } catch (error) {
         console.log(error);
      }

      dispatch({
         type: 'PUT_USER',
         payload: token.data
      })


   }

   const logout = () => {

      window.localStorage.removeItem('loggedNoteAppUser')

      dispatch({
         type: 'REMOVE_USER'
      })
   }


   const putOrderState = async (newOrderState, idOrder) => {

      console.log(newOrderState);
      console.log(idOrder);


      const config = {
         headers: {
            Authorization: `Bearer ${state.userToken.token}`
         }
      }

      const orderState = {
         "orderState": `${newOrderState}`
      }

      const URI = `http://localhost:3001/api/v1/order/changeState/${idOrder}`

      try {
         const updateOrderState = await axios.put(URI, orderState, config)
         console.log(updateOrderState.data);

      } catch (error) {
         console.log(error);
      }
   }



   const putAdminPermits = async (isAdmin, id) => {

      console.log(isAdmin);
      console.log(id);



      const config = {
         headers: {
            Authorization: `Bearer ${state.userToken.token}`
         }
      }

      const adminPermits = {
         "isAdmin": isAdmin,
         "id": id
      }

      console.log(adminPermits);



      const URI = `http://localhost:3001/api/v1/users/adminPermits`

      try {
         const userPermits = await axios.put(URI, adminPermits, config)
         //console.log(token.data);

      } catch (error) {
         console.log(error);
      }

   }



   const getUserOrders = async () => {

      const config = {
         headers: {
            Authorization: `Bearer ${state.userToken.token}`
         }
      }

      let userOrders



      const URI = `http://localhost:3001/api/v1/order/clients/ordersBy`

      try {
         userOrders = await axios.get(URI, config)
         //console.log(userOrders.data);

      } catch (error) {
         console.log(error);
      }

      return userOrders
   }




   return (
      <AppContext.Provider value={{
         user: state.user,
         selectedUser: state.selectedUser,
         products: state.products,
         userToken: state.userToken,
         toEdit: state.toEdit,
         myProducts: state.myProducts,
         cart: state.cart,
         //getUser,
         getProfile,
         getProducts,
         getToken,
         addToEdit,
         removeToEdit,
         addMyProducts,
         addToCart,
         removeToCart,
         logout,
         logupUser,
         putUser,
         getToEdits,
         postNewOrder,
         putOrderState,
         putAdminPermits,
         getUserOrders

      }}>

         {props.children}

      </AppContext.Provider>

   )
}

export default AppState