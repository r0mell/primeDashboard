import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from "primereact/button";

import HeaderMain from '../components/HeaderMain';
import TimeLine from '../components/TimeLine';

const InitialPage = () => {

   return (
      <div>
         <HeaderMain />
         <div className="initial-content">

            <div className='initial-card'>
               <div className='p-grid'>

                  <div className='p-md-5 p-col-12'>
                     <div className='initial-presentation'>
                        <h1>Bienvenido a Unick</h1>
                        <p>Esta es una demostracion de lo que podemos presentar</p>
                        <Link to="/login">
                           <Button label="Comienza" className="p-button-secondary" />
                        </Link>
                     </div>
                  </div>


                  <div className='p-md-7 p-col-12'>
                     <div className='initial-timeline'>
                        <TimeLine />

                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default InitialPage;
