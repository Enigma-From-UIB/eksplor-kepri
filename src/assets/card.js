import React, { useState } from 'react';

const Card = ({ paragraph, backgroundImage, overlayImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[20rem] mx-auto bg-white rounded-xl overflow-hidden shadow-md relative">
      <div
        className="h-48 md:h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})`, zIndex: 1 }}
      >
        {/* Overlay image */}
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={overlayImage}
          alt="Overlay"
        />
      </div>
      <div className="p-4 md:p-8 relative z-10">
        <p className="mt-2 text-gray-500">{paragraph}</p>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={openModal}
          style={{ zIndex: 2 }}
        >
          Open Modal
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={closeModal}></div>
          <div className="bg-white p-8 rounded-md z-20">
            <p>Modal content goes here</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={closeModal}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
