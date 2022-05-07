import React, { useContext, useEffect, useState } from 'react'
import HeaderReport from '../components/HeaderReport'
import paypal from '../assets/img/PayPal.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AppContext from '../context/AppContext'
import logoUnick from '../assets/icons/Unick_logo.png'

const RenderProductList = ({ reportOrder }) => {

   const positionLogo = (position) => {

      let top
      let left
      let positionElemet

      if (position == null) {
         return positionElemet = {
            display: "block"
         }
      }
      if (position == 'center') {
         top = "39%"
         left = "45%"
      }
      if (position == 'left') {
         top = "39%";
         left = "36.5%";
      }
      if (position == 'right') {
         top = "39%"
         left = "40.5%"
      }

      positionElemet = {
         width: "2%",
         height: "auto",
         top: `${top}`,
         left: `${left}`
      }

      return positionElemet
   }

   return (
      <>
         <div className='reportorder-container'>

            <div className='reportorder-header'>

               <img src={logoUnick} alt="logo-paypal" />
               <h1>Orden de Compra </h1>
               <h2>{`Nº ${reportOrder.id}`}</h2>

            </div>

            <div className='reportorder-information'>
               <div>

                  <h2>Detalle Cliente</h2>

                  <h3>Nombre: {`${reportOrder.productList[0].user.firstName} ${reportOrder.productList[0].user.lastName} `}</h3>
                  <h3>Email: {`${reportOrder.productList[0].user.email}`}</h3>
                  <h3>Nick: {`${reportOrder.productList[0].user.nickName}`}</h3>
                  <h3>Número de contacto: {`${reportOrder.productList[0].user.phone}`}</h3>
               </div>

               <div>
                  <h2>Detalle Envío</h2>

                  <h3>Pais: {` ${reportOrder.productList[0].user.country} `}</h3>
                  <h3>Ciudad: {` ${reportOrder.productList[0].user.city} `}</h3>
                  <h3>Dirección: {` ${reportOrder.productList[0].user.address} `}</h3>
                  <h3>Código Postal: {` ${reportOrder.productList[0].user.cp} `}</h3>

               </div>

            </div>

            <h2 className='reportorder-title'>Descripción de productos</h2>

            {
               reportOrder.productList.map((item, index) => (

                  <div className='reportorder-body' key={index}>
                     

                     <h3>{`Items: ${index+1}`}</h3>

                     <div className='reportorder-body-description'>

                        <div className='reportorder-body-description-first'>
                           <h4>{`Nombre Producto: ${item.proyectName}`}</h4>
                           <p>{`Talla: ${item.size}`}</p>
                           <p>{`Color: ${item.color}`}</p>
                           <p>{`Posión Logo: ${item.position}`}</p>
                           <p>{`Tipo de Estampado: ${item.stampingType}`}</p>
                           <p>{`Tipo de Cuello: ${item.neckType}`}</p>
                           <p>{`Precio Unitario: $${item.updatePrice}`}</p>
                        </div>
                        <div className='reportorder-body-description-second'>
                           <h4>Imagenes del Producto</h4>
                           <img className='reportorder-body-description-template' src={item.imagesProduct.template} alt="logo-paypal" />
                           <img className='reportorder-body-description-logo' src={item.imagesProduct.logo} style={positionLogo(item.position)} alt="logo-paypal" />
                        </div>
                     </div>

                  </div>
               ))
            }


            <div className='reportorder-footer'>

               <h2>Descripción de pago</h2>

               <table>

                  <thead>
                     <tr>
                        <th><h3>Descripción</h3></th>
                        <th><h3>Cantidad</h3></th>
                     </tr>
                  </thead>

                  <tbody>
                     <tr>
                        <td><h4>Cantidad de productos</h4></td>
                        <td> <p>{`${reportOrder.countItems}`}</p></td>
                     </tr>
                  </tbody>

                  <tbody>
                     <tr>
                        <td><h4>Total del Pedido</h4></td>
                        <td><p> {`${reportOrder.totalPrice} $`}</p></td>
                     </tr>
                  </tbody>

               </table>

            </div>

         </div >

      </>

   )
}






const ReportOrder = () => {

   const { userToken: { token } } = useContext(AppContext)
   const { idreport } = useParams()
   const [reportOrder, setReportOrder] = useState(null)


   useEffect(async () => {

      const config = {
         headers: {
            Authorization: `Bearer ${token}`
         }
      }
      const getOrder = await axios.post(`http://localhost:3001/api/v1/order/report/${idreport}`, {}, config)

      setReportOrder(getOrder.data)

      console.log(getOrder.data);

   }, [])



   return (
      <>
         <HeaderReport />

         {
            reportOrder

               ? <RenderProductList reportOrder={reportOrder} />
               : <div>Esperando por la respuesta</div>
         }

      </>
   )
}

export default ReportOrder