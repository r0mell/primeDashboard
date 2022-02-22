import React from 'react';

const MyProduct = ({ myProduct, handleAddToCart }) => {
   return (

      <div className='myProduct-grid-item'>

         <img src={myProduct.images[1]} alt={myProduct.proyectName} />
         <h3>@ {myProduct.createdBy}</h3>
         <p><span>{myProduct.size}</span> </p>
         <p>Precio: $ {myProduct.price}</p>
         <button onClick={handleAddToCart(myProduct)}>Comprar</button>
      </div>
   );
}

export default MyProduct;

