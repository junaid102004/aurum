import Link from 'next/link';
import React from 'react';

const BottomPlans = () => {
  return (
    <div className=" shadow-xl shadow-[#00000039] w-full sm:w-[95%] md:w-[90%] xl:w-[80%] px-2 sm:rounded-b-2xl xl:rounded-b-3xl bg-[#d5d5d3b4] backdrop-blur-md sm:bg-[#fff] overflow-auto z-10 mx-auto">
      <ul className="my-3.5 sm:my-2 2xl:my-3 flex justify-around gap-x-3 sm:gap-x-0">
        <li className="sm:min-w-[130px] px-4 sm:px-6 py-1.5 inline-flex justify-center rounded-lg sm:rounded-full whitespace-nowrap font-supera700 text-sm md:text-[13px] cmd:text-sm lg:text-base xl:text-xl text-center tracking-wide uppercase text-[#121212] sm:text-[#474536] bg-[#FFFFFF80] sm:bg-inherit sm:duration-1000 bg-no-repeat bg-center">
          <Link href="#unit_plan">Unit Plan</Link>
        </li>
        <li className="sm:min-w-[130px] px-4 sm:px-6 py-1.5 inline-flex justify-center rounded-lg sm:rounded-full whitespace-nowrap font-supera700 text-sm md:text-[13px] cmd:text-sm lg:text-base xl:text-xl text-center tracking-wide uppercase text-[#121212] sm:text-[#474536] bg-[#FFFFFF80] sm:bg-inherit sm:duration-1000 bg-no-repeat bg-center">
          <Link href="#site_plan">Site Plan</Link>
        </li>
        <li className="sm:min-w-[130px] px-4 sm:px-6 py-1.5 inline-flex justify-center rounded-lg sm:rounded-full whitespace-nowrap font-supera700 text-sm md:text-[13px] cmd:text-sm lg:text-base xl:text-xl text-center tracking-wide uppercase text-[#121212] sm:text-[#474536] bg-[#FFFFFF80] sm:bg-inherit sm:duration-1000 bg-no-repeat bg-center">
          <Link href="#tower_plan">Tower Plan</Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomPlans;
