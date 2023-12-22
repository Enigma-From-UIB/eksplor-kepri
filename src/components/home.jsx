import React, { useState } from 'react';
import image from '../assets/image';
import Slideshow from '../assets/slideshow';
import Modal from '../assets/modal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Home() {
  const images = [image.HomeBG1, image.HomeBG2, image.HomeBG3, image.HomeBG4, image.HomeBG5];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const play = useNavigate();

  function playGame(e) {
    e.preventDefault();

    play('/game');
}

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };
  

  const CustomNextArrow = (props) => (
    <div {...props} className="custom-arrow custom-next-arrow">
      <FaChevronRight />
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div {...props} className="custom-arrow custom-prev-arrow">
      <FaChevronLeft />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };



  return (
    <div className=''>
      <div className=''>
        <Slideshow
          images={images}
          className="h-[50vh] sm:h-[60vh] xl:h-[120vh] 2xl:h-[120vh] z-20 filter brightness-50"
        />
        <div className='2xl:mt-[18rem] xl:mt-[5rem] poppins-regular text-white pl-[2rem] lg:pl-[8rem] md:pl-[5rem] flex-row z-30 relative'>
          <h1 className='playfair py-2 mt-[150px] ml-[40px] text-[2rem] lg:text-[5rem] xl:text-[5rem] 2xl:text-[5rem] relative z-40 font-extrabold'>
            Kepulauan Riau
          </h1>
          <p className='mt-4 ml-[40px] mb-[2rem] mr-[3rem] lg:mr-[20rem] sm:mr-[10rem] text-[4rem] md:text-[1.1rem] lg:text-[1.6rem]'>
            Kepulauan Riau (disingkat Kepri) adalah sebuah wilayah provinsi yang terletak di Indonesia. Provinsi ini
            beribu kota di Kota Tanjung Pinang Provinsi ini termasuk provinsi berbentuk kepulauan di Indonesia. Pada
            pertengahan tahun 2023, penduduk Kepulauan Riau sebanyak 2.150.329 jiwa.
          </p>
        </div>
      </div>
      <div className='mx-auto h-screen bg-white '>
        <div className='2xl:mt-[12rem] xl:mt-[15rem]'>
          <div className='ml-11 text-[5rem] 2xl:mt-[3em] xl:mt-[6em]'>
            <h1 className='playfair 2xl:pt-[2em] xl:pt-[1em] text-black mx-10'>
              Fun Fact
            </h1>
          </div>
        </div>
        <div className='w-3/4 m-auto h-screen'>
          <Slider {...settings} className='mb-20'>
            <div className='mx-10'>
              <img src={image.TObeng} alt='' onClick={() => openModal(image.TObengPopup)} style={{ cursor: 'pointer' }} />
            </div>
            <div className='mx-10'>
              <img src={image.JumlahPulau} alt='' onClick={() => openModal(image.JumlahPulauPopup)} style={{ cursor: 'pointer' }} />
            </div>
            <div className='mx-10'>
              <img src={image.LautanKepri} alt='' onClick={() => openModal(image.LautanKepriPopup)} style={{ cursor: 'pointer' }} />
            </div>
            <div className='mx-10'>
              <img src={image.WisataSG} alt='' onClick={() => openModal(image.WisataSGPopup)} style={{ cursor: 'pointer' }} />
            </div>
            <div className='mx-10'>
              <img src={image.FreeTrade} alt=''onClick={() => openModal(image.FreeTradePopup)} style={{ cursor: 'pointer' }} />
            </div>
            <div className='mx-10'>
              <img src={image.GedungGong} alt='' onClick={() => openModal(image.GedungGongPopup)} style={{ cursor: 'pointer' }} />
            </div>
            <div className='mx-10'>
              <img src={image.SewaKepri} alt='' onClick={() => openModal(image.SewaKepriPopup)} style={{ cursor: 'pointer' }} />
            </div>
          </Slider>
        </div>
      </div>
      <div className='mx-auto h-screen relative bg-white mt-[5em] mb-[1em] '>
        <div className='relative pt-[20em]'>
          <div className='absolute top-0 left-0 w-full h-full z-20 filter brightness-50 blur-sm'>
            <Slideshow
              images={images} /> 
          </div>
          <div className='z-30 relative pt-[5em] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-4 p-8'>
            <h1 className='mt-[3em] text-white playfair text-6xl'>
              Test your knowledge!
            </h1>
            <p className='text-white poppins-regular text-center '>Test your knowledge about Kepulauan Riau <br/> and see how much you know about it!</p>
            <button className="border-2 poppins-semibold border-white text-white py-2 px-4 mb-5 font-bold align-middle transition-all rounded-2xl hover:bg-gray-400/100" onClick={playGame}>Play</button>      
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          {selectedImage && <img src={selectedImage} />}
        </Modal>
      )}
    </div>
  );
}

export default Home;
