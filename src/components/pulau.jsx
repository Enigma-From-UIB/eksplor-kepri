import React from 'react';

function Pulau() {
  return (
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
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-lime-700">
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
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-lime-700">
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
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-lime-700">
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
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 green:text-neutral-50 font-sans text-lime-700">
      BATAM </div>
      <button
          type="button"
          className="mt-20 ml-05 inline-block bg-primary bg-transparent hover:bg-lime-600 text-lime-700 font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm"
          data-te-ripple-init
          data-te-ripple-color="light">
          View
        </button>
        {/* Konten Card 4 */}
    <head></head>
      </div>
    </div>
  );
}


export default Pulau;