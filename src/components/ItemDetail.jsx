import React, { useContext, useRef, useState } from 'react';

import { Button } from 'primereact/button';

import AppContext from '../context/AppContext';


const ItemDetail = ({ itemDetail, handleCanceLoadItem }) => {

   const { createdBy, addMyProducts } = useContext(AppContext);

   const [proyectName, setProyectName] = useState('camiseta');

   const form = useRef(null);


   const handleSubmit = (item) => () => {

      const formData = new FormData(form.current);

      const product = {
         'proyectName': formData.get('proyectName'),
         'color': formData.get('color'),
         'size': formData.get('size'),
         'neckType': formData.get('neckType'),
         'position': formData.get('position'),
         'stampingType': formData.get('stampingType'),
         'price': formData.get('price'),
      }

      const newProyect = { ...item, ...product, createdBy }
      addMyProducts(newProyect);
      console.log('JSON:' + newProyect);
      /*Aqui esxiste un errror debido a que se tendria que eliminar solo   */

   }


   return (
      <div className='itemDetail-container'>

         <div className='itemDetail-header'>
            <h3>Detalles del producto</h3>
         </div>

         <div className='itemDetail-form'>

            <form ref={form} >
               <div className='itemDetail-form-grid'>

                  <div className='itemDetail-form-grid-first'>

                     <img src={itemDetail.images[1]} alt={itemDetail.title} />

                     <label htmlFor="proyectName" ><h4>Nombre</h4> </label>
                     <input name='proyectName' id='proyectName' placeholder={proyectName} />

                     <label htmlFor="color"> <h4>Escoje el color:</h4></label>
                     <select name="color" id="color">
                        <option value="white">Blanco</option>
                        <option value="black">Negro</option>
                        <option value="red">Rojo</option>
                     </select>

                     <label htmlFor="size" > <h4>Talla</h4></label>
                     <select name="size" id="size">
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="XM">XM</option>
                        <option value="M">M</option>
                        <option value="XL">XL</option>
                        <option value="L">L</option>
                     </select>

                     <label htmlFor="neckType" > <h4>Tipo de cuello</h4></label>
                     <select name="neckType" id="neckType">
                        <option value="round">Redondo</option>
                        <option value="tipeV">Tipo V</option>
                     </select>

                  </div>

                  <div className='itemDetail-form-'>
                     <img src={itemDetail.images[1]} alt={itemDetail.title} />

                     <h4>Posición del logo</h4>

                     <input type="radio" id='left' name='position' value='left' />
                     <label htmlFor='left'>Izquierda</label>

                     <input type="radio" id='center' name='position' value='center' />
                     <label htmlFor='center'>Centro</label>

                     <input type="radio" id='right' name='position' value='right' />
                     <label htmlFor='right'>Derecho</label>


                     <h4>Tipo de estampado</h4>

                     <input type="radio" id='bordado' name='stampingType' value='bordado' />
                     <label htmlFor='bordado'>Bordado</label>

                     <input type="radio" id='estampado' name='stampingType' value='estampado' />
                     <label htmlFor='estampado'>Estampado</label>

                     <h4>Precio</h4>
                     <p>$ {itemDetail.price + 5}</p>

                  </div>

               </div>

            </form>

         </div>

         <div className='itemDetail-footer'>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text p-button-sm" onClick={handleCanceLoadItem(null)} />
            <Button label="Guardar" icon="pi pi-check" className="p-button-text p-button-sm" onClick={handleSubmit(itemDetail)} />

         </div>

      </div>
   )
}

export default ItemDetail;
