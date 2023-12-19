import React from 'react';
import image from '../assets/image';
import Slideshow from '../assets/slideshow';

function Wisata() {
  const images = [image.HomeBG1, image.HomeBG2, image.HomeBG3, image.HomeBG4, image.HomeBG5];

  return (
    <div className=''>
      <div className=''>
        <Slideshow
          images={images}
          className="h-[50vh] sm:h-[60vh] xl:h-[120vh] 2xl:h-[120vh] z-20 filter brightness-50"
        />
        <h1 className='text-center text-4xl font-extrabold text-white'>
            Silahkan yang bagiannya wisata, mulai coding di file ini :D <br/>
            HAPPY CODING!
        </h1>
      </div>
    </div>
  )
}

export default Wisata