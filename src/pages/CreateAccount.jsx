import { Button } from 'primereact/button'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderMain from '../components/HeaderMain'

function CreateAccount() {
   return (
      <>
         <HeaderMain />
         <div
            background="/assets/Img/03.jpg"
            class="img-fluid"
            alt="Responsive image"
         >
            <div class="login-box , logup-box">
               <h1>Registrate</h1>

               <form>
                  <label for="mail">Correo Electronico</label>
                  <input type="text" placeholder="Ej: name@email.com" />

                  <label for="username">User</label>
                  <input type="text" placeholder="Enter Username" />

                  <label for="password">Password</label>
                  <input type="password" placeholder="Enter Password" />



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

export default CreateAccount
