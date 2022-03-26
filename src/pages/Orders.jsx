import { Button } from 'primereact/button';
import React, { useContext } from 'react'
import OrderItem from '../components/OrderItem';
import TemplateDash from '../containers/TemplateDash';
import AppContext from '../context/AppContext';

const Orders = () => {

   const { cart, removeToCart, postNewOrder } = useContext(AppContext);
   // const [price, setPrice] = useState(0)

   const handleRemoveToCart = item => () => {
      removeToCart(item)
   }

   const getOrder = () => {

      let orderList = cart.reduce((previousValue, currentValue) => {
         previousValue.push(currentValue.id);
         return previousValue
      }, [])

      console.log(orderList);
      console.table(orderList);

      const totalPrice = reducePrice()
      const countItems = cart.length

      const newOrder = {
         'list': orderList,
         totalPrice,
         'countItems': countItems
      }

      console.log(newOrder);
      console.table(newOrder);

      //mando a llamar a la funcion que agrega una nueva orden 
      //postNewOrder(nuevoPedido)
   }



   const reducePrice = () => {

      const price = cart.reduce((previousValue, currentValue) => {
         previousValue += currentValue.product.price
         return previousValue
      }, 0)

      return price
   }

   return (

      <div className='layout-wrapper'>

         <TemplateDash />

         <div className="layout-main-container">
            <div className="layout-main">

               <div className="orders-card">
                  <h2>Lista de productos</h2>

                  {
                     cart.map((itemCart, index) => (

                        <OrderItem
                           key={index}
                           itemCart={itemCart}
                           handleRemoveToCart={handleRemoveToCart}
                        />

                     ))
                  }

                  <div className="orders-total">
                     <h4> Productos: {cart.length}</h4>
                     <h4>{`Total a pagar: $  ${reducePrice()}`} </h4>
                     <Button
                        type="submit"
                        label='Comprar'
                        className="p-button-success p-button-sm"
                        icon="pi pi-shopping-bag"
                        onClick={getOrder}

                     />
                  </div>

               </div>
            </div>
         </div>
      </div>

   )
}

export default Orders;
