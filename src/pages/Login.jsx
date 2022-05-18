import React, { useContext, useRef } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Link, useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';

import HeaderMain from '../components/HeaderMain';
import AppContext from '../context/AppContext';

const Login = () => {

   const { getToken, getProfile } = useContext(AppContext)

   const navigate = useNavigate()

   const toast = useRef()

   const submitFunction = async (valores, resetForm) => {

      let statusAux = await getToken(valores)

      resetForm()

      if (statusAux == 200) {

         toast.current.show({ severity: 'success', summary: 'Inicio Correcto', detail: 'Iniciando Sesión' });

         setTimeout(() => {
            navigate('/product/products')
         }, 2000)
      }

      if (statusAux == 401) {

         toast.current.show({ severity: 'warn', summary: 'Error En Credenciales', detail: 'Error Iniciando Sesión' });
      }

   }

   return (
      <>
         <HeaderMain />

         <Toast ref={toast} />

         <div className="login-box">
            <h1>Inicia Sesión</h1>


            <Formik

               initialValues={{
                  email: '',
                  userPassword: ''

               }}

               validationSchema={Yup.object({
                  email: Yup.string()
                     .email('El correo electrónico que has introducido es invalido')
                     .required('Correo electrónico requerido'),
                  userPassword: Yup.string()
                     .required('Contraseña requerida')
               })}

               validate={(valores) => {
                  let errors = {}

                  //validation password
                  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(valores.userPassword)) {
                     errors.userPassword = 'Contraseña invalida al menos [A, a, *, 0-9]'
                  }
                  return errors
               }}

               onSubmit={async (valores, { resetForm }) => {
                  submitFunction(valores, resetForm)
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


                     <label htmlFor="userPassword">Contraseña</label>
                     <Field
                        type="password"
                        id='userPassword'
                        name='userPassword'
                        placeholder="Ej: P@ssw0rd"
                     />

                     <ErrorMessage name='userPassword' component={() => (
                        <div className='account-error'>{errors.userPassword}</div>
                     )} />


                     <div className="log-access">

                        <button icon="pi pi-check" className='login-button' >Ingresar</button>


                        <Link to="/logup">No tienes cuenta? Regístrate</Link>
                     </div>
                  </Form>
               )}
            </Formik>

         </div>
      </>
   )
}

export default Login;
