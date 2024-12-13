import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Corrected import
import Image from 'next/image';

export default function ProductsSection() {
  const [selectedOption, setSelectedOption] = useState(1); // 1 for 3+1 BHK, 2 for 4+1 BHK
  const [currentSlide, setCurrentSlide] = useState(0); // To track current slide index

  // Total number of slides for each option
  const totalSlides = selectedOption === 1 ? 2 : 2; // Dynamically change if needed

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setCurrentSlide(option-1); // Reset to first slide when option is changed
  };

  return (
    <div className="px-5 sm:px-5 mb-[20px] xl:container mx-auto">
      <h2
        className="uppercase font-supera700 text-[24px] sm:text-[32px] cmd:text-[36px] text-center text-[#37493C]"
        style={{ color: "#0A1325", textAlign: "undefined" }}
      >
        Our Products
      </h2>
      <p
        className="font-supera600 capitalize cmd:mt-1.5 max-w-full tracking-wide sm:tracking-normal text-[13px] cxs:text-sm sm:text-[15px] md:text-[16px] cmd:text-[18px] leading-[14px] xs:leading-[18px] sm:leading-[20px] cmd:leading-[22px] mb-5 text-center text-[#5A5454]"
        style={{ color: "#5A5454", textAlign: "undefined" }}
      >
        Medallion Aurum offers luxury 3+1 BHK & 4+1 BHK apartments in Mohali Near Chandigarh
      </p>

      {/* Option Selector with Dynamic Slide Count */}
      <div className="w-[95%] sm:w-[92%] mx-auto">
        <div className="w-full md:w-auto flex justify-between md:border-b md:border-[#D0CBCB] mb-5">
          <div className="w-full md:w-auto">
            <ul className="flex gap-1 sm:gap-0 w-full max-w-full lg:max-w-[600px] xl:max-w-[700px] md:mr-6 relative">
              <li
                className={`whitespace-nowrap w-1/2 xs:px-3 sm:px-4 md:px-6 duration-300 ${selectedOption == 1 ? 'bg-right bg-[#121212] text-[#fff]' : 'md:bg-transparent text-[#000]'} py-1.5 bxxs:py-2 md:py-0 rounded-md md:rounded-none cursor-pointer flex items-center justify-center uppercase font-supera700 sm:font-supera600 md:font-supera700 tracking-wider text-[16px] cxs:text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-center cxs:mx-1 md:mx-0`}
                onClick={() => handleOptionChange(1)}
              >
                3+1 BHK
              </li>
              <li
                className={`whitespace-nowrap w-1/2 xs:px-3 sm:px-4 md:px-6 duration-300 ${selectedOption == 2 ? 'bg-right bg-[#121212] text-[#fff]' : 'md:bg-transparent text-[#787878]'} border-[1px] border-[#BDBDBD] md:border-transparent md:border-0 py-1.5 bxxs:py-2 md:py-0 rounded-md md:rounded-none cursor-pointer flex items-center justify-center uppercase font-supera700 sm:font-supera600 md:font-supera700 tracking-wider text-[16px] cxs:text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-center cxs:mx-1 md:mx-0`}
                onClick={() => handleOptionChange(2)}
              >
                4+1 BHK
              </li>
              <li className="hidden md:block w-1/3 px-4 h-[5.54px] rounded-full bg-[#0a1325] absolute z-30 top-[138%] lg:top-[125%] xl:top-[115%] left-[59%]  duration-300"></li>
            </ul>
          </div>
          {/* Displaying current slide number out of total slides */}
          <div className="hidden md:block font-supera700 text-[28px] text-[#0a1325] pr-0.5">
            {currentSlide + 1}/{totalSlides}
          </div>
        </div>
      </div>

      {/* Dynamic Slider */}
      <div className="w-full relative">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        >
          {selectedOption === 1 ? (
            <>
              <SwiperSlide>
                <Image
                  src="/uploads/AURUM-GATE-NIGHT-HIRES.png"
                  width={600} // Update with your image's actual width
                  height={400} // Update with your image's actual height
                  alt="3+1 BHK"
                  layout="responsive"  // Makes the image responsive
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              {/* <SwiperSlide>
                <Image src="/uploads/AURUM-GATE-NIGHT-HIRES.png" width={600} height={400} alt="3+1 BHK" className="w-full h-auto object-cover" />
              </SwiperSlide> */}
            </>
          ) : (
            <>
              <SwiperSlide>
                <Image
                  src="/uploads/image2.png"
                  
                  width={600} // Update with your image's actual width
                  height={400} // Update with your image's actual height
                  alt="4+1 BHK"
                  layout="intrinsic"  // Ensures responsiveness
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/uploads/image3.png"
                  width={600} // Update with your image's actual width
                  height={400} // Update with your image's actual height
                  alt="4+1 BHK"
                  layout="intrinsic"  // Ensures responsiveness
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
}
