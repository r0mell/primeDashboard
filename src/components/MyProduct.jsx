import React from 'react';

const MyProduct = ({ myProduct, handleAddToCart }) => {

   return (

      <div className='myProduct-grid-item'>

         < img src={myProduct.product.images[1]} alt='prenda de vestir' />
         <h3>@ {myProduct.user.nickName}</h3>
         <p><span>{myProduct.size}</span> </p>
         <p>Precio: $ 45</p>
         <button onClick={handleAddToCart(myProduct)}>Comprar</button>

      </div >
   );
}

export default MyProduct;

