<form >
<div className='p-grid'>
   <div className='p-col-12 p-md-6'>
      <div className='p-d-flex p-flex-column p-ai-center '>

         <div className='p-mb-2 p-as-center '>
            <label htmlFor="firstName" placeholder='Introduce tu nombre'/*  className={classNames({ 'p-error': errors.name })} */>Primer Nombre</label>
            <br />
            {/* <InputText id='firstName' value={user.given_name} className={classNames({ 'p-invalid': fieldState.invalid })}   /> */}
         </div>

         <div className='p-mb-2 p-as-center'>
            <label htmlFor="secondName" placeholder='Introduce tu segundo nombre'/*  className={classNames({ 'p-error': errors.name })} */>Segundo Nombre</label>
            <br />
            {/* <InputText id='secondName' value={user.family_name} className={classNames({ 'p-invalid': fieldState.invalid })}   /> */}
         </div>

         <div className='p-mb-2 p-as-center'>
            <label htmlFor="email" placeholder='Introduce tu nickname'/*  className={classNames({ 'p-error': errors.name })} */>Email</label>
            <br />
            {/* /*  {/*  <InputText id='email' value={user.email} }  className={classNames({ 'p-invalid': fieldState.invalid })}   />  */}
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
         
         <Button type="submit" label="Guardar" className="p-mt-2" icon="pi pi-check" onClick={handleVerifly()} />
      </div>
   </div>
   <div className='p-col-12 p-md-6'>
      <div className='p-d-flex p-flex-column account-right'>
         <div className='p-mb-2 p-as-center '>
            {/*  <img className='account-image' src={user.picture} alt="" /> */}
         </div>
         <div className='p-mb-2 p-as-center'>
            {/* <FileUpload mode="basic" name="demo[]" accept="image/*" maxFileSize={1000000} /> */}
         </div>
         <div className='p-mb-2 p-as-center '>
            <label htmlFor="nick" /*  className={classNames({ 'p-error': errors.name })} */>Nick</label>
            <br />
            {/* <InputText id='nick' placeholder='Introduce tu nickname' value={user.nickname}/* className={classNames({ 'p-invalid': fieldState.invalid })} / /> */}
         </div>
      </div>
   </div>
</div>
</form>







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


               <Formik
                  initialValues={{
                     family_name: '',
                     nickName: ''
                  }}
                  validate={(valores) => {
                     let errors = {}

                     //validacion nombre
                     if (!valores.family_name) {
                        errors.family_name = 'porfa ingresa un nombre'
                     } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.family_name)) {
                        errors.family_name = 'El nombre solo puede contener espacios y letras'
                     }

                     //validacion correo
                     if (!valores.nickName) {
                        errors.nickName = 'porfa ingresa un correo'
                     } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.nickName)) {
                        errors.nickName = 'El nombre solo puede contener espacios y letras'
                     }


                     return errors
                  }}

                  onSubmit={(valores) => {
                     console.log(valores);
                     console.log('formulario enviado');


                  }}
               >

                  {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (

                     <form onSubmit={handleSubmit}>

                        <div>
                           <label htmlFor="family_name" >family Nombre</label>
                           <InputText
                              id='family_name'
                              placeholder='Joe'
                              value={values.family_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           {touched.family_name && errors.family_name && <p>{errors.family_name}</p>}
                        </div>

                        <div>
                           <label htmlFor="nickName" >Nick Name</label>
                           <InputText
                              id='nickName'
                              placeholder='nickJoe'
                              value={values.nickName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           {touched.nickName && errors.nickName && <p>{errors.nickName}</p>}
                        </div>

                        <div>
                           <Button type='submit'>Enviar</Button>
                        </div>


                     </form>
                  )}

               </Formik>


            </div>
         </div>
      </div>
   </div >
)


export default MyAccount









