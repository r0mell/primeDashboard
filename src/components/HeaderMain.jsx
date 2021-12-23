import React from 'react'
import { Link } from 'react-router-dom'
import logoDark from '../assets/icons/logo-dark.svg'

function HeaderMain() {
   return (

      <div className="layout-topbar">
         <Link to="/" className="layout-topbar-logo">
            <img src={logoDark} alt="logo" />
            <span>Unick</span>
         </Link>

      </div>
   )
}

export default HeaderMain
