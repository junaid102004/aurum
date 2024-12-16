'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = ({ isVideoSection }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Set initial screen size detection
    const updateWindowSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the function on window resize
    updateWindowSize();

    // Attach the resize event listener
    window.addEventListener('resize', updateWindowSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (!navbar) return;

      // Simplify transparency logic
      const shouldBeTransparent = 
        isVideoSection || 
        pathname === "/" || 
        window.scrollY === 0;

      if (shouldBeTransparent) {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-black');
        setIsTransparent(true);
      } else {
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-transparent');
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set correct background
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, isVideoSection]);

  return (
    <nav
      id="navbar"
      className={`fixed w-full top-0 left-0 z-50 transition-all ${
        isTransparent ? 'bg-transparent' : 'bg-black'
      } pointer-events-auto`}
      style={{
        backgroundImage: isMobile && !isTransparent ? 'url(/uploads/bgImage.png)' : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="relative h-12 w-32">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/uploads/logo.webp"
                width={150}
                height={60}
                className="h-8"
                layout="intrinsic"
                objectFit="contain"
                alt="Logo"
              />
            </a>
          </Link>
        </div>

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
          <ul className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <Link href="#about-us" legacyBehavior>
                <a className="text-white uppercase tracking-wide">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="#products" legacyBehavior>
                <a className="text-white uppercase tracking-wide">Products</a>
              </Link>
            </li>
            <li>
              <Link href="#plans" legacyBehavior>
                <a className="text-white uppercase tracking-wide">Plans</a>
              </Link>
            </li>
            <li>
              <Link href="/location-map" legacyBehavior>
                <a className="text-white uppercase tracking-wide">Location Map</a>
              </Link>
            </li>
            <li>
              <Link href="/price" legacyBehavior>
                <a className="text-white uppercase tracking-wide">Price</a>
              </Link>
            </li>
            <li>
              <Link href="/amenities" legacyBehavior>
                <a className="text-white uppercase tracking-wide">Amenities</a>
              </Link>
            </li>
            <li>
              <Link href="/gallery" legacyBehavior>
                <a className="text-white uppercase tracking-wide">Gallery</a>
              </Link>
            </li>
            <li>
              <Link href="#contact-us" legacyBehavior>
                <a className="text-white uppercase tracking-wide">Contact Us</a>
              </Link>
            </li>
            <li className="relative">
              <div
                className="text-white uppercase tracking-wide cursor-pointer"
                onClick={toggleDropdown}
              >
                <Image
                  src="/uploads/togle.png"
                  alt="Toggle"
                  className="w-8 h-8"
                  layout="intrinsic"
                  width={50}
                  height={40}
                />
              </div>
              {isDropdownOpen && (
                <ul className="absolute bg-gray-800 text-white mt-2 p-4 rounded-lg shadow-lg right-0">
                  <li className="py-1">
                    <Link href="#submenu-1" legacyBehavior>
                      <a>Submenu 1</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="#submenu-2" legacyBehavior>
                      <a>Submenu 2</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="#submenu-3" legacyBehavior>
                      <a>Submenu 3</a>
                    </Link>
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