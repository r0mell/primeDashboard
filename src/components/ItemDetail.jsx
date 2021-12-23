import React from 'react';
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const ItemDetail = () => {
   return (
      <div className='itemDetail-container'>

         <div className='itemDetail-header'>
            <h3>Detalles del producto</h3>
         </div>


         <div className='itemDetail-form'>
            <form >
               <div className='itemDetail-grid'>

                  <div>
                     <img src="https://placeimg.com/640/480/any?r=0.5554445655393978" alt="" />
                     <label htmlFor="name" ><p>Nombre</p> </label>
                     <InputText id='name' />

                     <label htmlFor="name" ><p>Nombre</p> </label>
                     <InputText id='name' />

                     <label htmlFor="name" ><p>Nombre</p> </label>
                     <InputText id='name' />


                  </div>

                  <div>
                     <label htmlFor="name" ><p>Nombre</p> </label>
                     <InputText id='name' />

                     <label htmlFor="name" ><p>Nombre</p> </label>
                     <InputText id='name' />

                     <label htmlFor="name" ><p>Nombre</p> </label>
                     <InputText id='name' />
                     <label htmlFor="name" ><p>Nombre</p> </label>
                     <InputText id='name' />
                     <label htmlFor="name" ><p>Nombre</p> </label>
                     <InputText id='name' />

                  </div>

               </div>
            </form>

         </div>

         <div className='itemDetail-footer'>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text p-button-sm" />
            <Button label="Guardar" icon="pi pi-check" className="p-button-text p-button-sm" />

         </div>

      </div>
   )
}

export default ItemDetail;
