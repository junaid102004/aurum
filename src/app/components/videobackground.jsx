'use client';

import React from 'react';
import Image from 'next/image';

const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        src="/videos/mainVideo-background.mp4"
        loop
        preload="metadata"
        className="w-full h-full object-cover absolute top-0 left-0 z-10"
        aria-label="Background Video"
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        muted
        autoPlay
      >
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20 text-center text-white">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-supera600 uppercase leading-tight">
            Discover Luxury Living at The Medallion Aurum Mohali
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-supera500 capitalize mt-4">
            Where Elegance Meets Modern Comfort in the Heart of Mohali.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
