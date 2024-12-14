import React from 'react';

const Homebanner = () => {
  return (
    <div className="mt-[-0.5px] hidden sm:block shadow-xl shadow-[#00000039] absolute top-full w-full sm:w-[95%] md:w-[90%] xl:w-[80%] px-2 sm:rounded-b-2xl xl:rounded-b-3xl bg-[#d5d5d3b4] backdrop-blur-md sm:bg-[#fff] overflow-auto">
      <ul className="my-3.5 sm:my-2 2xl:my-3 flex justify-around gap-x-3 sm:gap-x-0">
        <li className="min-w-[130px] py-1.5 inline-flex justify-center rounded-full font-supera700 text-[12px] md:text-[13px] cmd:text-sm lg:text-base xl:text-xl text-center tracking-wide uppercase text-[#fff] sm:text-[#474536] duration-1000 bg-no-repeat bg-center">
          <a href="#project-walk-through">Project walk through</a>
        </li>
        <li className="min-w-[130px] py-1.5 inline-flex justify-center rounded-full font-supera700 text-[12px] md:text-[13px] cmd:text-sm lg:text-base xl:text-xl text-center tracking-wide uppercase text-[#fff] sm:text-[#474536] duration-1000 bg-no-repeat bg-center">
          <a href="#sample-flat">Sample flat</a>
        </li>
        <li className="min-w-[130px] py-1.5 inline-flex justify-center rounded-full font-supera700 text-[12px] md:text-[13px] cmd:text-sm lg:text-base xl:text-xl text-center tracking-wide uppercase text-[#fff] sm:text-[#474536] duration-1000 bg-no-repeat bg-center">
          <a href="#project-gallery">Project Gallery</a>
        </li>
        <li className="min-w-[130px] py-1.5 inline-flex justify-center rounded-full font-supera700 text-[12px] md:text-[13px] cmd:text-sm lg:text-base xl:text-xl text-center tracking-wide uppercase bg-backgroud-theme-local px-4 cmd:px-6 text-white bg-no-repeat bg-center">
          <a href="#construction-updates">Construction updates</a>
        </li>
      </ul>
    </div>
  );
};

export default Homebanner;
