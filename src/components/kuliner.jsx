import React from 'react';
import image from '../assets/image';

import Carousel from '../assets/carousell';

function kuliner() {

    const images = [image.luti, image.tepung, image.gonggong]; 
  return (
    <div className=''>
        <div className='z-10'>
            <Carousel 
                images={images}
                className="h-[60vh] sm:h-[60vh] xl:h-[120vh] 2xl:h-[120vh] z-20 filter brightness-50" />
        </div>
        <div className='xl:my-[12rem] lg:my-[8rem]'></div>
        <div className='font-serif text-white pl-[2rem] lg:pl-[8rem] md:pl-[5rem] my-5 flex-row z-30 relative'>
            <h1 className='text-9x3 font-serif font-bold py-2 text-[2rem] lg:text-[5rem] xl:text-[5rem] 5xl:text-[5rem] relative z-50'>Kuliner Kepulauan Riau</h1>
            <p className='my-4 mr-[3rem] lg:mr-[20rem] sm:mr-[10rem] text-[1rem] md:text-[1.1rem] lg:text-[1.3rem]'>Kuliner Kepulauan Riau merupakan warisan kaya akan budaya dan tradisi kuliner yang mencerminkan keberagaman suku dan etnis di wilayahnya serta kekayaan alam setempat. Beberapa kuliner khas Kepulauan Riau yang patut dicoba melibatkan hasil laut dan rempah-rempah, menciptakan pengalaman kuliner yang unik dan lezat.</p>
        </div>
     
        <div className="flex h-[200vh] bg-white">
  <div className='my-10'>
    

    {/* Penambahan card */}
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4">
      <img className="w-full" src="gambar-card.jpg" alt="Card gambar" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Judul</div>
        <p className="text-gray-700 text-base">Deskripsi singkat mengenai card ini.</p>
      </div>
    </div>
</div></div>
</div>


  );
}

export default kuliner