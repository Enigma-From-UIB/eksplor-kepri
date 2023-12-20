import React, { useState } from 'react';

const ImageWithModal = ({ imgSrc, title, modalContentImgSrc }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleViewMoreClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative">
      <div className="group overflow-hidden rounded-md">
        <img
          src={imgSrc}
          alt={title}
          className="w-[330px] h-[450px] transform group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 flex pl-10 pb-10 flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
          <div className="text-white">
            <h1 className="text-6xl font-semibold">{title}</h1>
            <button
              onClick={handleViewMoreClick}
              className="mt-2 px-2 py-1 border rounded-full hover:bg-gray-100 hover:text-black focus:outline-none"
            >
              View
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="z-30 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-8 max-w-4xl rounded-md">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 mx-7 my-5 px-4 py-2 text-4xl font-semibold hover:bg-gray-200 hover:rounded-full"
            >
              X
            </button>
            <img
              src={modalContentImgSrc}
              alt={title}
              className="w-full h-auto mb-4"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWithModal;
