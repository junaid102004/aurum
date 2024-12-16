'use client';

import { useState } from 'react';
import Link from 'next/link';

const MobileNavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Manage the open/close state of each section (products, price, etc.)
  const [isOpen, setIsOpen] = useState({
    products: false,
    plans: false,
    gallery: false,
    price: false,
    amenities: false,
    contactUs: false,
  });

  // Toggle the mobile navbar open/close
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Toggle dropdown for each section
  const toggleDropdown = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div>
      {/* Overlay when navbar is open */}
      {isNavbarOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-30"
          onClick={toggleNavbar}
        ></div>
      )}

      {/* Top Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-[url('/uploads/bgimage.png')] text-white z-50">
        <div className="flex items-center justify-between p-4 relative">
          {/* Logo */}
          <div className={`flex items-center ${isNavbarOpen ? 'hidden' : ''}`}>
            <Link href="/">
              <img
                src="/uploads/logo.webp" // Replace with your logo path
                alt="Logo"
                className="w-24 h-8 object-contain z-10" // Ensure the logo is on top, but hidden when navbar is open
              />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          {!isNavbarOpen ? (
            <button
              className="text-white text-3xl md:hidden z-20" // Hamburger should have z-index to appear on top
              onClick={toggleNavbar}
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          ) : (
            <button
              className="text-white text-3xl md:hidden z-20" // Close button on top
              onClick={toggleNavbar}
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      {isNavbarOpen && (
        <div className="fixed top-0 right-0 h-full w-[80%] bg-gray-800 text-white shadow-lg z-40 md:hidden">
          <div className="flex flex-col min-h-full pt-5 relative">
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={toggleNavbar}
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Navigation Links */}
            <nav className="flex-grow mt-7 pb-7">
              <ul className="px-4 py-2 overflow-auto h-[calc(100vh-200px)]">
                {/* Logo */}
                <li className="mb-3">
                  <Link href="/">
                    <img
                      src="/uploads/logo.webp" // Replace with your logo path
                      alt="Logo"
                      className="w-24 h-8 object-contain z-10" // Ensure the logo is on top, but hidden when navbar is open
                    />
                  </Link>
                </li>

                {/* About Us */}
                <li className="mb-3">
                  <Link href="/#about-us">
                    <span className="w-full text-left text-white hover:text-gray-300 text-lg font-supera500 tracking-wider py-2">
                      About Us
                    </span>
                  </Link>
                </li>

                {/* Products Dropdown */}
                <li className="mb-3">
                  <div
                    className="pb-1 pl-3 flex items-center justify-between w-full border-b-[0.50px] border-b-gray-700"
                    onClick={() => toggleDropdown('products')}
                  >
                    <span className="w-full text-left text-white hover:text-gray-300 text-lg font-supera500 tracking-wider py-2">
                      Products
                    </span>
                    <button className="text-white p-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 transition-transform duration-300"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                      </svg>
                    </button>
                  </div>
                  {isOpen.products && (
                    <div className="pl-5 mt-2 text-white">
                      <ul>
                        <li>Product 1</li>
                        <li>Product 2</li>
                        <li>Product 3</li>
                      </ul>
                    </div>
                  )}
                </li>

                {/* Price Dropdown */}
                <li className="mb-3">
                  <div
                    className="pb-1 pl-3 flex items-center justify-between w-full border-b-[0.50px] border-b-gray-700"
                    onClick={() => toggleDropdown('price')}
                  >
                    <span className="w-full text-left text-white hover:text-gray-300 text-lg font-supera500 tracking-wider py-2">
                      Price
                    </span>
                    <button className="text-white p-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 transition-transform duration-300"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                      </svg>
                    </button>
                  </div>
                  {isOpen.price && (
                    <div className="pl-5 mt-2 text-white">
                      <ul>
                        <li>Basic Plan</li>
                        <li>Premium Plan</li>
                        <li>Ultimate Plan</li>
                      </ul>
                    </div>
                  )}
                </li>

                {/* Other Items */}
                <li className="mb-3">
                  <Link href="/amenities#amenities">
                    <span className="w-full text-left text-white hover:text-gray-300 text-lg font-supera500 tracking-wider py-2">
                      Amenities
                    </span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="/gallery">
                    <span className="w-full text-left text-white hover:text-gray-300 text-lg font-supera500 tracking-wider py-2">
                      Gallery
                    </span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="/#contact-us">
                    <span className="w-full text-left text-white hover:text-gray-300 text-lg font-supera500 tracking-wider py-2">
                      Contact Us
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
