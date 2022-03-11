import React from 'react';
import { Button } from "primereact/button";

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
