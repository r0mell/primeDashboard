import React, { useContext } from 'react';
import TemplateDash from '../containers/TemplateDash';
import MyProduct from '../components/MyProduct';
import AppContext from '../context/AppContext';


function MyProducts() {

   const { myProducts, addToCart } = useContext(AppContext);


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

                  <input type="text" />
                  <label htmlFor="">Buscar por fecha</label>
                  <div className='myProduct-container'>

                     {
                        myProducts.length
                           ? myProducts.map((myProduct, index) => (
                              <MyProduct
                                 key={index}
                                 myProduct={myProduct}
                                 handleAddToCart={handleAddToCart} />

                           ))
                           : <p>no tienes nuwvos prductos</p>
                     }

                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MyProducts;
