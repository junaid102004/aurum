import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import RotatingComponent from './Animations/RotateComponent';
import LuxuryApartmentCard from './LuxuryApartmentCard';

export default function ProductsSection() {
  const [selectedOption, setSelectedOption] = useState(1); // 1 for 3+1 BHK, 2 for 4+1 BHK
  const [currentSlide, setCurrentSlide] = useState(0); // To track current slide index
  const [isSellingFastVisible, setSellingFastVisible] = useState(true); // State to control visibility of "Selling Fast"

  // Toggle "Selling Fast" visibility every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSellingFastVisible((prevState) => !prevState); // Toggle visibility
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Total number of slides for each option
  const totalSlides = selectedOption === 1 ? 2 : 2; // Dynamically change if needed

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setCurrentSlide(option - 1); // Reset to first slide when option is changed
  };

  return (
    <section className="section-gap scroll-mt-20">
      <div className="w-full px-0 sm:px-0 mb-[20px]">
        <h2 className="uppercase font-supera700 text-[24px] sm:text-[32px] cmd:text-[36px] text-center text-[#37493C]">
          Our Products
        </h2>
        <p className="font-supera600 capitalize cmd:mt-1.5 max-w-full tracking-wide sm:tracking-normal text-[13px] cxs:text-sm sm:text-[15px] md:text-[16px] cmd:text-[18px] leading-[14px] xs:leading-[18px] sm:leading-[20px] cmd:leading-[22px] mb-5 text-center text-[#5A5454]">
          Medallion Aurum offers luxury 3+1 BHK & 4+1 BHK apartments in Mohali Near Chandigarh
        </p>

        {/* Option Selector with Dynamic Slide Count */}
        <div className="w-full mx-auto">
          <div className="w-[95%] sm:w-[92%] mx-auto">
            <div className="w-full md:w-auto flex justify-between md:border-b md:border-[#D0CBCB] mb-5">
              <ul className="flex gap-1 sm:gap-0 w-full max-w-full lg:max-w-[600px] xl:max-w-[700px] md:mr-6 relative">
                <li
                  className={`whitespace-nowrap w-1/2 xs:px-3 sm:px-4 md:px-6 duration-300 ${selectedOption === 1 ? 'bg-right bg-[#121212] text-[#fff]' : 'md:bg-transparent text-[#000]'} py-1.5 bxxs:py-2 md:py-0 rounded-md md:rounded-none cursor-pointer flex items-center justify-center uppercase font-supera700 sm:font-supera600 md:font-supera700 tracking-wider text-[16px] cxs:text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-center cxs:mx-1 md:mx-0`}
                  onClick={() => handleOptionChange(1)}
                >
                  3+1 BHK
                </li>
                <li
                  className={`whitespace-nowrap w-1/2 xs:px-3 sm:px-4 md:px-6 duration-300 ${selectedOption === 2 ? 'bg-right bg-[#121212] text-[#fff]' : 'md:bg-transparent text-[#787878]'} border-[1px] border-[#BDBDBD] md:border-transparent md:border-0 py-1.5 bxxs:py-2 md:py-0 rounded-md md:rounded-none cursor-pointer flex items-center justify-center uppercase font-supera700 sm:font-supera600 md:font-supera700 tracking-wider text-[16px] cxs:text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-center cxs:mx-1 md:mx-0`}
                  onClick={() => handleOptionChange(2)}
                >
                  4+1 BHK
                </li>
              </ul>
              <div className="flex items-center justify-end w-full">
                <span className="text-[16px] md:text-[18px] text-[#121212] font-supera700 uppercase">
                  {currentSlide + 1}/{totalSlides}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Image and Text Section (Flex container) */}
        <div className="flex w-full">
          {/* Image Section (65% width) */}
          <div className="w-2/3 bg-[url('/uploads/bgimage.png')] bg-cover bg-no-repeat bg-center relative">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            >
              <RotatingComponent />
              {selectedOption === 1 ? (
                <SwiperSlide>
                  <div className="relative">
                    <Image
                      src="/uploads/AURUM-GATE-NIGHT-HIRES.png"
                      width={1600}
                      height={900}
                      alt="3+1 BHK"
                      layout="intrinsic"
                      className="w-full h-auto object-cover"
                    />
                    {isSellingFastVisible && (
                      <div className="absolute top-4 z-10">
                        <svg className="w-full h-full" viewBox="0 0 114 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M113.588 0.547974H-2.6283C-3.29415 0.547974 -3.83393 1.08775 -3.83393 1.7536V29.0341C-3.83393 29.7 -3.29415 30.2398 -2.6283 30.2398H113.588L105.538 14.8033L113.588 0.547974Z" fill="white"></path>
                        </svg>
                        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#131313] font-supera700 text-[20px] capitalize tracking-wide">
                          Selling Fast
                        </span>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ) : (
                <>
                  <SwiperSlide>
                    <div className="relative">
                      <Image
                        src="/uploads/image2.png"
                        width={1600}
                        height={900}
                        alt="4+1 BHK"
                        layout="intrinsic"
                        className="w-full h-auto object-cover"
                      />
                      {isSellingFastVisible && (
                        <div className="absolute top-4 left-4 z-10">
                          <svg className="w-full h-full" viewBox="0 0 114 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M113.588 0.547974H-2.6283C-3.29415 0.547974 -3.83393 1.08775 -3.83393 1.7536V29.0341C-3.83393 29.7 -3.29415 30.2398 -2.6283 30.2398H113.588L105.538 14.8033L113.588 0.547974Z" fill="white"></path>
                          </svg>
                          <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#131313] font-supera700 text-[20px] capitalize tracking-wide">
                            Selling Fast
                          </span>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                </>
              )}
            </Swiper>
          </div>

          {/* Text Section (35% width with black background) */}
          <div className="w-1/3 bg-black text-white p-4">
            <h1>luxury</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
