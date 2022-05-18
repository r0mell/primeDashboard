import React, { useContext, useEffect, useRef } from 'react';


import Header from '../components/Header';
import Menu from '../components/Menu';
import ProductList from '../containers/ProductList';


import MenuItems from '../constants/consts';
import MenuClients from '../constants/menuClients';
import AppContext from '../context/AppContext';

/* const [overlayMenuActive, setOverlayMenuActive] = useState(false); */


const Home = () => {

   const { getProfile, user } = useContext(AppContext)


   useEffect(async () => {

      await getProfile()

   }, [])

   const onMenuItemClick = (event) => {
      if (!event.item.items) {
         setOverlayMenuActive(false);
      }
   };

   return (
      <>
         {
            user
               ? <div className='layout-wrapper' >
                  < Header />

                  <div className='layout-sidebar'>

                     {
                        user.isAdmin

                           ? <Menu
                              model={MenuItems}
                           //onMenuItemClick={onMenuItemClick} 
                           />
                           : <Menu
                              model={MenuClients}
                           //onMenuItemClick={onMenuItemClick} 
                           />
                     }

                  </div>

                  <div className="layout-main-container">
                     <div className="layout-main">
                        <h1>Nuestros Productos</h1>

                        <div className='grid'>
                           <ProductList />
                        </div>
                     </div>
                  </div>

               </div >
               : <div>Cargando informacion</div>

         }
      </>
   )
}

export default Home;
