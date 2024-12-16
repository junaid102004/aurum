import Image from 'next/image';
import React from 'react';
const UnitPlanImages = () => {
  return (
    <div className="w-full h-[100%] 3xl:h-full flex flex-col sm:flex-row items-center justify-center sm:justify-between py-1 lg:py-4 px-1 sm:px-4">
      <div className="w-full sm:w-1/2 h-1/2 sm:h-full my-1 sm:my-0 px-1.5 md:px-1 cmd:px-0">
        <div className="h-full w-full relative floorplans-unitplan-imgs">
          <Image
            src={"/uploads/3bhk.png"}
            alt="imag"
            width={150}
            height={120}
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="cursor-pointer object-contain"
            style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
            sizes="100vw"
       
          />
          <button
            aria-label="prev button"
            className="group opacity-100 duration-500 absolute z-40 top-[45%] sm:top-[50%] translate-y-[-50%] -left-7 cxs:-left-5 lg:left-1 cursor-pointer w-[40px] sm:w-[50.76px] h-[40px] sm:h-[50.76px] flex sm:hidden justify-center items-center"
          >
            <svg
              className="w-3 fill-[#6B6B6B]"
              viewBox="0 0 22 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.22459 20.5811L17.3853 36.7418L21.4248 32.7024L7.28379 18.5613L21.4248 4.42033L17.3853 0.380859L1.22459 16.5416C0.689024 17.0773 0.388163 17.8038 0.388163 18.5613C0.388163 19.3189 0.689024 20.0454 1.22459 20.5811Z"
              />
            </svg>
          </button>
          <button
            aria-label="next button"
            className="group opacity-100 duration-500 absolute z-40 top-[45%] sm:top-[50%] translate-y-[-50%] -right-7 cxs:-right-5 lg:right-1 cursor-pointer w-[40px] sm:w-[50.76px] h-[40px] sm:h-[50.76px] flex sm:hidden justify-center items-center"
          >
            <svg
              className="w-3 fill-[#6B6B6B]"
              viewBox="0 0 22 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.4309 20.5811L4.27019 36.7418L0.230713 32.7024L14.3717 18.5613L0.230713 4.42033L4.27019 0.380859L20.4309 16.5416C20.9665 17.0773 21.2674 17.8038 21.2674 18.5613C21.2674 19.3189 20.9665 20.0454 20.4309 20.5811Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-2 w-full sm:w-1/2 sm:h-full flex flex-col items-start justify-start sm:justify-center gap-y-1.5 lg:gap-y-0">
        <div className="hidden sm:block">
          <ul className="flex rounded-[7px] overflow-hidden border-[1.04px] border-[#000]">
            <li className="text-[#fff] bg-[#000] cursor-pointer border-r-[0.5px] border-[#000] w-[90px] xs:w-[100px] cmd:w-[130px] h-[32px] lg:w-[135px] cmd:h-[34px] 3xl:h-[37px] flex justify-center items-center font-supera600 text-[12px] cxs:text-[14px] md:text-[15px] 3xl:text-[16px]">
              2950 Sq.Ft
            </li>
          </ul>
        </div>
        <h4 className="mt-[14px] font-supera700 sm:font-supera600 text-[#000] capitalize text-[20px] 2xl:text-[21px]">
          EXCLUSIVE 3+1 Apartment
        </h4>
        <div className="font-supera600 sm:font-supera500 mt-2">
          <h6 className="text-[#322929] sm:text-[#837F7F] text-[20px] 2xl:text-[21px]">
            2950 Sq.Ft
          </h6>
          <p className="mt-0.5 w-full sm:max-w-[550px] text-[#696965] sm:text-[#888884] text-[14px] sm:text-[16px] cmd:text-[17px] 3xl:text-[18px] capitalize pr-4">
            Where comfort meets happiness, everyday!
          </p>
        </div>
        <div className="flex bg-[#fff] rounded-[5.45px] 3xl:overflow-hidden mt-[20px] border-[1px] border-[#000] relative">
          <button
            aria-label="type"
            className="bg-[#000] text-[#FFFFFF] rounded-[5.45px] w-[74px] h-[25px] 3xl:h-[30px] text-[13.5px] 3xl:text-[15px]"
          >
            Type 1
          </button>
        </div>
        <div className="w-full sm:w-auto grid grid-cols-2 grid-flow-row mx-auto xs:mx-0 gap-y-[14px] 3xl:gap-y-[17px] mt-[20px]">
          <div className="w-full lg:w-[195px] sm:border-r-[1.5px] border-r-[#0000]">
            <p className="font-supera600 text-[13px] sm:text-[12px] lg:text-[14px] 2xl:text-[15.48px] text-[#737373] relative after:absolute after:top-[103%] after:left-0 after:w-[60%] after:h-[1.05px] after:bg-[#000]">
              Rera Carpet Area
            </p>
            <h5 className="mt-2 font-supera700 text-[15px] xs:text-[19px] sm:text-[15px] lg:text-[16px] 2xl:text-[19px] text-[#000]">
              1823.61 Sq.Ft
            </h5>
          </div>
          <div className="w-full lg:w-[195px] sm:pl-8">
            <p className="font-supera600 text-[13px] sm:text-[12px] lg:text-[14px] 2xl:text-[15.48px] text-[#737373] relative after:absolute after:top-[103%] after:left-0 after:w-[60%] after:h-[1.05px] after:bg-[#000]">
              Balcony Area
            </p>
            <h5 className="mt-2 font-supera700 text-[15px] xs:text-[19px] sm:text-[15px] lg:text-[16px] 2xl:text-[19px] text-[#000]">
              383.61 Sq.Ft
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitPlanImages;
