'use client';
import React from 'react';
import image from '../assets/image';
import Slideshow from '../assets/slideshow';
import Card from '../assets/card';


function Home() {
    const images = [image.HomeBG1, image.HomeBG2, image.HomeBG3, image.HomeBG4, image.HomeBG5]; 
  return (
    <div className=''>
      <div className=''>
          <Slideshow 
              images={images}
              className="h-[50vh] sm:h-[60vh] xl:h-[120vh] 2xl:h-[120vh] z-20 filter brightness-50" />
          <div className='mt-[18rem] poppins-regular text-white pl-[2rem] lg:pl-[8rem] md:pl-[5rem] flex-row z-30 relative'>
            <h1 className='playfair py-2 text-[2rem] lg:text-[5rem] xl:text-[5rem] 2xl:text-[5rem] relative z-40'>Kepulauan Riau</h1>
            <p className='mt-4 mb-[2rem] mr-[3rem] lg:mr-[20rem] sm:mr-[10rem] text-[1rem] md:text-[1.1rem] lg:text-[1.3rem]'>Kepulauan Riau (disingkat Kepri) adalah sebuah wilayah provinsi yang terletak di Indonesia. Provinsi ini beribu kota di Kota Tanjung Pinang Provinsi ini termasuk provinsi berbentuk kepulauan di Indonesia. Pada pertengahan tahun 2023, penduduk Kepulauan Riau sebanyak 2.150.329 jiwa.
            </p>
        </div>
      </div>
      <div className='mx-auto h-screen bg-white  '>
        <div className='my-[12rem] grid grid-cols-2 gap-4 items-center'>
          <div className="ml-11 text-[5rem] flex items-center">
              <div className='mt-[12rem] m-auto grid grid-cols-2 gap-4'>
                <h1 className='playfair text-black mx-10'>
                  Fun Fact
                </h1>
            </div>
          </div>
          <div style={{ borderTop: "3px solid #000 ", marginLeft: 20, marginRight: 80 }}></div>
        </div>
        <div>
          <Card
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
            backgroundImage="https://placekitten.com/800/400"
            overlayImage="https://placekitten.com/400/800"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;