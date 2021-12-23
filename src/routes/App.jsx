import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../containers/layout';
import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import EditProduct from '../pages/EditProduct';
import CreateAccount from '../pages/CreateAccount';

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import '../styles/layout.scss'
import InitialPage from '../pages/InitialPage';
import Orders from '../pages/Orders';

const App = () => {



   return (
      <div>

         <BrowserRouter>
            <Layout>
               <Routes>
                  <Route exact path="/" element={<InitialPage />} />
                  <Route exact path="/home" element={<Home />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/logup" element={<CreateAccount />} />
                  <Route exact path="/account" element={<MyAccount />} />
                  <Route exact path="/orders" element={<Orders />} />

                  <Route exact path="/editProduct" element={<EditProduct />} />
                  <Route path="*" element={<NotFound />} />

               </Routes>

            </Layout>
         </BrowserRouter>
      </div>

   )
}

export default App;
