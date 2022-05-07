import React from 'react';

const MyProduct = ({ myProduct, handleAddToCart }) => {

   /*Posiciona el logo en el sitio asignado por el usuario */
   const positionLogo = () => {

      let top
      let left
      let positionElemet

      if (myProduct.position == null) {
         return positionElemet = {
            display: "block"
         }
      }
      if (myProduct.position == 'center') {
         top = "25%"
         left = "45%"
      }
      if (myProduct.position == 'left') {
         top = "29%";
         left = "33%";
      }
      if (myProduct.position == 'right') {
         top = "29%"
         left = "58%"
      }

      positionElemet = {
         width: "10%",
         height: "auto",
         top: `${top}`,
         left: `${left}`
      }

      return positionElemet
   }

   return (

      <div className='myProduct-grid-item'>

         <h3>@ {myProduct.user.nickName}</h3>
         < img className='myProduct-item-template' src={myProduct.imagesProduct.template} alt='template' />
         < img className='myProduct-item-logo' style={positionLogo()} src={myProduct.imagesProduct.logo} alt='logo' />

         <h3>{myProduct.proyectName}</h3>
         <p><span>{myProduct.size}</span> </p>
         <p>Precio: $ {myProduct.updatePrice}</p>
         <button className='login-button' onClick={handleAddToCart(myProduct)}>Comprar</button>

      </div >
   );
}

export default MyProduct;

