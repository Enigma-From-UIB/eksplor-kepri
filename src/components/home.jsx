import React, { useState } from 'react';
import image from '../assets/image';
import Slideshow from '../assets/slideshow';
import Modal from '../assets/modal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Home() {
  const images = [image.HomeBG1, image.HomeBG2, image.HomeBG3, image.HomeBG4, image.HomeBG5];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
          <h1 className='playfair py-2 text-[2rem] lg:text-[5rem] xl:text-[5rem] 2xl:text-[5rem] relative z-40'>
            Kepulauan Riau
          </h1>
          <p className='mt-4 mb-[2rem] mr-[3rem] lg:mr-[20rem] sm:mr-[10rem] text-[1rem] md:text-[1.1rem] lg:text-[1.3rem]'>
            Kepulauan Riau (disingkat Kepri) adalah sebuah wilayah provinsi yang terletak di Indonesia. Provinsi ini
            beribu kota di Kota Tanjung Pinang Provinsi ini termasuk provinsi berbentuk kepulauan di Indonesia. Pada
            pertengahan tahun 2023, penduduk Kepulauan Riau sebanyak 2.150.329 jiwa.
          </p>
        </div>
      </div>
      <div className='mx-auto h-screen bg-white '>
        <div className='2xl:my-[12rem] xl:my-[2rem] grid grid-cols-2 gap-4 items-center'>
          <div className="ml-11 text-[5rem] flex items-center">
            <div className='mt-[12rem] m-auto grid grid-cols-2 gap-4'>
              <h1 className='playfair text-black mx-10 ' onClick={openModal}>
                Fun Fact
              </h1>
            </div>
          </div>
        </div>
         <div className='w-3/4 m-auto max-h-screen'>
         <Slider {...settings}>
            <div className='mx-10'>
              <img src={image.TObeng} onClick={() => openModal(image.TObengPopup)} style={{ cursor: 'pointer' }} />
            </div>
            <div className='mx-10'>
              <img src={image.JumlahPulau} onClick={() => openModal(image.JumlahPulauPopup)} style={{ cursor: 'pointer' }} />
            </div>
            <div className='mx-10'>
              <img src={image.LautanKepri} onClick={() => openModal(image.LautanKepriPopup)} style={{ cursor: 'pointer' }} />
            </div>
            <div className='mx-10'>
              <img src={image.WisataSG} onClick={() => openModal(image.WisataSGPopup)} style={{ cursor: 'pointer' }} />
            </div>
            <div className='mx-10'>
              <img src={image.FreeTrade} onClick={() => openModal(image.FreeTradePopup)} style={{ cursor: 'pointer' }} />
            </div>
            <div className='mx-10'>
              <img src={image.GedungGong} onClick={() => openModal(image.GedungGongPopup)} style={{ cursor: 'pointer' }} />
            </div>
            <div className='mx-10'>
              <img src={image.SewaKepri} onClick={() => openModal(image.SewaKepriPopup)} style={{ cursor: 'pointer' }} />
            </div>
          </Slider>
          
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
