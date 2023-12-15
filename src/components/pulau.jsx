import React from 'react';
import image from '../assets/image';



function Pulau() {
  return (
    <div className=''>
    <div className='z-40'>
    <div className="h-screen flex items-center justify-center absolute inset-0 " style={{ backgroundImage: `url(${image.Natuna})` }}>
    <div className='flex'>
      <li>
        <div className="text-white text-[80px] font-bold font-['Playfair Display'] ml-[230px] mt-[350px] z-auto">Natuna</div>
        <button
          type="button"
          className="mt-[0px] ml-[230px] inline-block bg-primary bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
      </li>
      </div>

      {/* Card 1 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[550px] ml-[160px] mb-[50px] mr-18" src={image.Anambas}> 
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-white ">
      ANAMBAS</div>
      <button
          type="button"
          className="mt-20 ml-05 inline-block bg-primary bg-transparent hover:bg-lime-600 text-white font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
        {/* Konten Card 1 */}
      </div></div>

      {/* Card 2 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[550px] ml-[35px] mb-[50px] mr-18 " src={image.Lingga}>
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-white">
      LINGGA </div>
      <button
          type="button"
          className="mt-20 ml-05 inline-block bg-primary bg-transparent hover:bg-lime-600 text-white font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
        {/* Konten Card 2 */}
      </div></div>

      {/* Card 3 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[550px] mb-[50px] mr-2 " src={image.Karimun}>
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-white">
      KARIMUN </div>
      <button
          type="button"
          className="mt-20 ml-05 inline-block bg-primary bg-transparent hover:bg-lime-600 text-white font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
        {/* Konten Card 3 */}
      </div></div>

      {/* Card 4 */}
      <div className="w-[190px] h-[250px] rounded-2xl mt-[550px] mb-[50px] " src={image.Batam}>
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-white">
      BATAM </div>
      <button
          type="button"
          className="mt-20 ml-05 inline-block bg-primary bg-transparent hover:bg-lime-600 text-white font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
        {/* Konten Card 4 */}
      </div></div></div>


      
      <div className='justify-center'>
      <div class="flex h-screen bg-white">
      <div class='mt-[460px]'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
        <div className="text-black text-[80px] font-bold font-['Playfair Display'] text-right">Natuna</div>
          <p className="text-black text-justify ml-[50px] ">Kabupaten Natuna adalah salah satu kabupaten di Provinsi Kepulauan Riau, Indoneisa.
          Natuna merupakan kepulauan paling Utara di Selat Karimatan. Kabupaten Natuna merupakan pulau yang tergabung dalam gugusan Pulau Tujuh, yang berada di lintasan jalur pelayaran internasional dari dan atau ke Hongkong, Taiwan dan Jepang.</p>
        </div>
      {/* Gambar di sebelah kanan */}
      <div className="flex-shrink-0 w-[478px] ml-5 mr-[50px]">
        <img
          src={image.PulauNatuna}
          alt="Gambar"
          className="w-full h-auto"
        />
    </div>
    </div></div>
    </div></div>


    <div className='justify-center'>
    <div class="flex h-screen bg-white">
    <div class='mt-[380px]'>
    <div className="flex items-center justify-between p-8">
        {/* Gambar di sebelah kiri */}
      <div className="flex-shrink-0 w-[478px] mr-4 ml-[50px]">
        <img
          src={image.PulauAnambas}
          alt="Gambar"
          className="w-full h-auto"
        />
      </div>
      {/* Teks di sebelah kanan */}
      <div className="flex-shrink-0 w-1/2">
      <div className="text-black text-[80px] font-bold font-['Playfair Display']">Anambas</div>
        <p className="text-black text-justify mr-[50px]">Kabupaten Kepulauan Anambas atau gugusan kepulauan Anambas sendiri pada masa pemerintahan kolonial belanda pernah menjadi pusat kewedanaan yakni berpusat di Tarempa.
        Ketika itu, Tarempa adalah pusat pemerintahan di pulau tujuh termasuk wilayah Kabupaten Kepulauan Anambas yang disebut district dan Jemaja wilayahnya disebut Onderdistrict dengan ibu kota Letung.</p>
    </div>
    </div></div>
    </div></div>

    <div className='justify-center'>
      <div class="flex h-screen bg-white">
        <div class='mt-[320px]'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
        <div className="text-black text-[80px] font-bold font-['Playfair Display'] text-right">Lingga</div>
          <p className="text-black text-justify ml-[50px] ">Lingga merupakan salah satu kabupaten yang ada di provinsi Kepulauan Riau. Kabupaten yang terletak di sebelah selatan Kota Batam ini memiliki 6 kecamatan, 6 kelurahan dan 51 desa.
          Kabupaten Lingga dulunya adalah pusat Kerajaan Riau Lingga</p>
        </div>
      {/* Gambar di sebelah kanan */}
      <div className="flex-shrink-0 w-[478px] ml-4 mr-[50px]">
        <img
          src={image.PulauLingga}
          alt="Gambar"
          className="w-full h-auto"
        />
    </div>
    </div></div>
    </div></div>

    <div className='justify-center'>
    <div class="flex h-screen bg-white">
    <div class='mt-[250px]'>
    <div className="flex items-center justify-between p-8">
        {/* Gambar di sebelah kiri */}
      <div className="flex-shrink-0 w-[478px] mr-4 ml-[50px]">
        <img
          src={image.PulauKarimun}
          alt="Gambar"
          className="w-full h-auto"
        />
      </div>
      {/* Teks di sebelah kanan */}
      <div className="flex-shrink-0 w-1/2">
      <div className="text-black text-[80px] font-bold font-['Playfair Display']">Karimun</div>
        <p className="text-black text-justify mr-[50px]">Kabupaten Karimun merupakan salah satu Kabupaten yang dimiliki oleh Provinsi Kepulauan Riau yang terletak di Tanjung Balai Karimun, letak kabupaten ini secara geografis memang sangat mendukung perekonomian masyarakatnya, dimana kabupaten karimun termasuk salah satu daerah yang akan dilewati oleh jalur perdagangan bebas yang secara tidak langsung akan membuka peluang yang sangat besar bagi masyarakatnya untuk  mengambil kesempatan yang ada.
         Indonesia. </p>
    </div>
    </div></div>
    </div></div>

    <div className='justify-center'>
      <div class="flex h-screen bg-white">
        <div class='mt-[120px]'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
        <div className="text-black text-[80px] font-bold font-['Playfair Display'] text-right">Batam</div>
          <p className="text-black text-justify ml-[50px]">Kota Batam adalah sebuah kota terbesar di Provinsi Kepulauan Riau, Indonesia. Wilayah Kota Batam terdiri dari Pulau Batam, Pulau Rempang dan Pulau Galang dan pulau-pulau kecil lainnya di kawasan Selat Singapura dan Selat Malaka. Pulau Batam, Rempang, dan Galang terkoneksi oleh Jembatan Barelang. Batam merupakan salah satu kota dengan letak yang sangat strategis. Selain berada di jalur pelayaran internasional, kota ini memiliki jarak yang sangat dekat dan berbatasan langsung dengan Singapura dan Malaysia. 
          </p>
        </div>
      {/* Gambar di sebelah kanan */}
      <div className="flex-shrink-0 w-[478px] ml-4 mr-[50px]">
        <img
          src={image.PulauBatam}
          alt="Gambar"
          className="w-full h-auto"
        />

    </div>
    </div></div>
    </div></div>
    </div>
    

    
  );
}
export default Pulau;