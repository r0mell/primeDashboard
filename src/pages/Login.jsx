import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import HeaderMain from '../components/HeaderMain';

const Login = () => {
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

               <form>
                  <label >User</label>
                  <input type="text" placeholder="Enter Username" />

                  <label >Password</label>
                  <input type="password" placeholder="Enter Password" />
                  {/* 
<div className=''>
</div> */}

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
