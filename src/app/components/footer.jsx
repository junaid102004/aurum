import React from 'react';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="section-gap mt-10">
      <div
        style={{ backgroundImage: "url('/uploads/AURUM-GATE-NIGHT-HIRES.png')" }}
        className="w-full"
      >
        
        <div className="w-full h-full bg-[#000000d7]">
          
          <div className="lg:container mx-auto pt-[35px]">
          <a href="/" className="block mx-auto relative w-[300px] sm:w-[350px] h-[100px]">

<div className="flex justify-between items-center w-full">
  <Image
    alt="footer-logo"
    loading="lazy"
    layout="responsive"  // Makes the image responsive
    width={150}
    height={40}
    decoding="async"
    className="w-[48%] h-full object-contain"
    src="/uploads/image.png" // Correct image path
  />
  <Image
    alt="footer-logo"
    loading="lazy"
    layout="responsive"  // Makes the image responsive
    width={150}
    height={40}
    className="w-[48%] h-full object-contain"
    src="/uploads/image.png" // Correct image path
  />
</div>
</a>

            {/* Logo - Two images side by side */}
          
            <hr className="max-w-[1257px] mx-5 lg:mx-auto border-[#787777] mt-[35px] mb-[25px]" />

            <div className="flex flex-col gap-y-[38px]">
              {/* Navigation Links */}
              <ul className="flex justify-center flex-wrap gap-3 md:gap-x-6 px-2 sm:px-0">
                {[
                  { label: 'About Us', href: '/#about-us' },
                  { label: 'Products', href: '/#products' },
                  { label: 'Location Map', href: '/location' },
                  { label: 'Plans', href: '/plans' },
                  { label: 'Price', href: '/price' },
                  { label: 'Amenities', href: '/amenities' },
                  { label: 'Gallery', href: '/gallery' },
                  { label: 'FAQ', href: '/#faqs' },
                  { label: 'Downloads', href: '/#download' },
                  { label: 'Contact Us', href: '/#contact-us' },
                ].map(({ label, href }, index) => (
                  <a key={index} href={href}>
                    <li className="text-[12px] cmd:text-[14px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[16px] font-supera500 text-white uppercase tracking-wide">
                      {label}
                    </li>
                  </a>
                ))}
              </ul>

              {/* Contact Buttons */}
              <div className="flex justify-around flex-wrap gap-y-6 gap-x-4 px-2">
                {[
                  { label: '+91 89680 66698', aria: 'call 1' },
                  { label: '+91 99880 10405', aria: 'call 2' },
                ].map(({ label, aria }, index) => (
                  <button key={index} aria-label={aria} className="flex items-center gap-2.5">
                    <span>
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.44 9.609c-1.16-1.039-2.479-2.147-3.891-3.26-.298-.256-.658-.47-1.061-.62-1.454-.401-3.011.62-3.011 2.087 0 1.324 1.432 2.323 2.525 3.001.682.503 1.276 1.187 1.906 1.784 1.595 1.409 3.647 3.092 2.349 5.28-1.352 2.335-5.129 0.994-7.367-0.995-1.657-1.073-3.588-2.296-4.201-4.379-1.327-3.636 0.254-8.012 4.768-8.002 1.256 0 2.506 0.09 3.782 0.726 2.02 0.898 3.626 3.089 4.051 5.151.428 1.571-0.845 3.202-2.253 3.302z"
                        />
                      </svg>
                    </span>
                    <h6 className="font-supera500 text-white text-[15px] md:text-[18px] lg:text-[19px]">
                      {label}
                    </h6>
                  </button>
                ))}

                {/* Social Media Icons */}
                <div className="flex gap-[13px]">
                  {['facebook', 'twitter', 'instagram'].map((platform, index) => (
                    <div key={index}>
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Social Media Icons Paths */}
                        {platform === 'facebook' && (
                          <path
                            d="M14 2H13V3H14C15.104 3 16 3.896 16 5V6H14V7H16V14H14V7H13V14H11V7H9V14H7V5C7 3.896 7.896 3 9 3H11V2H9C7.896 2 7 2.896 7 4V14H2V16H7V22H9V16H11V22H13V16H14V22H16V16H14V14H13V5C13 3.896 13.896 2 14 2Z"
                          />
                        )}
                        {platform === 'twitter' && (
                          <path
                            d="M22 5.508C22 5.93 21.977 6.349 21.937 6.764C22.88 6.305 23.701 5.598 24 4.75C23.16 5.21 22.26 5.558 21.32 5.773C20.429 4.978 19.273 4.509 18 4.509C15.671 4.509 14 5.653 14 7.075C14 7.481 14.15 7.869 14.37 8.19C11.935 8.048 9.753 6.662 8.61 4.698C8.229 5.138 8.017 5.704 8.017 6.321C8.017 7.616 8.907 8.68 10.236 9.208C9.539 9.207 8.892 8.948 8.373 8.499C8.164 8.209 8.062 7.856 8.094 7.498C8.141 7.116 8.386 6.799 8.735 6.703C9.07 6.609 9.411 6.722 9.615 7.048C10.447 8.011 12.136 8.437 13.65 7.697C14.436 7.354 15.03 6.616 15.283 5.777C15.684 5.132 16.311 4.588 17 4.588C18.101 4.588 19.044 5.05 19.713 5.815C20.662 5.442 21.56 5.308 22 5.508Z"
                          />
                        )}
                        {platform === 'instagram' && (
                          <path
                            d="M13 2C7.488 2 3 6.488 3 12C3 17.512 7.488 22 13 22C18.512 22 23 17.512 23 12C23 6.488 18.512 2 13 2ZM13 20C8.03 20 4 15.97 4 12C4 8.03 8.03 4 13 4C17.97 4 22 8.03 22 12C22 15.97 17.97 20 13 20ZM13 6.5C10.507 6.5 8.5 8.507 8.5 11C8.5 13.493 10.507 15.5 13 15.5C15.493 15.5 17.5 13.493 17.5 11C17.5 8.507 15.493 6.5 13 6.5ZM13 14C11.896 14 11 13.104 11 12C11 10.896 11.896 10 13 10C14.104 10 15 10.896 15 12C15 13.104 14.104 14 13 14Z"
                          />
                        )}
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="max-w-[1257px] mx-5 lg:mx-auto border-[#787777] mt-[35px] mb-[25px]" />

             
              {/* Copyright */}
              <div className="flex justify-center text-white text-[15px]">
                <p>© 2024 All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
