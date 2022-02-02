import React from 'react'
import { Button } from 'primereact/button'


const ItemToEdit = ({ itemEdit, handleRemoveToEdit, handleLoadItem }) => {


   return (
      <div>
         <div className='toEdit-container'>
            <img src={itemEdit.images[1]} alt="" />
            <div className='toEdit-info'>
               {/* <Button className='p-button-sm' icon="pi pi-check" label="Editar" /> */}
               <Button icon="pi pi-cog " className="p-button-rounded p-button-warning" onClick={handleLoadItem(itemEdit)} />
               <Button icon="pi pi-trash " className="p-button-rounded p-button-danger" onClick={handleRemoveToEdit(itemEdit)} />
            </div>

         </div>
      </div>
   )
}

export default ItemToEdit;
