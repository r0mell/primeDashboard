import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Button } from "primereact/button";
import AppContext from '../context/AppContext';

const ButtonLogout = () => {


   const { logout } = useContext(AppContext)


   return (
      <>


         <Link to='/'>
            <Button onClick={logout} className="p-button-secondary">Salir</Button>
         </Link>


      </>
   )
}

export default ButtonLogout;
