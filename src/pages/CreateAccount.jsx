import React, { useContext, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Toast } from 'primereact/toast';
import { Link, useNavigate } from 'react-router-dom';

import HeaderMain from '../components/HeaderMain';
import AppContext from '../context/AppContext';

function CreateAccount() {

   const { logupUser } = useContext(AppContext)
   const navigate = useNavigate()

   const toast = useRef()


   return (
      <>
         <HeaderMain />

         <Toast ref={toast} />

         <div className="login-box , logup-box">
            <h1>Registrate</h1>

            <Formik

               initialValues={{
                  email: '',
                  nickName: '',
                  passwordHash: ''

               }}

               validationSchema={Yup.object({

                  email: Yup.string()
                     .email('El correo electrónico que has introducido es invalido')
                     .required('Correo electrónico requerido'),
                  nickName: Yup.string()
                     .min(4, 'Debería tener como mínimo 4 caracteres')
                     .max(10, 'Debería tener como máximo 10 caracteres')
                     .required('Nick requerido'),
                  passwordHash: Yup.string()
                     .min(8, 'La contraseña debe tener mínimo 4 caracteres')
                     .max(15, 'La contraseña debe tener máximo 15 caracteres')
                     .required('Contraseña requerida')

               })}

               validate={(valores) => {
                  let errors = {}

                  //validacion pasword
                  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(valores.passwordHash)) {
                     errors.passwordHash = 'Contraseña invalida/*  */ al menos A a * 0-9'
                  }

                  return errors
               }}

               onSubmit={(valores, { resetForm }) => {

                  toast.current.show({ severity: 'success', summary: 'Cuenta Creada', detail: 'Su cuenta ha sido creada exitosamente' });

                  logupUser(valores)

                  resetForm()

                  setTimeout(() => {
                     navigate('/login')
                  }, 2000)

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

                        <button className='login-button' >Registrate</button>

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
