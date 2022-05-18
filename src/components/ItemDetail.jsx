import React, { useContext, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';

import { Toast } from 'primereact/toast';


import { Button } from 'primereact/button';
import AppContext from '../context/AppContext';
import Carousel from '../containers/Carousel';

import images from '../constants/imagesCarousel'

let URLIMAGE = 'https://i.imgur.com/c7l6MNB.png'

//estas componente renderiza tanto las fotografias como el carrucel 
const ImagesLayout = ({ item }) => {

   const { values } = useFormikContext()
   const [indexImage, setIndexImage] = useState(0)

   const positionLogo = (position) => {

      let top
      let left
      let positionElemet

      if (position == '') {
         return positionElemet = {
            display: "block"
         }
      }
      if (position == 'center') {
         top = "29%"
         left = "45%"
      }
      if (position == 'left') {
         top = "29%";
         left = "33%";
      }
      if (position == 'right') {
         top = "29%"
         left = "58%"
      }

      positionElemet = {
         width: "10%",
         height: "auto",
         top: `${top}`,
         left: `${left}`
      }

      return positionElemet
   }

   const getIndexCarousel = imageGallery => () => {

      URLIMAGE = images[imageGallery.getCurrentIndex()].original
      setIndexImage(imageGallery.getCurrentIndex())

   }

   const changeImage = (color) => {
      if (color == 'black') {
         return item.images[1]
      }
      if (color == 'red') {
         return item.images[2]
      }
      if (color == 'white') {
         return item.images[0]
      }
   }

   return (
      <>
         <div className='itemDetail-images-first'  >
            <img
               className='itemDetail-images-template'
               src={changeImage(values.color) || item.images[0]}
               alt={values.color}

            />

            <img
               className='itemDetail-images-logo'
               style={positionLogo(values.position)}
               src={images[indexImage].original}
               alt={values.color}
            />

         </div>

         <div className='itemDetail-images-second'>
            <Carousel
               getIndexCarousel={getIndexCarousel}
            />
         </div>

      </>
   )
}



//item main para renderizado
const ItemDetail = ({ itemDetail }) => {

   const { addMyProducts } = useContext(AppContext);
   const toast = useRef()

   const calculatePrice = (stampingType) => {

      if (stampingType == 'bordado') {
         return itemDetail.price + 5
      }

      if (stampingType == 'estampado') {
         return itemDetail.price + 2.50
      }
   }

   const createMyProduct = (valores, resetForm) => {

      addMyProducts(itemDetail, valores, URLIMAGE)
      resetForm()

   }



   return (
      <div className='itemDetail-container'>

         <Toast ref={toast} />

         <div className='itemDetail-header'>
            <h3>Detalles del producto</h3>
         </div>

         <div className='itemDetail-form'>


            <Formik

               initialValues={{
                  proyectName: '',
                  color: '',
                  size: '',
                  neckType: '',
                  position: '',
                  stampingType: ''


               }}

               validate={(valores) => {

                  let errors = {}

                  if (!/^[a-zA-Z0-9]{0,16}$/.test(valores.proyectName)) {
                     errors.proyectName = 'El nombre solo puede contener letras'
                  }
                  return errors
               }}

               validationSchema={Yup.object({

                  proyectName: Yup.string()
                     .min(3, 'Minimo 3 caracteres')
                     .max(15, 'Maximo 15 caracteres')
                     .required('Nombre de proyecto requerido'),
                  color: Yup.string()
                     .oneOf(
                        ['white', 'black', 'red'],
                        'Tipo de talla invalido'
                     )
                     .required('Color requerido'),
                  size: Yup.string()
                     .oneOf(
                        ['XS', 'S', 'XM', 'M', 'XL', 'L'],
                        'Tipo de talla invalido'
                     )
                     .required('Talla requerida'),
                  neckType: Yup.string()
                     .oneOf(
                        ['round', 'tipeV'],
                        'Tipo de cuello invalido'
                     )
                     .required('Tipo de cuello requerido'),
                  position: Yup.string()
                     .required('Posición logo requerido'),

                  stampingType: Yup.string()
                     .required('Tipo de estampado requerido'),

               })}

               onSubmit={(valores, { resetForm }) => {
                  toast.current.show({ severity: 'success', summary: 'Producto Creado', detail: 'Su producto se añadió correctamente' });
                  createMyProduct(valores, resetForm)
               }}

            >
               {({ errors, values, handleReset }) => (

                  <Form>

                     <div className='itemDetail-images-grid'>

                        <ImagesLayout
                           item={itemDetail}
                        />

                     </div>

                     <div className='itemDetail-form-grid'>

                        <div className='itemDetail-form-grid-first'>

                           <label htmlFor="proyectName" ><h4>Nombre</h4></label>
                           <Field
                              type="text"
                              id='proyectName'
                              name='proyectName'
                              minLength="3" maxLength="15" size="15"
                              placeholder='Ej: Proyecto1'
                           />
                           <ErrorMessage name='proyectName' component={() => (
                              <div className='account-error'>{errors.proyectName}</div>
                           )} />

                           <label htmlFor="color"> <h4>Escoje el color</h4></label>
                           <Field name="color" as='select'>
                              <option value="white">Blanco</option>
                              <option value="black">Negro</option>
                              <option value="red">Rojo</option>
                           </Field>
                           <ErrorMessage name='color' component={() => (
                              <div className='account-error'>{errors.color}</div>
                           )} />

                           <label htmlFor="size" > <h4>Talla</h4></label>
                           <Field name="size" as='select'>
                              <option value="XS">XS</option>
                              <option value="S">S</option>
                              <option value="XM">XM</option>
                              <option value="M">M</option>
                              <option value="XL">XL</option>
                              <option value="L">L</option>
                           </Field>
                           <ErrorMessage name='size' component={() => (
                              <div className='account-error'>{errors.size}</div>
                           )} />

                           <label htmlFor="neckType" > <h4>Tipo de cuello</h4></label>
                           <Field name="neckType" as='select'>
                              <option value="round">Redondo</option>
                              <option value="tipeV">Tipo V</option>
                           </Field>
                           <ErrorMessage name='neckType' component={() => (
                              <div className='account-error'>{errors.neckType}</div>
                           )} />

                        </div>

                        <div className='itemDetail-form-'>

                           <h4>Posición del logo</h4>

                           <label >
                              <Field type="radio" name='position' value='left' /> Izquierda
                           </label>
                           <label >
                              <Field type="radio" name='position' value='center' /> Centro
                           </label>
                           <label >
                              <Field type="radio" name='position' value='right' /> Derecho
                           </label>
                           <ErrorMessage name='position' component={() => (
                              <div className='account-error'>{errors.position}</div>
                           )} />


                           <h4>Tipo de estampado</h4>

                           <label >
                              <Field type="radio" name='stampingType' value='bordado' /> Bordado
                           </label>
                           <label >
                              <Field type="radio" name='stampingType' value='estampado' /> Estampado
                           </label>
                           <ErrorMessage name='stampingType' component={() => (
                              <div className='account-error'>{errors.stampingType}</div>
                           )} />

                           <h4>Precio</h4>
                           <h3>$ {calculatePrice(values.stampingType) || itemDetail.price}</h3>

                        </div>
                     </div>

                     <div className='itemDetail-footer'>

                        <Button label="Cancelar"
                           icon="pi pi-times"
                           className="p-button-text p-button-sm"
                           onClick={

                              () => {

                                 handleReset()
                                 toast.current.show({ severity: 'info', summary: 'Campos Borrados', detail: '' })

                              }} />

                        <Button type='submit' label="Guardar" icon="pi pi-check" className="p-button-text p-button-sm" />

                     </div>
                  </Form>
               )}
            </Formik>

         </div>
      </div>
   )
}

export default ItemDetail;
