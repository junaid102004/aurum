'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NavbarBottomLinks from './Payment/NavBottoms'; // Import NavbarBottomLinks component
import BottomPlans from './plans/BottomsPlans';
import GalleryBottom from '../gallery/GalleryBottom';

const Navbar = () => {
  const pathname = usePathname();  // Get current pathname from Next.js app router
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown menu state
  const [isTransparent, setIsTransparent] = useState(false); // Transparency state
  const [areSubmenusVisible, setAreSubmenusVisible] = useState(false); // State for showing all submenus
  const [lastScrollY, setLastScrollY] = useState(0); // Keep track of last scroll position
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Track navbar visibility

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setAreSubmenusVisible(!areSubmenusVisible);  // Toggle visibility of submenus when clicking toggle
  };

  // Handle scroll-based transparency for navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const currentScrollY = window.scrollY;

      // Handle navbar visibility on scroll
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsNavbarVisible(false);  // hide navbar
      } else {
        // Scrolling up
        setIsNavbarVisible(true);  // show navbar
      }
      setLastScrollY(currentScrollY);
  if (pathname==="/") {
    setIsNavbarVisible(true);  // show navbar
  }
      // Set navbar background based on pathname
      if (pathname === '/') {
        setIsTransparent(true);  // Transparent background for homepage
      } else {
        setIsTransparent(false);  // Solid background for other pages
      }

      // Set navbar background color logic
      if (window.scrollY > 0 || !isTransparent) {
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
  }, [lastScrollY, pathname, isTransparent]);

  // Render Products Submenu
  const renderProductsSubmenu = () => {
    return (
      <div className="space-y-2">
        <Link href="#product1" className="block text-white p-2">Product 1</Link>
        <Link href="#product2" className="block text-white p-2">Product 2</Link>
        <Link href="#product3" className="block text-white p-2">Product 3</Link>
      </div>
    );
  }; 

  const renderLocationSubmenu = () => {
    return (
      <div className="space-y-2">
        <Link href="#product1" className="block text-white p-2">Location1</Link>
        <Link href="#product2" className="block text-white p-2">Location2</Link>
        <Link href="#product3" className="block text-white p-2">Location3</Link>
      </div>
    );
  };

  // Render Plans Submenu
  const renderPlansSubmenu = () => {
    return (
      <div className="space-y-2">
        <Link href="#plan1" className="block text-white p-2">Plan 1</Link>
        <Link href="#plan2" className="block text-white p-2">Plan 2</Link>
        <Link href="#plan3" className="block text-white p-2">Plan 3</Link>
      </div>
    );
  };

  // Render Price Submenu
  const renderPriceSubmenu = () => {
    return (
      <div className="space-y-2">
        <Link href="#price1" className="block text-white p-2">Price 1</Link>
        <Link href="#price2" className="block text-white p-2">Price 2</Link>
        <Link href="#price3" className="block text-white p-2">Price 3</Link>
      </div>
    );
  };

  // Add active class based on pathname for each link
  const getLinkClass = (linkPath) => {
    return pathname === linkPath
      ? 'text-white uppercase tracking-wide underline' // Active link with underline
      : 'text-white uppercase tracking-wide hover:underline'; // Hover effect on non-active links
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed w-full top-0 left-0 z-50 transition-transform ease-in-out ${
          isNavbarVisible ? 'translate-y-0' : '-translate-y-[90px]'
        } pointer-events-auto ${isTransparent ? 'bg-transparent' : 'bg-black'}`}
        style={{
          backgroundImage: !isTransparent ? 'bg-black' : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transitionDuration: '0.3s',  // Adding smooth transition
        }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <div className="relative h-12 w-32">
            <Link href="/">
              <Image
                src="/uploads/logo.webp"
                width={150}
                height={60}
                className="h-8"
                layout="intrinsic"
                objectFit="contain"
                alt="Logo"
              />
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
                <Link href="/#about-us" className={getLinkClass('/#about-us')}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#products" className={getLinkClass('/#products')}>
                  Products
                </Link>
                {areSubmenusVisible && (
                  <div className="bg-black text-white p-2 mt-2 rounded-md">
                    {renderProductsSubmenu()}
                  </div>
                )}
              </li>
              <li>
                <Link href="/plans" className={getLinkClass('/plans')}>
                  Plans
                </Link>
                {areSubmenusVisible && (
                  <div className="bg-black text-white p-2 mt-2 rounded-md">
                    {renderPlansSubmenu()}
                  </div>
                )}
              </li>
              <li>
                <Link href="/location" className={getLinkClass('/location')}>
                  Location Map
                </Link>
              </li>
              <li>
                <Link href="/price" className={getLinkClass('/price')}>
                  Price
                </Link>
                {areSubmenusVisible && (
                  <div className="bg-black text-white p-2 mt-2 rounded-md">
                    {renderPriceSubmenu()}
                  </div>
                )}
              </li>
              <li>
                <Link href="/amenities" className={getLinkClass('/amenities')}>
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className={getLinkClass('/gallery')}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact-us" className={getLinkClass('#contact-us')}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Image
                  onClick={toggleMenu}
                  src="/uploads/Vector5.png"
                  alt="Toggle Image"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Conditionally render NavbarBottomLinks at the bottom */}
        {pathname === '/price' && <NavbarBottomLinks />}
        {pathname === '/plans' && <BottomPlans />}
      {pathname === '/gallery' && <GalleryBottom />}
      </nav>

      
    </>
  );
};

export default Navbar;
