import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

const ButtonLogout = () => {

   const { logout } = useContext(AppContext)

   return (
      <>
         <Link to='/'>
            <button onClick={logout} className="reportorder-button">Salir</button>
         </Link>
      </>
   )
}

export default ButtonLogout;
