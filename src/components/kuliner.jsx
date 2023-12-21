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
    <div className='flex'>
      <li>
        <h1 className="ml-[100px] mt-[100px] playfair py-2 text-[2rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] relative z-40">Gong Gong</h1>
        <div className='ml-[100px]'>
          <ButtonScrollComponent destinationId="penjelasan-gonggong" />
        </div>
      </li>
      

      
      {/* Card 1 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[100px] ml-[160px] mb-[50px] relative" style={{ backgroundImage: `url(${image.card1})` }}>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t">
      <div class="mb-2 text-xl font-medium leading-tight green:text-neutral-50 font-sans text-white poppins-bold ml-[10px] text-bottom ">
      LUTI GENDANG</div>
      <ButtonScrollComponent destinationId="penjelasan-lutigendang" />
        {/* Konten Card 1 */}
      </div></div></div>

      {/* Card 2 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[100px] ml-[15px] mb-[50px] relative" style={{ backgroundImage: `url(${image.card2})` }}>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t">
      <div class="mb-2 text-xl font-medium leading-tight green:text-neutral-50 font-sans text-white poppins-bold ml-[10px]">
      TEPUNG GOMAK </div>
      <ButtonScrollComponent destinationId="penjelasan-tepunggomak" />
        {/* Konten Card 2 */}
      </div></div></div>

      {/* Card 3 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[100px] mb-[50px] ml-[15px] mr[10px] relative" style={{ backgroundImage: `url(${image.card3})` }}>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t">
      <div class="mb-2 text-xl font-medium leading-tight green:text-neutral-50 font-sans text-white poppins-bold ml-[10px]">
      Gong Gong </div>
      <ButtonScrollComponent destinationId="penjelasan-gonggong" />
        {/* Konten Card 3 */}
      </div></div>
      </div></div></div></div>



      {/* Penjelasan 1 */}
      <div className='justify-center'>
      <div class="flex h-screen bg-white">
      <div class='mt-[120px]'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
        <div className="text-black text-[75px] ml-[50px] font-bold poppins-bold text-right ">Gong Gong</div>
          <p className="text-black text-justify ml-[50px] poppins-regular">Gonggong adalah salah satu kuliner khas Kepulauan Riau, khususnya di Ibu Kota Kepri yaitu Tanjung Pinang yang juga memiliki gedung berbentuk Gong-gong sebagai ciri khas Kepulauan Riau. Hidangan ini juga sangat lezat dan bergizi dimana Gonggong mengandung protein, vitamin, dan mineral yang baik buat Kesehatan kita. </p>
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
    <div class="flex h-screen bg-white">
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
        <p className="text-black text-justify mr-[50px] poppins-regular">Luti Gendang adalah salah satu kuliner khas Kepulauan Riau, Khususnya di Kota Batam.   Luti Gendang ini merupakan hidangan yang lezat dan bergizi, dimana hidangan ini mengandung Protein, Karbohidrat, dan lemak yang baik untuk Kesehatan. </p>
    </div>
    </div></div>
    </div></div>

    {/* Penjelasan 3 */}
    <div className='justify-center'>
      <div class="flex h-screen bg-white">
        <div class='mt-[150px]'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
        <div className="text-black text-[75px] ml-[50px] font-bold poppins-bold text-right">Tepung Gomak</div>
          <p className="text-black text-justify ml-[50px] poppins-regular ">Tepung Gomak adalah salah satu kuliner khas Kepulauan Riau, yang biasa dapat di temui di berbagai warung ataupun pusat jajanan kuliner. Kuliner ini juga cocok untuk dijadikan camilan yang dapat di kombinasikan dengan meminum teh hangat yang dapat membuat lidah merasa lezat.
 </p>
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
    </div>


  );
}

export default Kuliner