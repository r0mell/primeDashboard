import { GET_USERS, GET_PRODUCTS, GET_TOKEN } from './types'


export default (state, action) => {

   const { payload, type } = action;

   switch (type) {
      case GET_USERS:

         return {
            ...state,
            user: payload
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


      default:
         return state;

   }




}
