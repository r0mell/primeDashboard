import React from 'react'
import { Link } from 'react-router-dom'
/* import logoDark from '../assets/icons/logo-dark.svg' */
import logoUnick from '../assets/icons/Unick_logo.png'

function HeaderMain() {
   return (

      <div className="layout-topbar">
         <Link to="/" className="layout-topbar-logo">
            <img src={logoUnick} alt="logo" />
            {/* <span>Unick</span> */}
         </Link>

      </div>
   )
}

export default HeaderMain
