'use client';
import React from 'react';
import image from '../assets/image';
import Carousel from '../assets/carousell';



function Home() {
    const images = [image.Cat, image.Cat2, image.Cat3]; 
  return (
    <div className=''>
        <div className='z-10'>
            <Carousel 
                images={images}
                className="h-[50vh] sm:h-[60vh] xl:h-[120vh] 2xl:h-[120vh] z-20 filter brightness-50" />
        </div>
        
        <div className='xl:my-[14rem] lg:my-[12rem]'></div>
        <div className='text-white pl-[2rem] lg:pl-[8rem] md:pl-[5rem] my-5 flex-row z-30 relative'>
            <h1 className='py-2 text-[2rem] lg:text-[5rem] xl:text-[5rem] 2xl:text-[5rem] relative z-40'>Kepulauan Riau</h1>
            <p className='my-4 mr-[3rem] lg:mr-[20rem] sm:mr-[10rem] text-[1rem] md:text-[1.1rem] lg:text-[1.3rem]'>Kepulauan Riau (disingkat Kepri) adalah sebuah wilayah provinsi yang terletak di Indonesia. Provinsi ini beribu kota di Kota Tanjung Pinang Provinsi ini termasuk provinsi berbentuk kepulauan di Indonesia. Pada pertengahan tahun 2023, penduduk Kepulauan Riau sebanyak 2.150.329 jiwa.
            </p>
        </div>

        <div className="flex h-screen bg-white">
            <div className='my-10'>

            </div>
        </div>

      {/* <img src={image.Cat} /> */}
      <h1 className='text-center font-extrabold text-white'>Hello world</h1>
      <h1 className='text-center font-extrabold text-white'>Hello world</h1>
    </div>
  );
}

export default Home;