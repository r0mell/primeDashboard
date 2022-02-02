import React from 'react';
import { Button } from "primereact/button";
import { useAuth0 } from '@auth0/auth0-react'

const ButtonLogin = () => {

   const { loginWithRedirect } = useAuth0();

   return (
      <>
         <Button
            label="Comienza"
            className="p-button-secondary"
            onClick={() => loginWithRedirect()} />
      </>
   )
}

export default ButtonLogin
