import React from 'react';
import image from '../assets/image';
import Slideshow from '../assets/slideshow';
import ButtonScrollComponent from '../assets/ButtonScrollComponent';


function Kuliner() {
  const images = [image.bgGG, image.bgLG, image.bgTG];
return (
    <div classname='overflow-hidden'>
    <div className=''>
    <Slideshow
          images={images}
          className="h-[50vh] sm:h-[60vh] xl:h-[120vh] 2xl:h-[120vh] z-20 filter brightness-50"
        />
    <div className='2xl:mt-[18rem] xl:mt-[5rem] poppins-regular text-white pl-[2rem] lg:pl-[8rem] md:pl-[5rem] flex-row z-30 relative'>
    <div className=''>
      <li>
        <h1 className="ml-[40px] mt-[30px] poppins-bold py-2 text-[2rem] lg:text-[5rem] xl:text-[5rem] 2xl:text-[5rem] relative z-40">Kuliner Kepri</h1>
        <p className='mt-4 ml-[40px] mb-[2rem] mr-[3rem] lg:mr-[20rem] sm:mr-[10rem] text-[4rem] md:text-[1.1rem] lg:text-[1.6rem]'>
        Kuliner Kepulauan Riau merupakan warisan kaya akan budaya dan tradisi kuliner yang mencerminkan keberagaman suku dan etnis di wilayahnya serta kekayaan alam setempat. Beberapa kuliner khas Kepulauan Riau yang patut dicoba melibatkan hasil laut dan rempah-rempah, menciptakan pengalaman kuliner yang unik dan lezat.
          </p>
        <div className='ml-[40px]'>
          <ButtonScrollComponent destinationId="penjelasan-gonggong" />
        </div>
      </li>
      


      {/* Penjelasan 1 */}
      <div className='justify-center'>
      <div class="flex h-screen bg-white mt-[280px] ml-[-100px]">
      <div class='mt-[120px]'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
        <div className="text-black text-[75px] ml-[50px] font-bold poppins-bold text-right ">Gong Gong</div>
          <p className="text-black text-xl text-justify ml-[50px] poppins-regular">Gonggong adalah sebutan untuk siput laut yang memiliki cangkang keras dan dagingnya yang amat lembut. Biasanya    Gonggong    ditemukan di daerah perairang dangkal, seperti di muara sungai atau pun tambak. Dalam pengolahan Gonggong ini dapat dihidangkan dengan dua macam metode diantaranya mulai dari di rebus dan bakar hingga oseng. Tetapi Gonggong banyak ditemukan dalam penyajian di rebus. </p>
        </div>
        <section id="penjelasan-gonggong">
      {/* Gambar di sebelah kanan */}
      <div className="flex-shrink-0 w-[478px] ml-5 mr-[50px] mt-[130px]">
        <img
          src={image.GG}
          alt="Gambar"
          className="w-full h-auto"
        />
    </div>
    </section>
    </div></div>
    </div></div>

    {/* Penjelasan 2 */}
    <div className='justify-center'>
    <div class="flex h-screen bg-white ml-[-100px]">
    <div class='mt-[150px]'>
    <div className="flex items-center justify-between p-8">
    <section id="penjelasan-lutigendang">
        {/* Gambar di sebelah kiri */}
      <div className="flex-shrink-0 w-[478px] mr-4 ml-[50px] mt-[80px]">
        <img
          src={image.LG}
          alt="Gambar"
          className="w-full h-auto"
        />
      </div>
      </section>
      {/* Teks di sebelah kanan */}
      <div className="flex-shrink-0 w-1/2">
      <div className="text-black text-[65px] font-bold poppins-bold mr-[50px]">Luti Gendang</div>
        <p className="text-black text-xl text-justify mr-[50px] poppins-regular">Luti Gendang ini adalah roti yang berisikan ikan yang memiliki tekstur kulit luar yang renyah dan bagian dalam yang lembut. Dalam penyajiannya Luti Gendang ini dapat disajikan dengan mencampurkan dengan kuah kacang ataupun sambal kecap. Sehingga hidangan ini sangat cocok untuk dijadikan sarapan ataupun camilan. </p>
    </div>
    </div></div>
    </div></div>

    {/* Penjelasan 3 */}
    <div className='justify-center'>
      <div class="flex h-screen bg-white ml-[-100px]">
        <div class='mt-[150px]'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
        <div className="text-black text-[75px] ml-[50px] font-bold poppins-bold text-right">Tepung Gomak</div>
          <p className="text-black text-xl text-justify ml-[50px] poppins-regular ">Tepung gomak ini merupakan kue yang meimiliki isi berupa serundeng kelapa yang memiliki tekstur yang kenyal dan lembut juga disandingkan dengan rasanya yang manis. Biasanya tepung gomak ini disajikan dengan kuah santan yang kental dan gurih, serta seafood seperti ikan, udang, dan cumi cumi.</p>
        </div>
        <section id="penjelasan-tepunggomak">
      {/* Gambar di sebelah kanan */}
      <div className="flex-shrink-0 w-[478px] ml-4 mr-[50px]">
        <img
          src={image.TG}
          alt="Gambar"
          className="w-full h-auto"
        />
    </div>
    </section>
    </div></div>
    </div></div>
    </div></div>
    </div></div>


  );
}

export default Kuliner