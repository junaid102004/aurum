// components/RotateComponent.js
import React from 'react';
import Image from 'next/image';

const RotateComponent = () => {
  return (
    <div className="circle">
      {/* Image stays fixed in the center */}
      <Image 
        src="/uploads/black-star-icon.png" 
        width={25}
        height={25}
        alt="Image" 
      />
      
      {/* Text that will follow the circular path */}
      <svg className="circle-text" viewBox="0 0 200 200">
        <defs>
          {/* Increased the path radius to ensure enough space for the text */}
          <path 
            id="circlePath" 
            d="M 100, 100 m -85, 0 a 85,85 0 1,1 170, 0 a 85,85 0 1,1 -170, 0" 
          />
        </defs>
        <text>
          <textPath href="#circlePath">
            Best Price Deals, 100% Guarantee, Best Value!
          </textPath>
        </text>
      </svg>

      <style jsx>{`
        .circle {
          width: 110px;
          right:250px;
          height: 110px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          top:-100px;
          justify-content: center;
          position: relative;
          opacity: 0.8;
        }

        /* Keyframes for rotating the text around the circle */
        @keyframes rotateText {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .circle-text {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-origin: center;
          animation: rotateText 15s linear infinite;
        }

        .circle-text path {
          fill: none; /* Remove fill from the text path */
        }

        .circle-text text {
          font-size: 20px; /* Reduce font size to prevent overlap */
          fill: black;
          font-weight: bold;
      
        }
      `}</style>
    </div>
  );
};

export default RotateComponent;
