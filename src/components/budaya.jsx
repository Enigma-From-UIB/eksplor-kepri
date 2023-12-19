import React from 'react'
import image from '../assets/image';
import Slideshow from '../assets/slideshow';

function Budaya() {
  const images = [image.Belahbubung, image.Gurindam, image.Sirih, image.Telukbelanga];
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
        <h1 className="ml-[100px] mt-[100px] playfair py-2 text-[2rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] relative z-40">Belah Bubung</h1>
        <button
          type="button"
          className="mt-[0px] ml-[150px] inline-block bg-primary bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full playfair py-2 text-[2rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] relative z-40"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
      </li>
      

      
      {/* Card 1 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[100px] ml-[160px] mb-[50px] relative" style={{ backgroundImage: `url(${image.card1})` }}>
      <div class="text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-white poppins-bold ml-[10px] text-bottom ">
      TARI MAKAN SIRIH</div>
      <button
          type="button"
          className="mt-05 ml-05 inline-block bg-primary bg-transparent hover:bg-lime-600 text-white font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm "
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
        {/* Konten Card 1 */}
      </div></div>

      {/* Card 2 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[100px] ml-[15px] mb-[50px] relative" style={{ backgroundImage: `url(${image.card2})` }}>
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-white poppins-bold ml-[10px]">
      TELUK BELANGA </div>
      <button
          type="button"
          className="mt-05 ml-05 inline-block bg-primary bg-transparent hover:bg-lime-600 text-white font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
        {/* Konten Card 2 */}
      </div></div>

      {/* Card 3 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[100px] mb-[50px] ml-[15px] mr[10px] relative" style={{ backgroundImage: `url(${image.card3})` }}>
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-white poppins-bold ml-[10px]">
      GURINDAM 12 </div>
      <button
          type="button"
          className="mt-05 ml-05 inline-block bg-primary bg-transparent hover:bg-lime-600 text-white font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
        {/* Konten Card 3 */}
      </div></div>
      </div></div></div>



      {/* Penjelasan 1 */}
      <div className='justify-center'>
      <div class="flex h-screen bg-white">
      <div class='mt-[120px]'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
        <div className="text-black text-[75px] ml-[50px] font-bold poppins-bold text-right ">Belah Bubung</div>
          <p className="text-black text-justify ml-[50px] poppins-regular">Rumah Belah Bubung adalah rumah adat dari kepulauan Riau yang berada di Indonesia. Rumah Belah Bubung juga dikenal dengan nama Rumah Rabung atau Rumah Bubung Melayu. Konon, nama rumah ini diberikan oleh orang-orang asing yang datang ke Indonesia seperti Cina dan Belanda. Rumah Belah Bubung memiliki model rumah yang sama dengan rumah panggung. Rumah ini memiliki tinggi 2 meter dari tanah dan ditopang oleh beberapa tiang penyangga. Rumah ini memiliki atap yang berbentuk seperti pelana kuda. </p>
        </div>
      {/* Gambar di sebelah kanan */}
      <div className="flex-shrink-0 w-[478px] ml-5 mr-[50px] mt-[130px]">
        <img
          src={image.penjelasanbb}
          alt="Gambar"
          className="w-full h-auto"
        />
    </div>
    </div></div>
    </div></div>

    {/* Penjelasan 2 */}
    <div className='justify-center'>
    <div class="flex h-screen bg-white">
    <div class='mt-[150px]'>
    <div className="flex items-center justify-between p-8">
        {/* Gambar di sebelah kiri */}
      <div className="flex-shrink-0 w-[478px] mr-4 ml-[50px] mt-[80px]">
        <img
          src={image.penjelasantms}
          alt="Gambar"
          className="w-full h-auto"
        />
      </div>
      {/* Teks di sebelah kanan */}
      <div className="flex-shrink-0 w-1/2">
      <div className="text-black text-[65px] font-bold poppins-bold mr-[50px]">Tari Makan Sirih</div>
        <p className="text-black text-justify mr-[50px] poppins-regular">Tari makan sirih (persembahan), adalah salah satu tarian tradisional yang umumnya dipentaskan untuk menyambut dan dipersembahkan untuk menghormati tamu negara / tamu agung yang datang. Makan Sirih pada umumnya ditarikan oleh kalangan remaja. Tari persembahan dipentaskan dengan iringan musik Melayu yang bersumber dari perpaduan instrumen suara marwas, biola atau fill, gendang, gambus, dan akordion. Suara akordian merupakan unsur yang penting dalam musik Melayu, mengingat suara tersebut yang menjadi kekhasan musik Melayu.</p>
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
        <div className="text-black text-[75px] ml-[50px] font-bold poppins-bold text-right">Teluk Belanga</div>
          <p className="text-black text-justify ml-[50px] poppins-regular ">Berasal dari Sumatera, pakaian adat ini merupakan sebuah kekayaan lokal yang ditetapkan oleh pemerintah Kepulauan Riau sebagai ikon pakaian adat dari daerah ini. Hal ini berdasarkan pada keunikan dan nilai-nilai kebudayaan yang dimiliki oleh pakaian ini sehingga merupakan nilai tambah tersendiri sebagai ciri khas kekayaan budaya Riau. </p>
        </div>
      {/* Gambar di sebelah kanan */}
      <div className="flex-shrink-0 w-[478px] ml-4 mr-[50px]">
        <img
          src={image.penjelasantb}
          alt="Gambar"
          className="w-full h-auto"
        />
    </div>
    </div></div>
    </div></div>

    {/* Penjelasan 4 */}
    <div className='justify-center'>
    <div class="flex h-screen bg-white">
    <div class='mt-[60px]'>
    <div className="flex items-center justify-between p-8">
        {/* Gambar di sebelah kiri */}
      <div className="flex-shrink-0 w-[478px] mr-4 ml-[50px]">
        <img
          src={image.penjelasang12}
          alt="Gambar"
          className="w-full h-auto"
        />
      </div>
      {/* Teks di sebelah kanan */}
      <div className="flex-shrink-0 w-1/2">
      <div className="text-black text-[80px] font-bold poppins-bold">Gurindam 12</div>
        <p className="text-black text-justify mr-[50px] poppins-regular">Gurindam Dua Belas adalah suatu karya sastra yang dibuat oleh Raja Ali Haji, seorang sastrawan dari Kepulauan Riau. Karya sastra ini berbahasa Melayu Kuno dengan ciri khas banyaknya istilah tasawuf, kata-kata kiasan dan metafora. Karya ini terdiri dari dua belas pasal dan dikategorikan sebagai “Syi’r Al-Irsyadi” atau puisi didaktik karena berisikan nasehat atau petunjuk hidup, antara lain tentang ibadah, kewajiban raja, kewajiban anak terhadap orang tua, tugas orang tua kepada anak, budi pekerti dan hidup bermasyarakat. </p>
    </div>
    </div></div>
    </div></div>
    </div>

  )
}

export default Budaya;