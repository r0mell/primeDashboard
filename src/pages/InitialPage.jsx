import React from 'react';

import { Link } from 'react-router-dom'
import { Button } from "primereact/button";

import ButtonLogin from '../components/ButtonLogin';

import Login from '../pages/Login';
import HeaderMain from '../components/HeaderMain';
import TimeLine from '../components/TimeLine';

const InitialPage = () => {

   return (
      <>
         <HeaderMain />
         <div className="initial-content">
            <div className='initial-card'>
               <div className='p-grid'>
                  <div className='p-md-5 p-col-12'>
                     <div className='initial-presentation'>
                        <h1>Bienvenido a Unick</h1>
                        <p>Esta es una demostracion de lo que podemos presentar</p>
                        {/* <ButtonLogin /> */}
                        {/* <Login /> */}
                        <Link to='/login'><Button>Comencemos</Button></Link>


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
      </>
   )
}

export default InitialPage;
