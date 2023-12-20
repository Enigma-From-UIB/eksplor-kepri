// ButtonScrollComponent.js
import React from 'react';
import 'tailwindcss/tailwind.css'; // Import file CSS dari Tailwind

const ButtonScrollComponent = () => {
  const handleScroll = () => {
    const element = document.getElementById('penjelasan-lingga');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-05 ml-05 inline-block bg-primary bg-transparent hover:bg-lime-600 text-white font-semibold hover:text-white py-2 px-4 border border-lime-600 hover:border-lime-500 rounded-full text-sm "
    data-te-ripple-init
    data-te-ripple-color="light">
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