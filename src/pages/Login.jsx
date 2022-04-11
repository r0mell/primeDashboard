import React, { useContext, useRef, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Link, useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';

import HeaderMain from '../components/HeaderMain';
import AppContext from '../context/AppContext';

const Login = () => {

   const navigate = useNavigate()

   const { getToken } = useContext(AppContext)
   const [validate, setValidate] = useState(false)
   const toast = useRef()

   const sunmitFuction = async (valores, resetForm) => {

      let tokenAux = await getToken(valores)

      console.log(tokenAux);
      console.log('formulario enviado');

      toast.current.show({ severity: 'success', summary: 'Inicio Correcto', detail: 'Iniciando Sesión' });

      setValidate(true)
      resetForm()

      setTimeout(() => {
         setValidate(false)
         console.log('procesando informacion ');

      }, 2000);


      setTimeout(() => {
         navigate('/product/products')
      }, 2000)

   }

   return (
      <>
         <HeaderMain />

         <Toast ref={toast} />

         <div className="login-box">
            <h1>Inicia Sesion</h1>


            <Formik

               initialValues={{
                  email: '',
                  userPassword: ''

               }}

               validate={(valores) => {
                  let errors = {}

                  //validacion correo
                  if (!valores.email) {
                     errors.email = 'Correo requerido'
                  } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                     errors.email = 'Correo sin formato'
                  }

                  //validacion pasword
                  if (!valores.userPassword) {
                     errors.userPassword = 'Contraseña requerida'
                  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(valores.userPassword)) {
                     errors.userPassword = 'Contraseña invalida al menos [A, a, *, 0-9]'
                  }


                  return errors
               }}

               onSubmit={async (valores, { resetForm }) => {
                  sunmitFuction(valores, resetForm)

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

                        <button icon="pi pi-check" className='login-button' >Registrate</button>


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
