import React from 'react';
import TemplateDash from '../containers/TemplateDash';

const OrdesAdministrator = () => {
   return (
      <div className='layout-wrapper'>

         <TemplateDash />

         <div className="layout-main-container">
            <div className="layout-main">
               <div>
                  <p>esto es la pagina para administracion de ordenes de compras realidas</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default OrdesAdministrator;
