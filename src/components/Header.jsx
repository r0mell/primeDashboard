import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

/* import logoDark from '../assets/icons/logo-dark.svg' */
import logoUnick from '../assets/icons/Unick_logo.png'

const Header = (props) => {

   const { toEdit } = useContext(AppContext);

   return (
      <div className="layout-topbar">
         <Link to="/home" className="layout-topbar-logo">
            <img src={logoUnick} alt="logo" />
           {/*  <span>Unick</span> */}
         </Link>

         <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
            <i className="pi pi-bars" />
         </button>

         <ul className="layout-topbar-menu lg:flex origin-top">
            <li>
               <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                  <i className="pi pi-calendar" />
                  <span>Events</span>
               </button>
            </li>
            <li>
               <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                  <i className="pi pi-cog" />
                  {
                     toEdit.length > 0 && <p>{toEdit.length}</p>
                  }
               </button>
            </li>
            <li>
               <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                  <i className="pi pi-user" />
                  <span>Profile</span>
               </button>
            </li>
         </ul>
      </div>
   )
}

export default Header;

