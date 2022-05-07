import React, { useContext } from 'react';

import MenuItems from '../constants/consts';
import MenuClients from '../constants/menuClients';

import Header from '../components/Header';
import Menu from '../components/Menu';
import ButtonLogout from '../components/ButtonLogout'

import AppContext from '../context/AppContext';


const Logout = () => {

   const { user } = useContext(AppContext)

   return (
      <>
         {

            user
               ?
               <div className='layout-wrapper'>
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
                        <h1>Cerrar Sesión</h1>

                        <div className='logout-container' >
                           <h4> ¿Estas seguro de que quieres salir? </h4>
                           <ButtonLogout />
                        </div>

                     </div>
                  </div>

               </div>
               : <div>Cargando informacion</div>
         }
      </>
   )
}

export default Logout;