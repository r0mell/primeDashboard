import React from 'react'
import { Button } from 'primereact/button'

const ItemToEdit = () => {
   return (
      <div>
         <div className='toEdit-container'>
            <img src="https://placeimg.com/640/480/any?r=0.5554445655393978" alt="" />
            <div className='toEdit-info'>
               {/* <Button className='p-button-sm' icon="pi pi-check" label="Editar" /> */}
               <Button icon="pi pi-cog " className="p-button-rounded p-button-warning" />
            </div>

         </div>
      </div>
   )
}

export default ItemToEdit;
