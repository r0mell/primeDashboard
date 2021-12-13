import React from 'react'
import { InputText } from 'primereact/inputtext'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuItems from '../constants/consts';

const MyAccount = () => {
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
               <div className='grid'>
                  <h1>Datos de mi cuenta</h1>
                  <InputText placeholder="Test" />
               </div>
            </div>
         </div>



      </div>
   )
}

export default MyAccount
