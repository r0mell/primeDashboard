import React, { useReducer } from 'react'
import AppReducer from './AppReducer'
import AppContext from './AppContext'
import useGetProducts from '../hooks/useGetProducts'
import axios from 'axios'


const AppState = (props) => {

   const initialState = {
      users: [],
      selectedUser: null,

      createdBy: 'r0mell',

      userToken: null,
      products: [],

      toEdit: [],
      myProducts: [],//{a:'',b:, c:[]}
      cart: [],


   }


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

      const URI = 'http://localhost:3001/api/v1/login'

      let token

      try {

         token = await axios.post(URI, credentials)
         //console.log(token.data);

      } catch (error) {
         console.log(error);
      }


      dispatch({
         type: 'GET_TOKEN',
         payload: token.data
      })

      return token.data

   }

   const getProfile = () => {
      //llamadas a la PI
   }


   return (
      <AppContext.Provider value={{
         users: state.user,
         selectedUser: state.selectedUser,
         products: state.products,
         userToken: state.userToken,
         //getUser,
         getProfile,
         getProducts,
         getToken
      }}>

         {props.children}

      </AppContext.Provider>

   )
}

export default AppState