import React from 'react';

function Pulau() {
  return (
    <div className=''>
    <div className='flex'>
      <li>
        <h1 className='text-7xl font-serif font-bold text-white ml-20 text-left mt-40'>Natuna</h1>
        <button
          type="button"
          className="mt-4 ml-20 inline-block bg-primary bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
      </li>

      {/* Card 1 */}
      <div className="block rounded-lg bg-white p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] green:bg-neutral-700 container flex justify-end container flex justify-end m-10  text-left w-200 h-300 ml-40 mt-40">
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-lime-500">
      ANAMBAS</div>
      <button
          type="button"
          className="mt-20 ml-05 inline-block bg-primary bg-transparent hover:bg-lime-600 text-lime-700 font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
        {/* Konten Card 1 */}
      </div>

      {/* Card 2 */}
      <div className="block rounded-lg bg-white p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] green:bg-neutral-700 container flex justify-end w-1/4 container flex justify-end m-10 text-center mx-0 mt-40">
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-lime-500">
      LINGGA </div>
      <button
          type="button"
          className="mt-20 ml-05 inline-block bg-primary bg-transparent hover:bg-lime-600 text-lime-700 font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
        {/* Konten Card 2 */}
      </div>

      {/* Card 3 */}
      <div className="block rounded-lg bg-white p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] green:bg-neutral-700 container flex justify-end w-1/4 container flex justify-end m-10 text-center mx-10 mt-40">
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-lime-500">
      KARIMUN </div>
      <button
          type="button"
          className="mt-20 ml-05 inline-block bg-primary bg-transparent hover:bg-lime-600 text-lime-700 font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
        {/* Konten Card 3 */}
      </div>

      {/* Card 4 */}
      <div className="block rounded-lg bg-white p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] green:bg-neutral-700 container flex justify-end w-1/4 container flex justify-end m-10 text-center ml-0 mt-40">
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-lime-500">
      BATAM </div>
      <button
          type="button"
          className="mt-20 ml-05 inline-block bg-primary bg-transparent hover:bg-lime-600 text-lime-700 font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
        {/* Konten Card 4 */}
      </div>
      </div>

      <div className='justify-center'>
      <div class="flex h-screen bg-white">
        <div class='m-auto'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
          <p className="text-lg font-bold text-right text-lime-600">Natuna</p>
          <p className="text-lime-700 text-justify ">Kabupaten Natuna adalah salah satu kabupaten di Provinsi Kepulauan Riau, Indoneisa.
          Natuna merupakan kepulauan paling Utara di Selat Karimatan. Kabupaten Natuna merupakan pulau yang tergabung dalam gugusan Pulau Tujuh, yang berada di lintasan jalur pelayaran internasional dari dan atau ke Hongkong, Taiwan dan Jepang.</p>
        {/* Tombol "View" di bawah teks */}
        <div className="mt-11 ml-96">
        <button className="inline-block bg-primary bg-transparent hover:bg-lime-600 text-lime-700 font-semibold hover:text-lime-500 py-2 px-4 border border-lime-700 hover:border-transparent rounded-full">
          More
        </button>
        </div>
        </div>
        

      {/* Gambar di sebelah kanan */}
      <div className="flex-shrink-0 w-1/2 ml-4">
        <img
          src="https://example.com/path/to/image.jpg"
          alt="Gambar"
          className="w-full h-auto"
        />
    </div>
    </div></div>
    </div></div>


    <div className='justify-center'>
    <div class="flex h-screen bg-white">
    <div class='m-auto'>
    <div className="flex items-center justify-between p-8">
        {/* Gambar di sebelah kiri */}
      <div className="flex-shrink-0 w-1/2 mr-4">
        <img
          src="https://example.com/path/to/image.jpg"
          alt="Gambar"
          className="w-full h-auto"
        />
      </div>
      {/* Teks di sebelah kanan */}
      <div className="flex-shrink-0 w-1/2">
        <p className="text-lg font-bold text-left text-lime-600">ANAMBAS</p>
        <p className="text-lime-700 text-justify">Kabupaten Kepulauan Anambas atau gugusan kepulauan Anambas sendiri pada masa pemerintahan kolonial belanda pernah menjadi pusat kewedanaan yakni berpusat di Tarempa.
        Ketika itu, Tarempa adalah pusat pemerintahan di pulau tujuh termasuk wilayah Kabupaten Kepulauan Anambas yang disebut district dan Jemaja wilayahnya disebut Onderdistrict dengan ibu kota Letung.</p>
      {/* Tombol "View" di bawah teks */}
      <div className="mt-4">
      <button className="inline-block bg-primary bg-transparent hover:bg-lime-600 text-lime-700 font-semibold hover:text-lime-500 py-2 px-4 border border-lime-700 hover:border-transparent rounded-full">
          More
      </button>
    </div>
    </div>
    </div></div>
    </div></div>

    <div className='justify-center'>
      <div class="flex h-screen bg-white">
        <div class='m-auto'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
          <p className="text-lg font-bold text-right text-lime-600">Lingga</p>
          <p className="text-lime-700 text-justify ">Lingga merupakan salah satu kabupaten yang ada di provinsi Kepulauan Riau. Kabupaten yang terletak di sebelah selatan Kota Batam ini memiliki 6 kecamatan, 6 kelurahan dan 51 desa.
          Kabupaten Lingga dulunya adalah pusat Kerajaan Riau Lingga</p>
        {/* Tombol "View" di bawah teks */}
        <div className="mt-4">
        <button className="inline-block bg-primary bg-transparent hover:bg-lime-600 text-lime-700 font-semibold hover:text-lime-500 py-2 px-4 border border-lime-700 hover:border-transparent rounded-full">
          More
        </button>
        </div>
        </div>
      {/* Gambar di sebelah kanan */}
      <div className="flex-shrink-0 w-1/2 ml-4">
        <img
          src="https://example.com/path/to/image.jpg"
          alt="Gambar"
          className="w-full h-auto"
        />
    </div>
    </div></div>
    </div></div>

    <div className='justify-center'>
    <div class="flex h-screen bg-white">
    <div class='m-auto'>
    <div className="flex items-center justify-between p-8">
        {/* Gambar di sebelah kiri */}
      <div className="flex-shrink-0 w-1/2 mr-4">
        <img
          src="https://example.com/path/to/image.jpg"
          alt="Gambar"
          className="w-full h-auto"
        />
      </div>
      {/* Teks di sebelah kanan */}
      <div className="flex-shrink-0 w-1/2">
        <p className="text-lg font-bold text-left text-lime-600">Karimun</p>
        <p className="text-lime-700 text-justify">Kabupaten Karimun merupakan salah satu Kabupaten yang dimiliki oleh Provinsi Kepulauan Riau yang terletak di Tanjung Balai Karimun, letak kabupaten ini secara geografis memang sangat mendukung perekonomian masyarakatnya, dimana kabupaten karimun termasuk salah satu daerah yang akan dilewati oleh jalur perdagangan bebas yang secara tidak langsung akan membuka peluang yang sangat besar bagi masyarakatnya untuk  mengambil kesempatan yang ada.
         Indonesia. </p>
      {/* Tombol "View" di bawah teks */}
      <div className="mt-4">
        <button className="inline-block bg-primary bg-transparent hover:bg-lime-600 text-lime-700 font-semibold hover:text-lime-500 py-2 px-4 border border-lime-700 hover:border-transparent rounded-full">
          More
        </button>
        </div>
    </div>
    </div></div>
    </div></div>

    <div className='justify-center'>
      <div class="flex h-screen bg-white">
        <div class='m-auto'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
          <p className="text-lg font-bold text-right text-lime-600">Batam</p>
          <p className="text-lime-700 text-justify ">Kota Batam adalah sebuah kota terbesar di Provinsi Kepulauan Riau, Indonesia. Wilayah Kota Batam terdiri dari Pulau Batam, Pulau Rempang dan Pulau Galang dan pulau-pulau kecil lainnya di kawasan Selat Singapura dan Selat Malaka. Pulau Batam, Rempang, dan Galang terkoneksi oleh Jembatan Barelang. Batam merupakan salah satu kota dengan letak yang sangat strategis. Selain berada di jalur pelayaran internasional, kota ini memiliki jarak yang sangat dekat dan berbatasan langsung dengan Singapura dan Malaysia. 
          </p>
        {/* Tombol "View" di bawah teks */}
        <div className="mt-4">
        <button className="inline-block bg-primary bg-transparent hover:bg-lime-600 text-lime-700 font-semibold hover:text-lime-500 py-2 px-4 border border-lime-700 hover:border-transparent rounded-full">
          More
        </button>
        </div>
        </div>
      {/* Gambar di sebelah kanan */}
      <div className="flex-shrink-0 w-1/2 ml-4">
        <img
          src="https://example.com/path/to/image.jpg"
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