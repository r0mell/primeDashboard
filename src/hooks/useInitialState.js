import { useState } from 'react'

import initialState from '../initialState'

const useInitialState = () => {

   const [state, setState] = useState(initialState);

   const addToEdit = payload => {

      setState({
         ...state,
         toEdit: [...state.toEdit, payload]
      });
   }

   const removeToEdit = payload => {

      setState({
         ...state,
         toEdit: state.toEdit.filter(items => items.id !== payload.id)
      });
   }

   const addMyProducts = payload => {

      setState({
         ...state,
         myProducts: [...state.myProducts, payload]
      });
   }

   const addToCart = payload => {

      setState({
         ...state,
         cart: [...state.cart, payload]
      });
   }
   const removeFromCart = payload => {
      setState({
         ...state,
         cart: state.cart.filter(items => items.id !== payload.id)
      })
   }

   return {
      addToCart,
      addToEdit,
      addMyProducts,
      removeFromCart,
      removeToEdit,
      state,
   };

}

export default useInitialState;
