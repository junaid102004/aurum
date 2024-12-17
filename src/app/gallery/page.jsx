"use client"
import React from 'react'
import Navbar from '../components/navbar'
import GalleryBottom from './GalleryBottom'
import Property from '../components/Property'
import Footer from '../components/footer'
import FAQs from '../components/Faqs'
import ContactUs from '../components/Contact-us'
import Downloads from '../components/Downloads'

const page = () => {
  return (
    <div>
      <Navbar/>
      
      <GalleryBottom/>
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
        <div id="project-walk-through" className="section-gap scroll-mt-[140px]">
      <div className="px-5 sm:px-5 mb-[20px] xl:container mx-auto">
        <h2 
          className="undefined uppercase font-supera700 text-[24px] sm:text-[32px] cmd:text-[36px] text-center text-[#37493C]" 
          style={{ color: 'rgb(10, 19, 37)' }}
        >
          Project Walk Through
        </h2>
        <p 
          className="font-supera600 capitalize cmd:mt-1.5 max-w-full tracking-wide sm:tracking-normal text-[13px] cxs:text-sm sm:text-[15px] md:text-[16px] cmd:text-[18px] leading-[14px] xs:leading-[18px] sm:leading-[20px] cmd:leading-[22px] text-center text-[#5A5454]" 
          style={{ color: 'rgb(90, 84, 84)' }}
        >
          Explore The Medallion Aurum Mohali Project gallery &amp; Construction Updates.
        </p>
      </div>
    </div>
        <section className="hidden sm:block w-full mb-5 mt-7 md:mt-10">
      <div className="w-[95%] md:w-[95%] cmd:w-[88%] 3xl:container lg:mx-auto mx-auto grid grid-cols-12 gap-3">
        <div className="col-span-12 w-full h-[70vh] 3xl:h-[80vh] w-full overflow-hidden relative">
          <div className="relative w-full h-full">
            {/* <video 
              src="/videos/galleryVideo-background.mp4" 
              poster="/images/galleryvideothumbnail.png" 
              loop
              controls
              playsInline
              className="w-full h-full object-cover rounded-lg"
            > */}
                <video
        src="/videos/galleryVideo-background.mp4"
        loop
        preload="metadata"
        className="w-full h-full object-cover absolute top-0 left-0 z-10"
        aria-label="Background Video"
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        muted
        autoPlay
      ></video>
              Your browser does not support the video tag.
            {/* </video> */}
            <div className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center cursor-pointer"></div>
          </div>
        </div>
      </div>
    </section>
        <Property/>
        <FAQs/>
        <ContactUs/>
        <Downloads/>
        <Footer/>
    </div>
  )
}

export default page