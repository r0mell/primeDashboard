import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Layout from '../containers/layout';
import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';
import Login from '../pages/Login';


import '../styles/layout.scss'
import NotFound from '../pages/NotFound';

const App = () => {



   return (
      <div>

         <BrowserRouter>
            <Layout>
               <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/account" element={<MyAccount />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route path="*" element={<NotFound />} />

               </Routes>

            </Layout>
         </BrowserRouter>
      </div>

   )
}

export default App;
