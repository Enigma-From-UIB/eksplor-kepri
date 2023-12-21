// ButtonScrollComponent.js
import React from 'react';
import 'tailwindcss/tailwind.css'; // Import file CSS dari Tailwind

const ButtonScrollComponent = ({ destinationId }) => {
  const handleScroll = () => {
    const element = document.getElementById(destinationId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-1 inline-block bg-primary bg-transparent hover:bg-gray-300 hover:text-black text-white font-semibold border border-white hover:border-transparent rounded-full poppins-semibold relative z-40"
    data-te-ripple-init
    data-te-ripple-color="light ">
      <button
        onClick={handleScroll}
        className="inline-block bg-primary bg-transparent py-2 px-4 text-lg "
      >
        view
      </button>
    </div>
  );
};

export default ButtonScrollComponent;