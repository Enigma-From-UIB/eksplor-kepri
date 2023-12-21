import React from 'react';
import image from '../assets/image';
import Slideshow from '../assets/slideshow';
import ImageWithModal from '../assets/imageWithModal';
import ButtonScrollComponent from '../assets/ButtonScrollComponent';

function Wisata() {
  return (
    <div classname='overflow-hidden'>
      <div className=''>
      <div className="h-screen flex items-center justify-center absolute inset-0 sm:h-[60vh] xl:h-[110vh] 2xl:h-[110vh] brightness-50 " style={{ backgroundImage: `url(${image.GunungDaik1})` }}> </div>
        <div className='2xl:mt-[18rem] xl:mt-[13rem] poppins-regular text-white pl-[2rem] lg:pl-[8rem] md:pl-[5rem] flex-row z-30 relative'>
          <div className='flex'>
            <li>
              <h1 className="ml-[100px]  playfair py-2 text-[4rem] lg:text-[6rem] xl:text-[6rem] 2xl:text-[6rem] relative z-40">Gunung Daik</h1>
              <div className='ml-[100px]'>
                <ButtonScrollComponent destinationId="pasir-gurun-desc" />
              </div>
            </li>
            
        
            {/* Card 1 */}
            <div classname='flex'>
              <div className="w-[190px] h-[250px] rounded-2xl mt-[10px] ml-[160px] mb-[50px] relative" style={{ backgroundImage: `url(${image.pasirguruncard})` }}>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t">
                  <div class="mb-2 text-xl font-medium leading-tight green:text-neutral-50 font-sans text-white poppins-bold ml-[10px] text-bottom ">
                    Pasir Gurun
                  </div>
                  <ButtonScrollComponent destinationId="pasir-gurun-desc" />
                  {/* Konten Card 1 */}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div classname='flex'>
              <div className="w-[190px] h-[250px] rounded-2xl mt-[10px] ml-[15px] mb-[50px] relative " style={{ backgroundImage: `url(${image.ktmresortcard})` }}>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t">
                  <div class="mb-2 text-xl font-medium leading-tight green:text-neutral-50 font-sans text-white poppins-bold ml-[10px]">
                    KTM Resort 
                  </div>
                  <ButtonScrollComponent destinationId="ktm-resort-desc" />
                  {/* Konten Card 2 */}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div classname='flex'>
              <div className="w-[190px] h-[250px] rounded-2xl mt-[10px] mb-[50px] ml-[15px] mr[10px] relative" style={{ backgroundImage: `url(${image.patungseribucard})` }}>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t">
                  <div class="mb-2 text-xl font-medium leading-tight green:text-neutral-50 font-sans text-white poppins-bold ml-[10px]">
                    Patung Seribu 
                  </div>
                  <ButtonScrollComponent destinationId="patung-seribu-desc" />
                  {/* Konten Card 3 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='m-10 flex flex-col'>
        <div className='flex justify-end p-10'>
          <h1 className='playfair text-black text-8xl pr-10'>Wisata Alam</h1>
        </div>
        <div className='flex flex-row justify-between items-center p-8'>
        <section id="pasir-gurun-desc">
          <div className='px-10'>
            <ImageWithModal
              imgSrc={image.GurunPasir}
              title="Gurun Pasir"
              modalContentImgSrc={image.GurunPasirPopUp}
            />
          </div>
        </section>
          <div className='px-10'>
            <ImageWithModal
              imgSrc={image.GunungDaik}
              title="Gunung Daik"
              modalContentImgSrc={image.GunungDaikPopUp}
            />
          </div>
          <div className='px-10'>
            <ImageWithModal
              imgSrc={image.PantaiNongsa}
              title="Pantai Nongsa"
              modalContentImgSrc={image.PantaiNongsaPopUp}
            />
          </div>
        </div>
      </div>

      <div className='m-10 flex flex-col'>
        <div className='flex justify-start p-10'>
          <h1 className='playfair text-black text-8xl pl-10'>Wisata Religi</h1>
        </div>
        <div className='flex flex-row justify-between items-center p-8'>
          <section id="ktm-resort-desc">
            <div className='px-10'>
              <ImageWithModal
                imgSrc={image.KTMResort}
                title="KTM Resort"
                modalContentImgSrc={image.KTMResortPopUp}
              />
            </div>
          </section>
          <div className='px-10'>
            <ImageWithModal
              imgSrc={image.GerejaAyam}
              title="Gereja Ayam"
              modalContentImgSrc={image.GerejaAyamPopUp}
            />
          </div>
          <div className='px-10'>
            <ImageWithModal
              imgSrc={image.MasjidAgung}
              title="Masjid Agung"
              modalContentImgSrc={image.MasjidAgungPopUp}
            />
          </div>
        </div>
      </div>

      <div className='m-10 flex flex-col'>
        <div className='flex justify-end p-10'>
          <h1 className='playfair text-black text-8xl pr-10'>Wisata Sejarah</h1>
        </div>
        <div className='flex flex-row justify-between items-center p-8'>
          <section id="patung-seribu-desc">
            <div className='px-10'>
              <ImageWithModal
                imgSrc={image.PatungSeribu}
                title="Patung Seribu"
                modalContentImgSrc={image.PatungSeribuPopUp}
              />
            </div>
          </section>
          <div className='px-10'>
            <ImageWithModal
              imgSrc={image.KampungVietnam}
              title="Kampung Vietnam"
              modalContentImgSrc={image.KampungVietnamPopUp}
            />
          </div>
          <div className='px-10'>
            <ImageWithModal
              imgSrc={image.PulauPenyengat}
              title="Pulau Penyegat"
              modalContentImgSrc={image.PulauPenyengatPopUp}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wisata;