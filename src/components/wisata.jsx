import React from 'react';
import image from '../assets/image';
import Slideshow from '../assets/slideshow';

function Wisata() {
  const images = [image.WBG1, image.WBG2, image.WBG3, image.WBG4];
  return (
    <div classname='overflow-hidden'>
    <div className=''>
    <Slideshow
          images={images}
          className="h-[50vh] sm:h-[60vh] xl:h-[120vh] 2xl:h-[120vh] z-20 filter brightness-50"
        />
    <div className='2xl:mt-[18rem] xl:mt-[5rem] poppins-regular text-white pl-[2rem] lg:pl-[8rem] md:pl-[5rem] flex-row z-30 relative'>
    <div className='flex'>
      <li>
        <h1 className="ml-[100px] mt-[100px] playfair py-2 text-[2rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] relative z-40">Gunung Daik</h1>
        </li>
        
      
      {/* Card 1 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[100px] ml-[160px] mb-[50px] relative" style={{ backgroundImage: `url(${image.pasirguruncard})` }}>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t">
      <div class="text-xl font-medium leading-tight green:text-neutral-50 font-sans text-white poppins-bold ml-[10px] text-bottom ">
      Pasir Gurun</div>
      {/* button /*}
        {/* Konten Card 1 */}
      </div></div></div>

      {/* Card 2 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[100px] ml-[15px] mb-[50px] relative" style={{ backgroundImage: `url(${image.ktmresortcard})` }}>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t">
      <div class="mb-2 text-xl font-medium leading-tight green:text-neutral-50 font-sans text-white poppins-bold ml-[10px]">
      KTM Resort </div>
      {/* button /*}
        {/* Konten Card 2 */}
      </div></div></div>

      {/* Card 3 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[100px] mb-[50px] ml-[15px] mr[10px] relative" style={{ backgroundImage: `url(${image.patungseribucard})` }}>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t">
      <div class="mb-2 text-xl font-medium leading-tight green:text-neutral-50 font-sans text-white poppins-bold ml-[10px]">
      Patung Seribu </div>
      {/* button /*}
        {/* Konten Card 3 */}
      </div></div>
      </div></div></div>


      <div className='justify-center'>
      <div class="flex h-screen bg-white">
      <div class='mt-[160px]'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
        <div className="text-black text-[80px] font-bold poppins-bold text-right ">Natuna</div>
          <p className="text-black text-justify ml-[50px] poppins-regular">Kabupaten Natuna adalah salah satu kabupaten di Provinsi Kepulauan Riau, Indoneisa.
          Natuna merupakan kepulauan paling Utara di Selat Karimatan. Kabupaten Natuna merupakan pulau yang tergabung dalam gugusan Pulau Tujuh, yang berada di lintasan jalur pelayaran internasional dari dan atau ke Hongkong, Taiwan dan Jepang.</p>
        </div>
      {/* Gambar di sebelah kanan */}
      <div className="flex-shrink-0 w-[478px] ml-5 mr-[50px] mt-[130px]">
        <img
          src={image.PulauNatuna}
          alt="Gambar"
          className="w-full h-auto"
        />
    </div>
    </div></div>
    </div></div></div></div>

  )
}

export default Wisata;