import React, { useContext, useEffect } from 'react';

import Header from '../components/Header';
import Menu from '../components/Menu';
import MenuItems from '../constants/consts';
import { InputText } from 'primereact/inputtext'
import ProductList from '../containers/ProductList';
import AppContext from '../context/AppContext';

/* const [overlayMenuActive, setOverlayMenuActive] = useState(false); */


const Home = () => {

   const { getProfile } = useContext(AppContext)

   /*   useEffect(() => {
  
        getProfile()
  
     }, []) */


   const onMenuItemClick = (event) => {
      if (!event.item.items) {
         setOverlayMenuActive(false);
      }
   };

   return (

      <div className='layout-wrapper'>
         <Header />
         <div className='layout-sidebar'>
            <Menu
               model={MenuItems}
            //onMenuItemClick={onMenuItemClick} 
            />
         </div>


         <div className="layout-main-container">
            <div className="layout-main">
               <h1>Nuestros Productos</h1>

               <div className='grid'>
                  <ProductList />
               </div>
            </div>
         </div>

      </div>
   )
}

export default Home;

