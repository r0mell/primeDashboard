import React from 'react'
import ItemDetail from '../components/ItemDetail';
import ItemToEdit from '../components/ItemToEdit';

import TemplateDash from '../containers/TemplateDash';


const EditProduct = () => {
   return (
      <div className='layout-wrapper'>
         <TemplateDash />

         <div className="layout-main-container">
            <div className="layout-main">

               <div className="edit-card">
                  <h2>Personaliza tu pedido</h2>

                  <div className='edit-container'>

                     <div className='edit-items'>

                        <ItemToEdit />
                        <ItemToEdit />
                        <ItemToEdit />
                        <ItemToEdit />

                     </div>

                     <div className='edit-toEdit'>

                        <ItemDetail />
                     </div>

                  </div>

               </div>
            </div>
         </div>

      </div>

   )
}

export default EditProduct;
