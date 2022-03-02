import React from 'react';
import { Button } from "primereact/button";
//import { useAuth0 } from '@auth0/auth0-react'

const ButtonLogout = () => {
   // const { logout } = useAuth0();
   return (
      <>
         <Button
            label="Salir"
            className="p-button-secondary"
         //onClick={() => logout({ returnTo: window.location.origin })} 

         />
      </>
   )
}

export default ButtonLogout;
