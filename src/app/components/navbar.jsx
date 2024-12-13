'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ isVideoSection }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown toggle

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Handle scroll to make the navbar stay fixed
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-black');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed w-full top-0 left-0 z-20 ${
        isVideoSection ? 'bg-transparent' : 'bg-black'
      } transition-all ${isDropdownOpen ? 'h-auto' : 'h-16'}`} // Adjust height dynamically
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/uploads/logo.webp"
            width={150} // Set your desired width
            height={60} // Set your desired height
            className="h-8"
            layout="intrinsic"  // Ensures responsiveness
            objectFit="contain"  // Optionally adjust how the image is resized within the container (e.g., 'cover', 'contain')            alt="Logo"
          />
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar items */}
        <div
          className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex items-center justify-between space-x-6">
            <li>
              <Link href="/#about-us" className="text-white uppercase tracking-wide">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#products" className="text-white uppercase tracking-wide">
                Item
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white uppercase tracking-wide">
                Plans
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white uppercase tracking-wide">
                Location Map
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white uppercase tracking-wide">
                SS
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white uppercase tracking-wide">
                Amenities
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white uppercase tracking-wide">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white uppercase tracking-wide">
                Contact-US
              </Link>
            </li>
            <li className="relative">
              <div
                className="text-white uppercase tracking-wide cursor-pointer"
                onClick={toggleDropdown}
              >
                <Image src="/uploads/togle.png" 
                alt="Toggle" className="w-8 h-8"
                  layout="intrinsic"  // Ensures responsiveness
                width={50} // Set your desired width
                height={40} // Set your desired height
                />
              </div>
              {isDropdownOpen && (
                <ul className="absolute bg-gray-800 text-white mt-2 p-4 rounded-lg shadow-lg right-0">
                  <li className="py-1">
                    <Link href="/#submenu-1">Submenu 1</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/#submenu-2">Submenu 2</Link>
                  </li>
                  <li className="py-1">
                    <Link href="/#submenu-3">Submenu 3</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
