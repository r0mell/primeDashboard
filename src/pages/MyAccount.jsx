import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import Header from '../components/Header'
import Menu from '../components/Menu'
import MenuItems from '../constants/consts';

import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';

import Perfil from '../assets/img/rommel.jpg'


const MyAccount = () => {

   const { user } = useAuth0();
   return (
      //todos los componentes tienen que tener 
      <div className='layout-wrapper'>
         <Header />
         <div className='layout-sidebar'>
            <Menu
               model={MenuItems}
            /* onMenuItemClick={onMenuItemClick}  */ />
         </div>

         //todos los componentes deben tener este container

         <div className="layout-main-container">
            <div className="layout-main">
               <div className='account-card'>
                  <div className='account-header'>
                     <h2 className="p-text-center">Mi cuenta</h2>
                  </div>
                  <form >
                     <div className='p-grid'>
                        <div className='p-col-12 p-md-6'>
                           <div className='p-d-flex p-flex-column p-ai-center '>
                              <div className='p-mb-2 p-as-center '>
                                 <label htmlFor="firstName" placeholder='Introduce tu nombre'/*  className={classNames({ 'p-error': errors.name })} */>Primer Nombre</label>
                                 <br />
                                 <InputText id='firstName' value={user.given_name}/* className={classNames({ 'p-invalid': fieldState.invalid })}  */ />
                              </div>
                              <div className='p-mb-2 p-as-center'>
                                 <label htmlFor="secondName" placeholder='Introduce tu segundo nombre'/*  className={classNames({ 'p-error': errors.name })} */>Segundo Nombre</label>
                                 <br />
                                 <InputText id='secondName' value={user.family_name}/* className={classNames({ 'p-invalid': fieldState.invalid })}  */ />
                              </div>
                              <div className='p-mb-2 p-as-center'>
                                 <label htmlFor="email" placeholder='Introduce tu nickname'/*  className={classNames({ 'p-error': errors.name })} */>Email</label>
                                 <br />
                                 <InputText id='email' value={user.email}  /* className={classNames({ 'p-invalid': fieldState.invalid })}  */ />
                              </div>
                              <div className='p-mb-2 p-as-center'>
                                 <label htmlFor="address" /*  className={classNames({ 'p-error': errors.name })} */>Direccion</label>
                                 <br />
                                 <InputText id='address' placeholder='Introduce tu dirección' /* className={classNames({ 'p-invalid': fieldState.invalid })}  */ />
                              </div>
                              <div className='p-mb-2 p-as-center'>
                                 <label htmlFor="age" /*  className={classNames({ 'p-error': errors.name })} */>Edad</label>
                                 <br />
                                 <InputText id='age' placeholder='Introduce tu edad' /* className={classNames({ 'p-invalid': fieldState.invalid })}  */ />
                              </div>
                              <Button type="submit" label="Guardar" className="p-mt-2" icon="pi pi-check" />
                           </div>
                        </div>
                        <div className='p-col-12 p-md-6'>
                           <div className='p-d-flex p-flex-column account-right'>
                              <div className='p-mb-2 p-as-center '>
                                 <img className='account-image' src={user.picture} alt="" />
                              </div>
                              <div className='p-mb-2 p-as-center'>
                                 {/* <FileUpload mode="basic" name="demo[]" accept="image/*" maxFileSize={1000000} /> */}
                              </div>
                              <div className='p-mb-2 p-as-center '>
                                 <label htmlFor="nick" /*  className={classNames({ 'p-error': errors.name })} */>Nick</label>
                                 <br />
                                 <InputText id='nick' placeholder='Introduce tu nickname' value={user.nickname}/* className={classNames({ 'p-invalid': fieldState.invalid })}  */ />
                              </div>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div >
   )
}

export default MyAccount



