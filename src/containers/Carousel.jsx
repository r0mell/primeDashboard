import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import images from '../constants/imagesCarousel'

const Carousel = ({ getIndexCarousel }) => {

   const [imageGallery, setimageGallery] = useState(null)

   return (
      <ImageGallery
         items={images}
         thumbnailPosition={'bottom'}
         onClick={getIndexCarousel(imageGallery)}
         showPlayButton={false}
         ref={i => setimageGallery(i)}
      />
   )
}

export default Carousel





