// ButtonScrollComponent.js
import React from 'react';
import 'tailwindcss/tailwind.css'; // Import file CSS dari Tailwind

const ButtonScrollComponent = () => {
  const handleScroll = () => {
    const element = document.getElementById('penjelasan-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-[05px] ml-[150px] mt-[0px] ml-[150px] inline-block bg-primary bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full playfair py-2 text-[2rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] relative z-40"
    data-te-ripple-init
    data-te-ripple-color="light ">
      <button
        onClick={handleScroll}
        className="bg-blue-500 inline-block bg-primary bg-transparent hover:bg-lime-600 text-white font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm"
      >
        View
      </button>
    </div>
  );
};

export default ButtonScrollComponent;