import React from 'react';

const Modal = ({ closeModal, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-8 rounded-lg">
        <button
          className="absolute top-2 right-2 text-black cursor-pointer lg:text-6xl sm:text-4xl pr-14 pt-10"
          onClick={closeModal}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
