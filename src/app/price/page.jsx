"use client"

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Downloads from '../components/Downloads.jsx';
import Footer from '../components/footer.jsx';
import FAQs from '../components/Faqs.jsx';
import Property from '../components/Property.jsx';
import ContactUs from '../components/Contact-us.jsx';
import { motion } from 'framer-motion'; // For animation
import MobileNavbar from '../components/MobileNav/MobileNavbar.jsx';
import PaymentStructure from '../components/Payment/PaymentStructure.jsx';
import NavbarBottomLinks from '../components/Payment/NavBottoms.jsx';
import Image from 'next/image';
import GetInTouch from '../components/GetInTouch.jsx';
import { FaQq } from 'react-icons/fa';

const Page = () => {
  const [isVideoSection, setIsVideoSection] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateWindowSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateWindowSize(); // Initial check
    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return (
    <div>
      <Navbar />

      {/* Large background container visible only on screens larger than 'sm' */}
      <div className="section-gap scroll-mt-28 sm:scroll-mt-20">
        <div
          className="hidden sm:block w-full h-[85vh] bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: 'url(/uploads/high.png)' }}
        >
          <div className="w-full h-full flex justify-center items-center relative bg-[linear-gradient(90.47deg,_rgba(0,_0,_0,_0)_-11.87%,_rgba(7,_7,_7,_0.5)_35.31%)]">
            <div className="w-full h-[20%] absolute top-0 left-0 bg-[linear-gradient(180deg,_#00000080_14.24%,_#00000000_79.76%)]"></div>
            <h1 className="px-4 lg:px-0 font-supera600 text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl leading-tight tracking-[0.4px] uppercase text-center text-[#FFFFFF] w-full max-w-[720px]">
              Live at the heart of all the action!
            </h1>
          </div>
        </div>
      </div>

      <section id="price" className="section-gap-inner scroll-mt-24 sm:scroll-mt-20">
        <div>
          <div className="px-5 sm:px-5 mb-[20px] xl:container mx-auto">
            <h2
              className="undefined uppercase font-supera700 text-[24px] sm:text-[32px] cmd:text-[36px] text-center text-[#37493C]"
              style={{ color: 'rgb(10, 19, 37)' }}
            >
              Price List
            </h2>
            <p
              className="font-supera600 capitalize cmd:mt-1.5 max-w-full tracking-wide sm:tracking-normal text-[13px] cxs:text-sm sm:text-[15px] md:text-[16px] cmd:text-[18px] leading-[14px] xs:leading-[18px] sm:leading-[20px] cmd:leading-[22px] text-center text-[#5A5454]"
              style={{ color: 'rgb(90, 84, 84)' }}
            >
              Explore The medallion aurum mohali Price list, Payment Plan and Latest offers
            </p>
          </div>
        </div>

        <div className="xl:container mt-16 mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-10">
            <div>
            <div className="hidden md:flex w-full h-[200px] rounded-[22px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.3)] mb-5">
                <div className="w-[35%] h-full relative rounded-l-[22px] overflow-hidden mb-5">
                  <div className="w-full h-full relative scale-100 hover:scale-110 duration-1000 hover:duration-1000">
                    <Image
                      alt=""
                      width={200}
                      height={200}
                      loading="lazy"
                      decoding="async"
                      className="object-cover"
                      sizes="100vw"
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprice-section-apartmentImg1.a078d0b2.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprice-section-apartmentImg1.a078d0b2.webp&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprice-section-apartmentImg1.a078d0b2.webp&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprice-section-apartmentImg1.a078d0b2.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprice-section-apartmentImg1.a078d0b2.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprice-section-apartmentImg1.a078d0b2.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprice-section-apartmentImg1.a078d0b2.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprice-section-apartmentImg1.a078d0b2.webp&amp;w=3840&amp;q=75 3840w"
                      src="/uploads/amenities-img1.webp"
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        inset: '0px',
                        color: 'transparent',
                      }}
                    />
                  </div>
                </div>
                <div className="bg-[#fff] duration-1000 w-[38%] pl-[8px] md:pl-[12px] py-2 flex flex-col justify-center items-start h-full">
                  <h4 className="text-[#000] duration-1000 font-supera700 text-[19px] uppercase mr-1 lg:pl-3">
                    3+1 BHK
                  </h4>
                  <div className="text-[#000] duration-1000 mt-1 font-supera700 text-[14px] uppercase lg:pl-3">
                    2950 SQFT.
                  </div>
                  <p className="text-[#151515] duration-1000 mt-[9px] px-1 lg:px-3 font-supera500 text-[12px] 2xl:text-[13px] capitalize overflow-y-auto scroll-m-8">
                    Introducing our 3+1 BHK Apartments @ tHE MEDALLION AURUM mOHALI, A magnificent testament to
                    luxury and modern living. These stunning towers offer spacious living spaces.
                  </p>
                </div>
                <div className="w-[27%] cursor-pointer rounded-r-[22px] overflow-hidden">
                  <div className="relative w-full h-full">
                    <div className="w-full h-full flex flex-col gap-y-2 justify-center items-center bg-[#000]">
                      <span>
                        <svg
                          width="43"
                          height="56"
                          viewBox="0 0 43 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M36.9739 18.9836H34.3744V13.7846C34.3744 6.61 28.5515 0.787109 21.3769 0.787109C14.2022 0.787109 8.37933 6.61 8.37933 13.7846V18.9836H5.77982C2.92037 18.9836 0.580811 21.3232 0.580811 24.1827V50.1777C0.580811 53.0372 2.92037 55.3767 5.77982 55.3767H36.9739C39.8333 55.3767 42.1729 53.0372 42.1729 50.1777V24.1827C42.1729 21.3232 39.8333 18.9836 36.9739 18.9836ZM21.3769 42.3792C18.5174 42.3792 16.1778 40.0396 16.1778 37.1802C16.1778 34.3207 18.5174 31.9812 21.3769 31.9812C24.2363 31.9812 26.5759 34.3207 26.5759 37.1802C26.5759 40.0396 24.2363 42.3792 21.3769 42.3792ZM29.4353 18.9836H13.3184V13.7846C13.3184 9.33948 16.9317 5.72617 21.3769 5.72617C25.822 5.72617 29.4353 9.33948 29.4353 13.7846V18.9836Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>
                      <h6 className="font-poppins font-medium text-[15px] xl:text-[17px] text-[#fff]">
                        Unlock Price
                      </h6>
                    </div>
                    <div
                      className="w-full h-full absolute top-0 right-0 translate-x-[96%] duration-500 z-20 bg-backgroud-theme-local bg-cover"
                    >
                      <div className="w-full h-[40%] flex justify-center">
                        <div className="flex flex-col lg:flex-col items-center">
                          <h4 className="text-white font-supera700 text-[30px] py-1 uppercase">
                            ₹3.10 Crore
                          </h4>
                          <div className="text-[#fff] font-supera600 text-[15px] uppercase">Our Price</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex w-full h-[200px] rounded-[22px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.3)] mt -4 mb-5">
                <div className="w-[35%] h-full relative rounded-l-[22px] overflow-hidden mb-5">
                  <div className="w-full h-full relative scale-100 hover:scale-110 duration-1000 hover:duration-1000">
                    <Image
                      alt=""
                      width={200}
                      height={200}
                      loading="lazy"
                      decoding="async"
                      className="object-cover"
                      sizes="100vw"
                      src="/uploads/amenities-img1.webp"
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        inset: '0px',
                        color: 'transparent',
                      }}
                    />
                  </div>
                </div>
                <div className="bg-[#fff] duration-1000 w-[38%] pl-[8px] md:pl-[12px] py-2 flex flex-col justify-center items-start h-full">
                  <h4 className="text-[#000] duration-1000 font-supera700 text-[19px] uppercase mr-1 lg:pl-3">
                    3+1 BHK
                  </h4>
                  <div className="text-[#000] duration-1000 mt-1 font-supera700 text-[14px] uppercase lg:pl-3">
                    2950 SQFT.
                  </div>
                  <p className="text-[#151515] duration-1000 mt-[9px] px-1 lg:px-3 font-supera500 text-[12px] 2xl:text-[13px] capitalize overflow-y-auto scroll-m-8">
                    Introducing our 3+1 BHK Apartments @ tHE MEDALLION AURUM mOHALI, A magnificent testament to
                    luxury and modern living. These stunning towers offer spacious living spaces.
                  </p>
                </div>
                <div className="w-[27%] cursor-pointer rounded-r-[22px] overflow-hidden">
                  <div className="relative w-full h-full">
                    <div className="w-full h-full flex flex-col gap-y-2 justify-center items-center bg-[#000]">
                      <span>
                        <svg
                          width="43"
                          height="56"
                          viewBox="0 0 43 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M36.9739 18.9836H34.3744V13.7846C34.3744 6.61 28.5515 0.787109 21.3769 0.787109C14.2022 0.787109 8.37933 6.61 8.37933 13.7846V18.9836H5.77982C2.92037 18.9836 0.580811 21.3232 0.580811 24.1827V50.1777C0.580811 53.0372 2.92037 55.3767 5.77982 55.3767H36.9739C39.8333 55.3767 42.1729 53.0372 42.1729 50.1777V24.1827C42.1729 21.3232 39.8333 18.9836 36.9739 18.9836ZM21.3769 42.3792C18.5174 42.3792 16.1778 40.0396 16.1778 37.1802C16.1778 34.3207 18.5174 31.9812 21.3769 31.9812C24.2363 31.9812 26.5759 34.3207 26.5759 37.1802C26.5759 40.0396 24.2363 42.3792 21.3769 42.3792ZM29.4353 18.9836H13.3184V13.7846C13.3184 9.33948 16.9317 5.72617 21.3769 5.72617C25.822 5.72617 29.4353 9.33948 29.4353 13.7846V18.9836Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>
                      <h6 className="font-poppins font-medium text-[15px] xl:text-[17px] text-[#fff]">
                        Unlock Price
                      </h6>
                    </div>
                    <div
                      className="w-full h-full absolute top-0 right-0 translate-x-[96%] duration-500 z-20 bg-backgroud-theme-local bg-cover"
                    >
                      <div className="w-full h-[40%] flex justify-center">
                        <div className="flex flex-col lg:flex-col items-center">
                          <h4 className="text-white font-supera700 text-[30px] py-1 uppercase">
                            ₹3.10 Crore
                          </h4>
                          <div className="text-[#fff] font-supera600 text-[15px] uppercase">Our Price</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat similar structure for 4+1 BHK */}
            </div>
          </div>
        </div>
      </section>

      <PaymentStructure />
      <GetInTouch/>
      <Property/>
      <FAQs/>
      <ContactUs/>
      <Downloads/>
      <Footer/>
    </div>
  );
};

export default Page;
