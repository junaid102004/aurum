'use client';

import React from 'react';
import Image from 'next/image';

const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen flex">
      {/* Background Video */}
      <video
        src="/videos/mainVideo-background.mp4"
        loop
        preload="metadata"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
        aria-label="Background Video"
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        muted
        autoPlay
      >
        Your browser does not support the video tag.
      </video>

      {/* Background Overlay (only affects background) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />

      {/* Content (Text, Aligned to the Left) */}
      <div className="absolute top-0 left-0 w-[65%] h-full flex flex-col justify-center items-start z-20 text-white px-8">
        <div className="2xl:container mx-auto">
          <h1 className="mb-4 text-4xl sm:text-5xl md:text-5xl font-supera600 uppercase leading-tight">
            Discover Luxury Living at The Medallion Aurum Mohali
          </h1>
          <h2 className="text-l sm:text-2xl md:text-3xl font-supera500 capitalize mt-4">
            Where Elegance Meets Modern Comfort in the Heart of Mohali.
          </h2>
          <h2 className="text-l sm:text-2xl md:text-3xl font-supera500 capitalize mt-4">
            The Medallion Aurum IT City Mohali
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
