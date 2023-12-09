import React from 'react'
import luti from "../files/Kulinerpage/luti.jpg";
import image from '../assets/image';


function kuliner() {

  return (
    <div className=''>
    <div className='flex'>
      <li>
        <h1 className='text-6xl font-serif font-bold text-white ml-20 text-left mt-40'>Luti Gendang</h1>
        <button
          type="button"
          className="mt-4 ml-20 inline-block bg-primary bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
        <h2></h2>
      </li></div>

      <div class="flex h-screen bg-white">
        <div class="max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="flex justify-center -mt-16 md:justify-end">
        </div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">Luti Gendang adalah salah satu kuliner khas Kepulauan Riau, Khususnya di Kota Batam. Secara spesifik Luti Gendang ini adalah roti yang berisikan ikan yang memiliki tekstur kulit luar yang renyah dan bagian dalam yang lembut. Dalam penyajiannya Luti Gendang ini dapat disajikan dengan mencampurkan dengan kuah kacang ataupun sambal kecap. Sehingga hidangan ini sangat cocok untuk dijadikan sarapan ataupun camilan. Tidak lupa juga Luti Gendang ini merupakan hidangan yang lezat dan bergizi, dimana hidangan ini mengandung Protein, Karbohidrat, dan lemak yang baik untuk Kesehatan.</p>
        <div class="flex justify-end mt-4">
        <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">LUTI GENDANG</h2> </div></div>
      </div>  
     
  </div>
   
  )
}

export default kuliner