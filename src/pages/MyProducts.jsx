import React, { useContext, useEffect, useState } from 'react';

import MenuItems from '../constants/consts';
import MenuClients from '../constants/menuClients';

import TemplateDash from '../containers/TemplateDash';
import MyProduct from '../components/MyProduct';
import AppContext from '../context/AppContext';


function MyProducts() {

   const { addToCart, getToEdits, user } = useContext(AppContext);
   const [myProd, setmyProd] = useState(null)

   useEffect(async () => {

      const items = await getToEdits()
      setmyProd(items)

   }, [])


   const handleAddToCart = producto => () => {
      addToCart(producto);
   }


   return (

      <>

         {user
            ? <div className='layout-wrapper'>
               {
                  user.isAdmin
                     ? < TemplateDash menu={MenuItems} />
                     : < TemplateDash menu={MenuClients} />
               }
               <div className="layout-main-container">
                  <div className="layout-main">

                     <div className='myProduct-card'>
                        <h2>Mis Productos</h2>

                        <div className='myProduct-search'>

                           {/* <label htmlFor="">Buscar por talla</label>
                     <input type="text" /> */}

                        </div>


                        <div className='myProduct-container'>

                           {
                              myProd
                                 ? myProd.map((myProduct, index) => (
                                    <MyProduct
                                       key={index}
                                       myProduct={myProduct}
                                       handleAddToCart={handleAddToCart} />
                                 ))

                                 : <p>No tienes productos</p>
                           }

                        </div>
                     </div>
                  </div>
               </div>
            </div>
            : <div>Cargando informacion</div>
         }


      </>
   );
}

export default MyProducts;
