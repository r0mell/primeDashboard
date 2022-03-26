import React, { useContext, useEffect, useState } from 'react';
import TemplateDash from '../containers/TemplateDash';
import MyProduct from '../components/MyProduct';
import AppContext from '../context/AppContext';


function MyProducts() {

   const { addToCart, getToEdits } = useContext(AppContext);
   const [myProd, setmyProd] = useState(null)

   useEffect(async () => {

      const items = await getToEdits()
      setmyProd(items)

   }, [])


   const handleAddToCart = producto => () => {
      addToCart(producto);
   }


   return (
      <div className='layout-wrapper'>
         <TemplateDash />
         <div className="layout-main-container">
            <div className="layout-main">

               <div className='myProduct-card'>
                  <h2>Mis Productos</h2>

                  <div className='myProduct-search'>

                     <label htmlFor="">Buscar por talla</label>
                     <input type="text" />

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

                           : <p>no tienes productos</p>
                     }

                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MyProducts;
