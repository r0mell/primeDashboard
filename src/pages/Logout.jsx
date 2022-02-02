import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import MenuItems from '../constants/consts';
import ButtonLogout from '../components/ButtonLogout'

const Logout = () => {
   return (
      <div className='layout-wrapper'>
         <Header />
         <div className='layout-sidebar'>
            <Menu
               model={MenuItems}
               /* onMenuItemClick={onMenuItemClick}  */ />
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
   )
}

export default Logout;