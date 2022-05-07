import React from 'react'

import Header from '../components/Header';
import Menu from '../components/Menu';
import MenuItems from '../constants/consts';

const TemplateDash = ({ menu }) => {
   return (

      <>
         <div className='layout-wrapper'>
            <Header />
            <div className='layout-sidebar'>
               <Menu
                  model={menu}
               /* onMenuItemClick={onMenuItemClick}  */ />
            </div>
         </div>
      </>
   )
}

export default TemplateDash;
