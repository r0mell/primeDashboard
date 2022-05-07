import React, { useState, useEffect, useContext } from 'react';

import AppContext from '../context/AppContext'

import MenuItems from '../constants/consts';
import MenuClients from '../constants/menuClients';

import TemplateDash from '../containers/TemplateDash';
import ItemDetail from '../components/ItemDetail';
import ItemToEdit from '../components/ItemToEdit';


const EditProduct = () => {

   const { toEdit, removeToEdit, user } = useContext(AppContext);

   const [page, setPage] = useState(1);
   const [limitToEdit, setLimitToEdit] = useState([]);
   const [loadItem, setLoadItem] = useState(null);


   useEffect(() => {

      const limit = 3;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      setLimitToEdit(toEdit.slice(startIndex, endIndex))

   }, [page, toEdit]);

   const handlePageIncrement = () => {
      /* console.log(toEdit); */
      setPage(page + 1)
   }

   const handlePageDecrement = () => {

      if (page == 1) {
         setPage(1)
      } else {
         setPage(page - 1)
      }

   }

   const handleRemoveToEdit = product => () => {
      removeToEdit(product)
   }

   const handleLoadItem = product => () => {
      setLoadItem(product)
   }

   const handleCanceLoadItem = product => () => {
      //setLoadItem(product)
   }

   return (
      <>
         {
            user
               ? <div className='layout-wrapper'>

                  {
                     user.isAdmin
                        ? < TemplateDash menu={MenuItems} />
                        : < TemplateDash menu={MenuClients} />
                  }

                  <div className="layout-main-container">
                     <div className="layout-main">
                        <div className="edit-card">

                           <h2>Personaliza tu pedido</h2>

                           <div className='edit-container'>

                              <div className='edit-items'>
                                 <button type='button' className='product-paginator-button' onClick={handlePageDecrement} > {`<`} </button>

                                 {
                                    limitToEdit.length
                                       ? limitToEdit.map((itemEdit, index) => (
                                          <ItemToEdit
                                             key={index}
                                             itemEdit={itemEdit}
                                             handleRemoveToEdit={handleRemoveToEdit}
                                             handleLoadItem={handleLoadItem}

                                          />
                                       ))
                                       : <p>No tienes productos que mostrar</p>
                                 }

                                 <button type='button' className='product-paginator-button' onClick={handlePageIncrement} > {`>`} </button>
                              </div>

                              <div className='edit-toEdit'>
                                 {
                                    loadItem
                                       ? <ItemDetail
                                          itemDetail={loadItem}
                                          handleCanceLoadItem={handleCanceLoadItem}
                                       />
                                       : <p>Elige un item para editarlo</p>
                                 }
                              </div>

                           </div>
                        </div>
                     </div>
                  </div>
               </div >
               : <div>Cargando informacion</div>

         }
      </>

   )
}

export default EditProduct;
