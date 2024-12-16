// Page.js
"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import VideoBackground from "../components/VideoBackground";
import Footer from "../components/Footer";
import BrochureSection from "../components/brouchureSection";
import AboutUs from "../about-us/page";
import KeyHighlights from "../components/highlights";

const Page = () => {
  const [isVideoSection, setIsVideoSection] = useState(false); // State to control navbar transparency

  return (
    <div>
      {/* Passing isVideoSection to Navbar to control its background */}
      <Navbar isVideoSection={isVideoSection} />

      {/* Video background that triggers navbar transparency */}
      <VideoBackground setIsVideoSection={setIsVideoSection} />

      <main className="relative z-30 text-white py-10 px-5">
        <h1>Welcome to Our Website!</h1>
        <p>Here is some content on the homepage.</p>
      </main>
      <AboutUs />
      <BrochureSection />
      <KeyHighlights />

    </div>
  );
};

export default Page;
