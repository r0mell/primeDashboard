import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../containers/layout';
import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import EditProduct from '../pages/EditProduct';
import CreateAccount from '../pages/CreateAccount';
import InitialPage from '../pages/InitialPage';
import Orders from '../pages/Orders';
import Logout from '../pages/Logout';

import '../styles/layout.scss'
import MyProducts from '../pages/MyProducts';
import Discover from '../pages/Discover';
import OrdesAdministrator from '../pages/OrdesAdministrator';
import ClientsAdministrator from '../pages/ClientsAdministrator';
import CheckPay from '../pages/CheckPay';
import ProductAdministrator from '../pages/ProductsAdministrator';

import AppState from '../context/AppState'

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import Acquisitions from '../pages/Acquisitions';

const App = () => {

   return (

      <AppState >
         <BrowserRouter>
            <Layout>
               <Routes>
                  <Route exact path="/" element={<InitialPage />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/logup" element={<CreateAccount />} />
                  <Route exact path="/account" element={<MyAccount />} />
                  <Route exact path="/orders/order" element={<Orders />} />
                  <Route exact path="/orders/checkpay" element={< CheckPay />} />

                  <Route exact path="/orders/acquisitions" element={< Acquisitions />} />
                  <Route exact path="/product/products" element={<Home />} />
                  <Route exact path="/product/editProduct" element={<EditProduct />} />
                  <Route exact path="/products/myProducts" element={<MyProducts />} />
                  <Route exact path="/products/discover" element={<Discover />} />
                  <Route exact path="/admin/checkout" element={< OrdesAdministrator />} />
                  <Route exact path="/admin/clients" element={< ClientsAdministrator />} />
                  <Route exact path="/admin/products" element={< ProductAdministrator />} />
                  <Route exact path="/logout" element={< Logout />} />
                  <Route path="*" element={<NotFound />} />

               </Routes>

            </Layout>
         </BrowserRouter>
      </AppState>

   )
}

export default App;
