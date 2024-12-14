'use client';

import React, { useEffect } from 'react';
import Navbar from '../components/navbar.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import Downloads from '../components/Downloads.jsx';
import Footer from '../components/footer.jsx';
import FAQs from '../components/Faqs.jsx';
import Property from '../components/Property.jsx';
import ContactUs from '../components/Contact-us.jsx';

export default function Home() {
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
    <div className="mb-20">
      {/* Render Navbar */}
      <Navbar />

      {/* Large background container visible only on screens larger than 'sm' */}
      <div className="hidden sm:block w-full h-[85vh] bg-cover bg-bottom bg-no-repeat" style={{ backgroundImage: 'url(/uploads/high.png)' }}>
        <div className="w-full h-full flex justify-center items-center relative bg-[linear-gradient(90.47deg,_rgba(0,_0,_0,_0)_-11.87%,_rgba(7,_7,_7,_0.5)_35.31%)]">
          <div className="w-full h-[20%] absolute top-0 left-0 bg-[linear-gradient(180deg,_#00000080_14.24%,_#00000000_79.76%)]"></div>
          <h1 className="px-4 lg:px-0 font-supera600 text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl leading-tight tracking-[0.4px] uppercase text-center text-[#FFFFFF] w-full max-w-[720px]">
            Live at the heart of all the action!
          </h1>
        </div>
      </div>

      {/* Amenities Section with increased margin and decreased gap */}
      <div className="m-4 py-16 px-4 mt-10 sm:mt-28"> {/* Increased margin-top */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Amenities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"> {/* Adjusted grid layout */}
          {/* Dynamically render the amenities images */}
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-cover bg-center h-[250px] rounded-lg relative overflow-hidden"
              style={{ backgroundImage: `url(${image.src})` }}
              data-aos="fade-up"
            >
              <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Property />
      <FAQs />
      <ContactUs />
      <Downloads />
      <Footer />

      {/* Global Styles for Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Supera:wght@600&display=swap');
        
        .font-supera600 {
          font-family: 'Supera', sans-serif;
        }

        /* Darken effect and hover overlay for amenities images only */
        .bg-cover {
          position: relative; /* Make sure the overlay works as expected */
        }

        /* Apply brightness change on hover to the overlay, not the image */
        .bg-cover:hover .overlay {
          opacity: 1;
          filter: brightness(50%);
        }

        /* Initial hidden state of overlay */
        .overlay {
          opacity: 0;
          transition: opacity 0.3s ease, filter 0.3s ease; /* Added transition for smooth opacity change */
        }

        /* Styling for the overlay */
        .overlay h3 {
          transition: opacity 0.3s ease;
        }
      `}</style>
    </div>
  );
}
