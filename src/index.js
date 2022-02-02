import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react'
import App from './routes/App';


ReactDOM.render(
   <React.StrictMode>
      <Auth0Provider
         domain='dev-2a4ydmio.us.auth0.com'
         clientId='uSgvWr5VyVmKmVokkDhZCWl97vhtvJrx'
         redirectUri={`${window.location.origin}`}>
         <App />
      </Auth0Provider>
   </React.StrictMode>
   , document.getElementById('app'));