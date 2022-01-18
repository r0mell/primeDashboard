import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from '@auth0/auth0-react'
import App from './routes/App';


ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
   , document.getElementById('app'));