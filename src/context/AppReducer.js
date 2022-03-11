import {
   GET_USER,
   REMOVE_USER,
   GET_PRODUCTS,
   GET_TOKEN,
   ADD_TOEDIT,
   ADD_MYPRODUCTS,
   REMOVE_TOEDIT,
   ADD_CART,
   REMOVE_CART,
   POST_NEWUSER,
   PUT_USER
} from './types'


export default (state, action) => {

   const { payload, type } = action;

   switch (type) {


      case PUT_USER:

         return {
            ...state,
            user: payload
         }


      case POST_NEWUSER:

         return {
            ...state
         }

      case GET_USER:

         return {
            ...state,
            user: payload
         }
      case REMOVE_USER:

         return {
            ...state,
            user: null,
            userToken: null
         }

      case GET_PRODUCTS:

         return {
            ...state,
            products: payload
         }

      case GET_TOKEN:

         return {
            ...state,
            userToken: payload
         }

      case ADD_TOEDIT:

         return {
            ...state,
            toEdit: [...state.toEdit, payload]
         }

      case REMOVE_TOEDIT:

         return {
            ...state,
            toEdit: state.toEdit.filter(items => items.id !== payload.id)

         }

      case ADD_MYPRODUCTS:

         return {
            ...state,
            myProducts: [...state.myProducts, payload]
         }
      case ADD_CART:

         return {
            ...state,
            cart: [...state.cart, payload]
         }

      case REMOVE_CART:

         return {
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)

         }

      default:
         return state;

   }




}
