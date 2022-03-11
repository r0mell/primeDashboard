import React, { useReducer, useEffect } from 'react'

import AppReducer from './AppReducer'
import AppContext from './AppContext'
import axios from 'axios'


const AppState = (props) => {


   const initialState = {

      createdBy: 'r0mell',
      user: null,
      userToken: null,
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

   const addToEdit = (productToEdit) => {


      dispatch({
         type: 'ADD_TOEDIT',
         payload: productToEdit
      })
   }

   const removeToEdit = (toEditRemove) => {

      dispatch({
         type: 'REMOVE_TOEDIT',
         payload: toEditRemove
      })

   }

   const addMyProducts = (item) => {

      console.log(item);

      dispatch({
         type: 'ADD_MYPRODUCTS',
         payload: item
      })
   }

   const addToCart = (item) => {
      console.log(item);


      dispatch({
         type: 'ADD_CART',
         payload: item
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


         console.log(state.userToken.token);
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
         putUser

      }}>

         {props.children}

      </AppContext.Provider>

   )
}

export default AppState