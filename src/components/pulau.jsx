import React from 'react';
import image from '../assets/image';
import ButtonScrollComponent from '../assets/ButtonScrollComponent';


function Pulau() {
  return (
    <div classname='overflow-hidden'>
    <div className=''>
    <div className="h-screen flex items-center justify-center absolute inset-0 sm:h-[60vh] xl:h-[120vh] 2xl:h-[120vh] " style={{ backgroundImage: `url(${image.Natuna})` }}>
    <div className='2xl:mt-[18rem] xl:mt-[5rem] poppins-regular text-white pl-[2rem] lg:pl-[8rem] md:pl-[5rem] flex-row z-30 relative'>
    <div className='flex'>
      <li>
        <h1 className="ml-[150px] playfair py-2 text-[2rem] lg:text-[7rem] xl:text-[7rem] 2xl:text-[7rem] relative z-40">Natuna</h1>
        <div className='ml-[150px]'>
          <ButtonScrollComponent destinationId="penjelasan-section" />
        </div>
      </li>
      </div></div>

      
      {/* Card 1 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[260px] ml-[160px] mb-[50px] relative" style={{ backgroundImage: `url(${image.Anambas})` }}>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t">
      <div class="mb-2 text-xl font-medium leading-tight green:text-neutral-50 font-sans text-white poppins-bold ml-[10px] text-bottom ">
      ANAMBAS</div>
      <ButtonScrollComponent destinationId="penjelasan-anambas" />
        {/* Konten Card 1 */}
      </div></div></div>

      {/* Card 2 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[260px] ml-[15px] mb-[50px] relative" style={{ backgroundImage: `url(${image.Lingga})` }}>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t">
      <div class="mb-2 text-xl font-medium leading-tight green:text-neutral-50 font-sans text-white poppins-bold ml-[10px]">
      LINGGA </div>
      <ButtonScrollComponent destinationId="penjelasan-lingga" />
        {/* Konten Card 2 */}
      </div></div></div>

      {/* Card 3 */}
      <div classname='flex'>
      <div className="w-[190px] h-[250px] rounded-2xl mt-[260px] mb-[50px] ml-[15px] relative" style={{ backgroundImage: `url(${image.Karimun})` }}>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t">
      <div class="mb-2 text-xl font-medium leading-tight green:text-neutral-50 font-sans text-white poppins-bold ml-[10px]">
      KARIMUN </div>
      <ButtonScrollComponent destinationId="penjelasan-karimun" />
        {/* Konten Card 3 */}
      </div></div></div>

      {/* Card 4 */}
      <div className="w-[190px] h-[250px] rounded-2xl mt-[260px] mb-[50px] ml-[15px] mr-[10px] relative" style={{ backgroundImage: `url(${image.Batam})` }}>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t">
      <div class="mb-2 text-xl font-medium leading-tight green:text-neutral-50 font-sans text-white poppins-bold ml-[10px]">
      BATAM </div>
      <ButtonScrollComponent destinationId="penjelasan-batam" />
        {/* Konten Card 4 */}
      </div></div></div></div>


      
      <div className='justify-center'>
      <div class="flex h-screen bg-white">
      <div class='mt-[360px]'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
        <div className="text-black text-[80px] font-bold poppins-bold text-right ">Natuna</div>
          <p className="text-black text-justify ml-[50px] poppins-regular">Kabupaten Natuna adalah salah satu kabupaten di Provinsi Kepulauan Riau, Indoneisa.
          Natuna merupakan kepulauan paling Utara di Selat Karimatan. Kabupaten Natuna merupakan pulau yang tergabung dalam gugusan Pulau Tujuh, yang berada di lintasan jalur pelayaran internasional dari dan atau ke Hongkong, Taiwan dan Jepang.</p>
        </div>
      {/* Gambar di sebelah kanan */}
      <section id="penjelasan-section" className="mt-[150px]">
      <div className="flex-shrink-0 w-[478px] ml-5 mr-[50px] mt-[130px]">
        <img
          src={image.PulauNatuna}
          alt="Gambar"
          className="w-full h-auto"
        />
    </div>
    </section>
    </div></div>
    </div></div>


    <div className='justify-center'>
    <div class="flex h-screen bg-white">
    <div class='mt-[450px]'>
    <div className="flex items-center justify-between p-8">
    <section id="penjelasan-anambas">
        {/* Gambar di sebelah kiri */}
      <div className="flex-shrink-0 w-[478px] mr-4 ml-[50px] mt-[80px]">
        <img
          src={image.PulauAnambas}
          alt="Gambar"
          className="w-full h-auto"
        />
      </div>
      </section>
      {/* Teks di sebelah kanan */}
      <div className="flex-shrink-0 w-1/2">
      <div className="text-black text-[80px] font-bold poppins-bold">Anambas</div>
        <p className="text-black text-justify mr-[50px] poppins-regular">Kabupaten Kepulauan Anambas atau gugusan kepulauan Anambas sendiri pada masa pemerintahan kolonial belanda pernah menjadi pusat kewedanaan yakni berpusat di Tarempa.
        Ketika itu, Tarempa adalah pusat pemerintahan di pulau tujuh termasuk wilayah Kabupaten Kepulauan Anambas yang disebut district dan Jemaja wilayahnya disebut Onderdistrict dengan ibu kota Letung.</p>
    </div>
    </div></div>
    </div></div>
    

    <div className='justify-center'>
      <div class="flex h-screen bg-white">
        <div class='mt-[420px]'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
        <div className="text-black text-[80px] font-bold poppins-bold text-right">Lingga</div>
          <p className="text-black text-justify ml-[50px] poppins-regular ">Lingga merupakan salah satu kabupaten yang ada di provinsi Kepulauan Riau. Kabupaten yang terletak di sebelah selatan Kota Batam ini memiliki 6 kecamatan, 6 kelurahan dan 51 desa.
          Kabupaten Lingga dulunya adalah pusat Kerajaan Riau Lingga</p>
        </div>
        <section id="penjelasan-lingga">
      {/* Gambar di sebelah kanan */}
      <div className="flex-shrink-0 w-[478px] ml-4 mr-[50px]">
        <img
          src={image.PulauLingga}
          alt="Gambar"
          className="w-full h-auto"
        />
    </div>
    </section>
    </div></div>
    </div></div>

    <div className='justify-center'>
    <div class="flex h-screen bg-white">
    <div class='mt-[280px]'>
    <div className="flex items-center justify-between p-8">
    <section id="penjelasan-karimun">
        {/* Gambar di sebelah kiri */}
      <div className="flex-shrink-0 w-[478px] mr-4 ml-[50px]">
        <img
          src={image.PulauKarimun}
          alt="Gambar"
          className="w-full h-auto"
        />
      </div>
      </section>
      {/* Teks di sebelah kanan */}
      <div className="flex-shrink-0 w-1/2">
      <div className="text-black text-[80px] font-bold poppins-bold">Karimun</div>
        <p className="text-black text-justify mr-[50px] poppins-regular">Kabupaten Karimun merupakan salah satu Kabupaten yang dimiliki oleh Provinsi Kepulauan Riau yang terletak di Tanjung Balai Karimun, letak kabupaten ini secara geografis memang sangat mendukung perekonomian masyarakatnya, dimana kabupaten karimun termasuk salah satu daerah yang akan dilewati oleh jalur perdagangan bebas yang secara tidak langsung akan membuka peluang yang sangat besar bagi masyarakatnya untuk  mengambil kesempatan yang ada.
         Indonesia. </p>
    </div>
    </div></div>
    </div></div>

    <div className='justify-center'>
      <div class="flex h-screen bg-white">
        <div class='mt-[150px]'>
      <div className="flex items-center justify-between p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex-shrink-0 w-1/2">
        <div className="text-black text-[80px] font-bold poppins-bold text-right">Batam</div>
          <p className="text-black text-justify ml-[50px] poppins-regular">Kota Batam adalah sebuah kota terbesar di Provinsi Kepulauan Riau, Indonesia. Wilayah Kota Batam terdiri dari Pulau Batam, Pulau Rempang dan Pulau Galang dan pulau-pulau kecil lainnya di kawasan Selat Singapura dan Selat Malaka. Pulau Batam, Rempang, dan Galang terkoneksi oleh Jembatan Barelang. Batam merupakan salah satu kota dengan letak yang sangat strategis. Selain berada di jalur pelayaran internasional, kota ini memiliki jarak yang sangat dekat dan berbatasan langsung dengan Singapura dan Malaysia. 
          </p>
        </div>
      <section id="penjelasan-batam">
      {/* Gambar di sebelah kanan */}
      <div className="flex-shrink-0 w-[478px] ml-4 mr-[50px]">
        <img
          src={image.PulauBatam}
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
export default Pulau;