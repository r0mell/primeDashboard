<div className="p-d-flex p-jc-center">
   <div className="account-card">
      <h5 className="p-text-center">Register</h5>
      <form /* onSubmit={handleSubmit(onSubmit)} */ className="p-fluid">
         <div className="p-field">
            <span className="p-float-label">
               {/* <Controller name="name" control={control} rules={{ required: 'Name is required.' }} render={({ field, fieldState }) => (
               <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
            )} /> */}
               <InputText autoFocus /* className={classNames({ 'p-invalid': fieldState.invalid })}  */ />

               <label htmlFor="name"/*  className={classNames({ 'p-error': errors.name })} */>Name*</label>
            </span>
            {/*  {getFormErrorMessage('name')} */}
         </div>
         <div className="p-field">
            <span className="p-float-label p-input-icon-right">
               <i className="pi pi-envelope" />
               {/* <Controller name="email" control={control}
               rules={{ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' } }}
               render={({ field, fieldState }) => (
                  <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
               )} /> */}
               <InputText />
               <label htmlFor="email" /* className={classNames({ 'p-error': !!errors.email })} */>Email*</label>
            </span>
            {/* {getFormErrorMessage('email')} */}
         </div>
         <div className="p-field">
            <span className="p-float-label">
               {/*     <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
               <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} header={passwordHeader} footer={passwordFooter} />
            )} /> */}
               <label htmlFor="password" /* className={classNames({ 'p-error': errors.password })} */>Password*</label>
            </span>
            {/*  {getFormErrorMessage('password')} */}
         </div>
         <div className="p-field">
            <span className="p-float-label">
               {/*  <Controller name="date" control={control} render={({ field }) => (
               <Calendar id={field.name} value={field.value} onChange={(e) => field.onChange(e.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
            )} /> */}
               <label htmlFor="date">Birthday</label>
            </span>
         </div>
         <div className="p-field">
            <span className="p-float-label">
               {/*  <Controller name="country" control={control} render={({ field }) => (
               <Dropdown id={field.name} value={field.value} onChange={(e) => field.onChange(e.value)} options={countries} optionLabel="name" />
            )} /> */}
               <label htmlFor="country">Country</label>
            </span>
         </div>
         <div className="p-field-checkbox">
            {/*    <Controller name="accept" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
            <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} className={classNames({ 'p-invalid': fieldState.invalid })} />
         )} /> */}
            <label htmlFor="accept" /* className={classNames({ 'p-error': errors.accept })} */>I agree to the terms and conditions*</label>
         </div>

         <Button type="submit" label="Submit" className="p-mt-2" />
      </form>
   </div>
</div>