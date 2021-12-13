import React from 'react';



import Header from '../components/Header';
import Menu from '../components/Menu';
import MenuItems from '../constants/consts';
import MyAccount from './MyAccount';
import Layout from '../containers/layout';


import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

/* const [overlayMenuActive, setOverlayMenuActive] = useState(false); */


const Home = () => {


   /*    const onMenuItemClick = (event) => {
         if (!event.item.items) {
            setOverlayMenuActive(false);
         }
      }; */



   return (

      <div className='layout-wrapper'>
         <Header />
         <div className='layout-sidebar'>
            <Menu
               model={MenuItems}
               /* onMenuItemClick={onMenuItemClick}  */ />
         </div>


      </div>
   )
}

export default Home;

