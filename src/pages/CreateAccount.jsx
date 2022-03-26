import React, { useContext, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Button } from 'primereact/button'
import { Link, useNavigate } from 'react-router-dom'

import HeaderMain from '../components/HeaderMain'
import AppContext from '../context/AppContext';

function CreateAccount() {


   const { logupUser } = useContext(AppContext)
   const [validate, setValidate] = useState(false)
   const navigate = useNavigate()


   return (
      <>
         <HeaderMain />

         <div className="login-box , logup-box">
            <h1>Registrate</h1>


            <Formik

               initialValues={{
                  email: '',
                  nickName: '',
                  passwordHash: ''

               }}

               validate={(valores) => {
                  let errors = {}

                  //validacion correo
                  if (!valores.email) {
                     errors.email = 'Correo requerido'
                  } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                     errors.email = 'Correo sin formato'
                  }

                  //validacion nickName
                  if (!valores.nickName) {
                     errors.nickName = 'Nick requerido'
                  } /* else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nickName)) {
                     errors.nickName = 'El nick debe ser unico'
                  } */

                  //validacion pasword
                  if (!valores.passwordHash) {
                     errors.passwordHash = 'Contraseña requerida'
                  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(valores.passwordHash)) {
                     errors.passwordHash = 'Contraseña invalida/*  */ al menos A a * 0-9'
                  }


                  return errors
               }}

               onSubmit={(valores, { resetForm }) => {

                  logupUser(valores)

                  console.log(valores);
                  console.log('formulario enviado');

                  setValidate(true)
                  resetForm()

                  setTimeout(() => {
                     setValidate(false)
                     console.log('procesando informacion ');
                  }, 2000);

                  setTimeout(() => {
                     navigate('/login')
                  }, 3000)

               }}

            >

               {({ errors }) => (

                  <Form>
                     <label htmlFor="email">Correo Electrónico</label>
                     <Field
                        type="text"
                        id='email'
                        name='email'
                        placeholder="Ej: name@email.com"
                     />

                     <ErrorMessage name='email' component={() => (
                        <div className='account-error'>{errors.email}</div>
                     )} />

                     <label htmlFor="nickName">User</label>
                     <Field
                        type="text"
                        id='nickName'
                        name='nickName'
                        placeholder="Ej: Usuario77"
                     />

                     <ErrorMessage name='nickName' component={() => (
                        <div className='account-error'>{errors.nickName}</div>
                     )} />

                     <label htmlFor="passwordHash">Contraseña</label>
                     <Field
                        type="password"
                        id='passwordHash'
                        name='passwordHash'
                        placeholder="Ej: P@ssw0rd"
                     />

                     <ErrorMessage name='passwordHash' component={() => (
                        <div className='account-error'>{errors.passwordHash}</div>
                     )} />


                     <div className="log-access">

                        <Button icon="pi pi-check" >Registrate</Button>

                        <Link to="/login"><p>

                           Ya tienes una cuenta? Iniciar Sesión

                        </p>
                        </Link>
                     </div>
                  </Form>
               )}
            </Formik>


         </div>
      </>
   )
}

export default CreateAccount
