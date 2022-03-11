import React, { useState, useEffect, useContext } from 'react';

import AppContext from '../context/AppContext'

import TemplateDash from '../containers/TemplateDash';
import ItemDetail from '../components/ItemDetail';
import ItemToEdit from '../components/ItemToEdit';


const EditProduct = () => {

   const { toEdit, removeToEdit } = useContext(AppContext);
   //const { toEdit } = state;

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
      setPage(page - 1)
   }

   const handleRemoveToEdit = product => () => {
      removeToEdit(product)
   }

   const handleLoadItem = product => () => {
      setLoadItem(product)
   }

   const handleCanceLoadItem = product => () => {
      setLoadItem(product)
   }

   return (
      <div className='layout-wrapper'>
         <TemplateDash />
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
                              : <p>No tenes productos que mostrar</p>
                        }

                        <button type='button' className='product-paginator-button' onClick={handlePageIncrement} > {`>`} </button>
                     </div>

                     <div className='edit-toEdit'>
                        {
                           loadItem
                              ? <ItemDetail itemDetail={loadItem} handleCanceLoadItem={handleCanceLoadItem} />
                              : <p>Elige un item para editarlo</p>
                        }
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}

export default EditProduct;
