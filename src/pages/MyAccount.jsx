import React, { useContext, useEffect, useState } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';

import AppContext from '../context/AppContext';

import MenuItems from '../constants/consts';
import Header from '../components/Header'
import Menu from '../components/Menu'

import { Button } from 'primereact/button';


const MyAccount = () => {

   const { user, getProfile, putUser } = useContext(AppContext)

   useEffect(async () => {
      await getProfile()
   }, [])


   const handleVerifly = (updateUser) => {
      putUser(updateUser)
   }

   const [validate, setValidate] = useState(false)

   return (
      //todos los componentes tienen que tener 
      <div className='layout-wrapper'>
         <Header />
         <div className='layout-sidebar'>
            <Menu
               model={MenuItems}
            /* onMenuItemClick={onMenuItemClick}  */ />
         </div>


         <div className="layout-main-container">
            <div className="layout-main">
               <div className='account-card'>

                  <div className='account-header'>
                     <h2 className="p-text-center">Mi cuenta</h2>
                  </div>

                  <div><h3>Datos Personales</h3></div>

                  {user

                     ? <Formik
                        initialValues={{
                           firstName: user.firstName || '',
                           lastName: user.lastName || '',
                           nickName: user.nickName || '',
                           email: user.email || '',
                           age: user.age || '',
                           gender: user.gender || '',
                           country: user.country || '',
                           city: user.city || '',
                           address: user.address || '',
                           cp: user.cp || '',
                           phone: user.phone || ''

                        }}

                        validate={(valores) => {
                           let errors = {}

                           //validacion nombre
                           if (!valores.firstName) {
                              errors.firstName = 'porfa ingresa un nombre'
                           } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.firstName)) {
                              errors.firstName = 'El nombre solo puede contener espacios y letras'
                           }

                           //validacion correo
                           if (!valores.nickName) {
                              errors.nickName = 'porfa ingresa un correo'
                           } /* else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.nickName)) {
                              errors.nickName = 'El nombre solo puede contener espacios y letras'
                           } */
                           return errors


                        }}

                        onSubmit={(valores) => {

                           handleVerifly(valores)
                           //console.log(valores);
                           console.log('formulario enviado');
                           setValidate(true)
                           setTimeout(() => {
                              setValidate(false)
                           }, 4000);
                        }}
                     >

                        {({ errors }) => (

                           <Form className='account-container'>

                              <div className='account-left'>

                                 <div className='account-form-two'>

                                    <div>
                                       <label htmlFor="firstName" >Nombre</label>
                                       <Field
                                          type='text'
                                          id='firstName'
                                          name='firstName'
                                          placeholder='Ej: Joe'
                                       />

                                       <ErrorMessage name='firstName' component={() => (
                                          <div className='account-error'>{errors.firstName}</div>
                                       )} />
                                    </div>

                                    <div>

                                       <label htmlFor="lastName" >Apellido</label>
                                       <Field
                                          type='text'
                                          id='lastName'
                                          name='lastName'
                                          placeholder='Ej: Second'
                                       />

                                       <ErrorMessage name='lastName' component={() => (
                                          <p className='account-error'>{errors.lastName}</p>
                                       )} />


                                    </div>
                                 </div>

                                 <div className='account-form-two'>
                                    <div>
                                       <label htmlFor="age" >Edad</label>
                                       <Field
                                          type='number'
                                          id='age'
                                          name='age'
                                          placeholder='Ej: 2#'
                                       />
                                       <ErrorMessage name='age' component={() => (
                                          <p className='account-error'>{errors.age}</p>
                                       )} />
                                    </div>

                                    <div>

                                       <label htmlFor="gender" >Sexo</label>
                                       <Field name='gender' as='select' >
                                          <option value="M">Masculino</option>
                                          <option value="F">Femenino</option>
                                          <option value="O">Otro</option>

                                       </Field >

                                       <ErrorMessage name='gender' component={() => (
                                          <p className='account-error'>{errors.gender}</p>
                                       )} />
                                    </div>
                                 </div>
                              </div>


                              <div className='account-right'>

                                 <div className='account-form-one'>
                                    <label htmlFor="nickName" >Nick</label>
                                    <Field
                                       type='text'
                                       id='nickName'
                                       name='nickName'
                                       placeholder='Ej: User007'
                                    />
                                    <ErrorMessage name='nickName' component={() => (
                                       <p className='account-error'>{errors.nickName}</p>
                                    )} />
                                 </div>

                                 <div className='account-form-one'>
                                    <label htmlFor="email" >Correo Electrónico</label>
                                    <Field
                                       type='text'
                                       id='email'
                                       name='email'
                                       placeholder='Ej: correo@correo.com'
                                    />
                                    <ErrorMessage name='email' component={() => (
                                       <p className='account-error'>{errors.email}</p>
                                    )} />
                                 </div>
                              </div>


                              <div><h3>Dirección</h3></div>

                              <div></div>

                              <div className='account-address-label'>
                                 <label htmlFor="country" >País</label>
                              </div>

                              <div className='account-address-input'>
                                 <Field
                                    type='text'
                                    id='country'
                                    name='country'
                                    placeholder='Ej: Ecuador'
                                 />
                                 <ErrorMessage name='country' component={() => (
                                    <p className='account-error'>{errors.country}</p>
                                 )} />
                              </div>

                              <div className='account-address-label'>
                                 <label htmlFor="city" >Ciudad</label>
                              </div>
                              <div className='account-address-input'>
                                 <Field
                                    type='text'
                                    id='city'
                                    name='city'
                                    placeholder='Ej: Quito'
                                 />
                                 <ErrorMessage name='city' component={() => (
                                    <p className='account-error'>{errors.city}</p>
                                 )} />
                              </div>



                              <div className='account-address-label'>
                                 <label htmlFor="address" >Dirección</label>
                              </div>
                              <div className='account-address-input'>
                                 <Field
                                    type='text'
                                    id='address'
                                    name='address'
                                    placeholder='Ej: calle principal, secundaria'
                                 />
                                 <ErrorMessage name='address' component={() => (
                                    <p className='account-error'>{errors.address}</p>
                                 )} />
                              </div>



                              <div className='account-address-label'>
                                 <label htmlFor="cp" >Código Postal</label>
                              </div>
                              <div className='account-address-input'>
                                 <Field
                                    type='text'
                                    id='cp'
                                    name='cp'
                                    placeholder='Ej: 15852'
                                 />
                                 <ErrorMessage name='cp' component={() => (
                                    <p className='account-error'>{errors.cp}</p>
                                 )} />
                              </div>




                              <div className='account-address-label'>
                                 <label htmlFor="phone" >Teléfono</label>
                              </div>
                              <div className='account-address-input'>
                                 <Field
                                    type='text'
                                    id='phone'
                                    name='phone'
                                    placeholder='Ej: 0123456789'
                                 />
                                 <ErrorMessage name='phone' component={() => (
                                    <p className='account-error'>{errors.phone}</p>
                                 )} />
                              </div>





                              <div >
                                 <Button icon="pi pi-check" >Registrate</Button>
                              </div>

                              <div>
                                 {validate && <p>ingresado correctamente</p>}
                              </div>

                           </Form>
                        )}
                     </Formik>

                     : <div>cargando usuario</div>
                  }




               </div>
            </div>
         </div>
      </div >
   )
}

export default MyAccount



