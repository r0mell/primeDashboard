import React from 'react'
import { Link } from 'react-router-dom'
/* import logoDark from '../assets/icons/logo-dark.svg' */
import logoUnick from '../assets/icons/Unick_logo.png'

function HeaderReport() {
   return (

      <div className="layout-topbar">
         <Link to="/" className="layout-topbar-logo">
            <img src={logoUnick} alt="logo" />
            {/* <span>Unick</span> */}
         </Link>

         <Link to='/admin/checkout'>
            <button className='reportorder-button'>Regresar</button>
         </Link>

        {/*  <button className='reportorder-button'>Descargar</button> */}
      </div>
   )
}

export default HeaderReport
