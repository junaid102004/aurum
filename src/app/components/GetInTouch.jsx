import React from 'react';
import Head from 'next/head';

const GetInTouch = () => {
  return (
    <div className="bg-black grid grid-cols-12 w-full h-full">
      {/* Add flag-icon-css via CDN in the head section */}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flag-icon-css/css/flag-icons.min.css"
        />
      </Head>

      {/* First Column (Image - Full Width on Mobile and 35% width on Medium and Larger Devices) */}
      <div className="col-span-12 md:col-span-4 bg-[url('/uploads/AURUM-CLUB-BECK-HIRES.png')] bg-cover bg-center h-[750px] md:h-full md:block hidden">
        {/* Content inside the first column (optional) */}
      </div>

      {/* Second Column (Form - 100% width on Mobile and 65% width on Medium and Larger Devices) */}
      <div className="col-span-12 md:col-span-8 p-4 relative bg-black bg-[url('/uploads/AURUM-CLUB-BECK-HIRES.png')] bg-cover bg-center md:bg-none h-auto md:h-full">
        {/* Dark Transparent Overlay for Mobile */}
        <div className="absolute inset-0 bg-black bg-opacity-50 md:hidden"></div>

        <div className="mx-auto flex flex-col justify-center items-center mt-[24px] z-10 relative">
          <h2 className="font-supera700 text-[30px] sm:text-[33.5px] leading-[1] text-[#F3F9FF] uppercase flex items-center gap-x-2">
            get in
            <span className='font-bebas_Neue font-medium tracking-wide text-[60px] sm:text-[74px] bg-clip-text text-transparent bg-[url("/uploads/bgimage.png")] font-extrabold bg-cover bg-right-bottom'>
              Touch
            </span>
          </h2>
          <p className="text-white">You have any question? Feel free to contact us..</p>
        </div>

        <form className="relative z-10">
          <div className="m-5 items-center grid gap-4 mb-6 mt-4">
            {/* First Name and Last Name Fields (In a row on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name Field */}
              <div>
                <label htmlFor="first_name" className="mb-2 text-sm font-medium text-white dark:text-white">First name</label>
                <div className="w-full bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px] font-supera500 flex flex-col p-2">
                  <input
                    type="text"
                    id="first_name"
                    className="w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#909090]"
                    placeholder="John"
                    required
                  />
                </div>
              </div>

              {/* Last Name Field */}
              <div>
                <label htmlFor="last_name" className="mb-2 text-sm font-medium text-white dark:text-white">Last name</label>
                <div className="w-full bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px] font-supera500 flex flex-col p-2">
                  <input
                    type="text"
                    id="last_name"
                    className="w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#909090]"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email and Contact Fields (In a row on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="mb-2 text-sm font-medium text-white dark:text-white">Email address</label>
                <div className="w-full bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px] font-supera500 flex flex-col p-2">
                  <input
                    type="email"
                    id="email"
                    className="w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#909090]"
                    placeholder="john.doe@company.com"
                    required
                  />
                </div>
              </div>

              {/* Contact Field */}
              <div>
                <label htmlFor="contact" className="mb-2 text-sm font-medium text-white dark:text-white">Contact</label>
                <div className="w-full bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px] font-supera500 flex flex-col p-2">
                  <input
                    type="text"
                    id="contact"
                    className="w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] placeholder:text-[#909090]"
                    placeholder="123456789"
                    required
                  />
                </div>
              </div>
            </div>

            {/* City Fields (In a row on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full">
              <div className="w-full bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px] font-supera500 flex flex-col p-2">
                <select
                  id="city"
                  className="w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] mb-2 placeholder:text-[#909090]"
                  required
                >
                  <option value="">Select your city</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Houston">Houston</option>
                  <option value="Miami">Miami</option>
                  <option value="San Francisco">San Francisco</option>
                </select>
              </div>
              <div className="w-full bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px] font-supera500 flex flex-col p-2">
                <select
                  id="city"
                  className="w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] mb-2 placeholder:text-[#909090]"
                  required
                >
                  <option value="">Select your city</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Houston">Houston</option>
                  <option value="Miami">Miami</option>
                  <option value="San Francisco">San Francisco</option>
                </select>
              </div>
              <div className="w-full bg-[#232323] border-[0.74px] border-[#F2F9FF] rounded-[6px] font-supera500 flex flex-col p-2">
                <select
                  id="city"
                  className="w-full h-full bg-transparent outline-none px-5 text-[14.78px] text-white font-supera500 placeholder:font-supera500 placeholder:text-[14.78px] mb-2 placeholder:text-[#909090]"
                  required
                >
                  <option value="">Select your city</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Houston">Houston</option>
                  <option value="Miami">Miami</option>
                  <option value="San Francisco">San Francisco</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
