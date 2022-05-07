import React, { useContext, useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import AppContext from '../context/AppContext';

import MenuItems from '../constants/consts';
import MenuClients from '../constants/menuClients';

import Header from '../components/Header'
import Menu from '../components/Menu'

const MyAccount = () => {

   const { user, getProfile, putUser } = useContext(AppContext)

   useEffect(async () => {
      await getProfile()
   }, [])


   const handleVerifly = (updateUser) => {
      putUser(updateUser)
   }

   return (
      <>
         {
            user
               ? <div className='layout-wrapper'>
                  <Header />
                  <div className='layout-sidebar'>
                     {
                        user.isAdmin

                           ? <Menu
                              model={MenuItems}
                           //onMenuItemClick={onMenuItemClick} 
                           />
                           : <Menu
                              model={MenuClients}
                           //onMenuItemClick={onMenuItemClick} 
                           />
                     }
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
                                    if (!/^[a-zA-Z]{0,16}$/.test(valores.firstName)) {
                                       errors.firstName = 'El nombre solo puede contener caracteres sin espacios'
                                    }
                                    //validacion apellido
                                    if (!/^[a-zA-Z]{0,16}$/.test(valores.lastName)) {
                                       errors.lastName = 'El apellido solo puede contener caracteres sin espacios'
                                    }
                                    //validacion pais
                                    if (!/^[a-zA-Z ]{0,21}$/.test(valores.country)) {
                                       errors.country = 'País solo puede contener caracteres'
                                    }
                                    //validacion pais
                                    if (!/^[a-zA-Z ]{0,21}$/.test(valores.city)) {
                                       errors.city = 'Ciudad solo puede contener caracteres'
                                    }
                                    //validacion cp
                                    if (!/^[0-9]{0,6}$/.test(valores.cp)) {
                                       errors.cp = 'Solo se aceptan números'
                                    }
                                    //validacion celular
                                    if (!/^[0-9]{0,10}$/.test(valores.phone)) {
                                       errors.phone = 'Solo se aceptan números'
                                    }

                                    return errors
                                 }}

                                 validationSchema={Yup.object({

                                    firstName: Yup.string()
                                       .min(3, 'Minimo 3 caracteres')
                                       .max(15, 'Maximo 15 caracteres')
                                       .required('Nombre  requerido'),
                                    lastName: Yup.string()
                                       .required('Apellido requerido'),
                                    nickName: Yup.string()
                                       .required('Nick requerido'),
                                    email: Yup.string()
                                       .required('Email requerido'),
                                    age: Yup.string()
                                       .required('Edad requerida'),
                                    gender: Yup.string()
                                       .required('Sexo requerido'),
                                    country: Yup.string()
                                       .required('País requerido'),
                                    city: Yup.string()
                                       .required('Ciudad requerida'),
                                    address: Yup.string()
                                       .required('Dirección requerida'),
                                    cp: Yup.string()
                                       .min(6, 'Mínimo 6 números')
                                       .required('Código postal requerido'),
                                    phone: Yup.string()
                                       .min(10, 'Mínimo 10 números')
                                       .required('Teléfono requerido'),


                                 })}

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
                                                   minLength="3" maxLength="15" size="15"
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
                                                   minLength="3" maxLength="15" size="15"
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
                                                   min="1" max="120"
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
                                                disabled
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
                                                disabled
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
                                             minLength="3" maxLength="20" size="20"
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
                                             minLength="3" maxLength="20" size="20"
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
                                             minLength="3" maxLength="50" size="50"
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
                                             minLength="3" maxLength="6" size="6"
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
                                             maxLength="10" size="10"
                                             placeholder='Ej: 0123456789'
                                          />
                                          <ErrorMessage name='phone' component={() => (
                                             <p className='account-error'>{errors.phone}</p>
                                          )} />
                                       </div>

                                       <div >
                                          <button className='reportorder-button'>Actualizar</button>
                                       </div>

                                    </Form>
                                 )}
                              </Formik>

                              : <div>Cargando Información</div>
                           }

                        </div>
                     </div>
                  </div>
               </div >
               : <div>Cargando informacion</div>
         }

      </>

   )
}

export default MyAccount



