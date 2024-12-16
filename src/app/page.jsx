"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import VideoBackground from "./components/videobackground";
import Footer from "./components/footer";
import BrochureSection from "./components/brouchureSection";
import AboutUs from "./about-us/page";
import KeyHighlights from "./components/highlights";
import ProductsSection from "./components/ProductSection.jsx";
import ChatIcon from "./components/icon/ChatIcon";
import MobileNavbar from "./components/MobileNav/MobileNavbar";
import EnquiryForm from "./components/EnquiryForm";
import TestimonialSection from "./components/Testimonials";
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
      {/* Conditionally render the MobileNavbar on mobile */}
      {isMobile ? (
        <MobileNavbar isVideoSection={isVideoSection} />
      ) : (
        <Navbar isVideoSection={isVideoSection} />
      )}

      {/* Video background that triggers navbar transparency */}
      <VideoBackground setIsVideoSection={setIsVideoSection} />

      <AboutUs />
      <ChatIcon />
      <BrochureSection />
      <KeyHighlights />
      <ProductsSection />
      <EnquiryForm/>
<TestimonialSection/>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;