'use client';

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
import MapSection from '../components/MapSection.jsx';

export default function Home() {
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
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });

    // Handle visibility of images and darkening when in view (on scroll)
    const handleImageInView = () => {
      const images = document.querySelectorAll('.bg-cover');
      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          image.classList.add('in-view');
        } else {
          image.classList.remove('in-view');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleImageInView);
    
    // Initial check if images are in view on page load
    handleImageInView();

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleImageInView);
    };
  }, []);

  // Images object with amenity details (image URL and title)
  const images = [
    { src: '/uploads/high.png', alt: 'Luxury Pool', title: 'Luxury Pool' },
    { src: '/uploads/high4.png', alt: 'Fitness Center', title: 'Fitness Center' },
    { src: '/uploads/high2.png', alt: 'Co-working Space', title: 'Co-working Space' },
    { src: '/uploads/high3.png', alt: 'Rooftop Bar', title: 'Rooftop Bar' },
    { src: '/uploads/high4.png', alt: 'Fitness Center', title: 'Fitness Center' },
    { src: '/uploads/high2.png', alt: 'Co-working Space', title: 'Co-working Space' },
    { src: '/uploads/high3.png', alt: 'Rooftop Bar', title: 'Rooftop Bar' },
    // Add more image objects here as needed
  ];

  return (
    <>
         {isMobile ? (
        <MobileNavbar isVideoSection={isVideoSection} />
      ) : (
        <Navbar isVideoSection={isVideoSection} />
      )}

      <div className='mb-20'>
        <div className="section-gap scroll-mt-28 sm:scroll-mt-20">
          {/* Large background container visible only on screens larger than 'sm' */}
          <div className="hidden sm:block w-full h-[85vh] bg-cover bg-bottom bg-no-repeat" style={{ backgroundImage: 'url(/uploads/high.png)' }}>
            <div className="w-full h-full flex justify-center items-center relative bg-[linear-gradient(90.47deg,_rgba(0,_0,_0,_0)_-11.87%,_rgba(7,_7,_7,_0.5)_35.31%)]">
              <div className="w-full h-[20%] absolute top-0 left-0 bg-[linear-gradient(180deg,_#00000080_14.24%,_#00000000_79.76%)]"></div>
              <h1 className="px-4 lg:px-0 font-supera600 text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl leading-tight tracking-[0.4px] uppercase text-center text-[#FFFFFF] w-full max-w-[720px]">
                Live at the heart of all the action!
              </h1>
            </div>
          </div>
        </div>

        {/* Amenities Section with increased margin and decreased gap */}
        <section className='section-gap scroll-mt-28 sm:scroll-mt-20'>
          <div className="m-4 py-16 px-4 mt-10 sm:mt-28">
            <div className='px-5 sm:px-5 mb-[20px] xl:container mx-auto'>
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                Amenities
              </h2>
              <p
                className="font-supera600 capitalize cmd:mt-1.5 max-w-full tracking-wide sm:tracking-normal text-[13px] cxs:text-sm sm:text-[15px] md:text-[16px] cmd:text-[18px] leading-[14px] xs:leading-[18px] sm:leading-[20px] cmd:leading-[22px] text-center text-[#5A5454]"
                style={{ color: "rgb(90, 84, 84)" }}
              >
                Discover the Premium amenities at The Medallion Aurum Mohali
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* Dynamically render the amenities images */}
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="bg-cover bg-center h-[250px] rounded-lg relative overflow-hidden"
                  style={{ backgroundImage: `url(${image.src})` }}
                  data-aos="fade-up"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3, duration: 1 }}
                >
                  <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300">
                    <h3 className="text-white text-2xl font-semibold">{image.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Property />
        <FAQs />
<MapSection/>
        <ContactUs />
        <Downloads />
        <Footer />
        

       
      </div>
    </>
  );
}
