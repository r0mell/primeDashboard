import React, { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

import HeaderMain from '../components/HeaderMain';
import AppContext from '../context/AppContext';

const Login = () => {

   const navigate = useNavigate()

   const { getToken } = useContext(AppContext)

   const [userName, setUserName] = useState('')
   const [password, setPassword] = useState('')


   const handleLogin = async (event) => {
      event.preventDefault()

      const tokenAux = await getToken({
         firstName: userName,
         password
      })

      setUserName('')
      setPassword('')

      tokenAux
         ? navigate('/product/products')
         : console.log("usuio no valido")
   }

   return (
      <>
         <HeaderMain />
         <div
            background="/assets/Img/03.jpg"
            className="img-fluid"
            alt="Responsive image"
         >
            <div className="login-box">
               <h1>Inicia Sesion</h1>

               <form onSubmit={handleLogin}>
                  <label >User</label>

                  <input
                     type="text"
                     name='UserName'
                     placeholder="Enter Username"
                     value={userName}
                     onChange={({ target }) => setUserName(target.value)}
                  />

                  <label >Password</label>

                  <input
                     type="password"
                     name='Password'
                     placeholder="Enter Password"
                     value={password}
                     onChange={({ target }) => setPassword(target.value)}
                  />

                  <div className="log-access">

                     <Button className="p-button-sm" icon="pi pi-check" label="Sing in" ></Button>

                     <Link to="/loggup">Olvidaste tu contraseña?</Link> <br />
                     <Link to="/loggup">No tienes cuenta? Registrate</Link>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}

export default Login;
