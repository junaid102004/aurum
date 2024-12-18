"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import UnitPlanImages from './UnitPlanImages';
import UnitPlan3DView from './UnitPlan3DView';
import UnitPlan4Bhk from './unitPLan4bhk';
import Footer from '../footer';
import ContactUs from '../newCom';
import MapSection from '../MapSection';

const UnitPlan = () => {
  const [selectedUnit, setSelectedUnit] = useState('3+1 BHK');  // State to manage the selected unit
  const [selectedView, setSelectedView] = useState('2D View'); // State to manage selected view (2D or 3D)

  // Handle the unit selection
  const handleUnitClick = (unit) => {
    setSelectedUnit(unit);
  };

  // Handle the view selection
  const handleViewClick = (view) => {
    setSelectedView(view);
  };

  return (
    <div className="px-5 sm:px-5 mb-[20px] xl:container mx-auto">
      <h2
        className="uppercase font-supera700 text-[24px] sm:text-[32px] cmd:text-[36px] text-center text-[#37493C]"
        style={{ color: '#0A1325' }}
      >
        Unit plan
      </h2>
      <p
        className="font-supera600 capitalize cmd:mt-1.5 max-w-full tracking-wide sm:tracking-normal text-[13px] cxs:text-sm sm:text-[15px] md:text-[16px] cmd:text-[18px] leading-[14px] xs:leading-[18px] sm:leading-[20px] cmd:leading-[22px] text-center text-[#5A5454]"
        style={{ color: '#5A5454' }}
      >
        Explore The Medallion Aurum floor plans, Site plan & Tower plans
      </p>

      {/* Unit Selection */}
      <div className="w-full flex-col sm:flex-row flex justify-between items-start bxxs:items-center lg:px-5 mb-5">
        <div className="pt-2 bxxs:pt-0 w-full sm:w-auto">
          <div className="w-full opacity-100 duration-500 relative z-20 flex self-start justify-between sm:justify-center items-center gap-1.5 xs:gap-3 md:gap-5 border-b-[2px] sm:border-none border-[#D9D9D9]">
            <div
              onClick={() => handleUnitClick('3+1 BHK')}
              className={`mb-1 cxs:mb-0 w-full h-[32px] md:h-[36px] px-5 rounded-[9.42px] sm:hover:bg-[#000] sm:hover:text-white cursor-pointer sm:border-[0.94px] border-[#202622] leading-tight cxs:leading-normal whitespace-nowrap font-supera700 sm:font-supera500 text-lg xs:text-xl sm:text-[14px] cmd:text-[16px] tracking-[8%] text-center flex justify-center items-center uppercase ${selectedUnit === '3+1 BHK' ? 'bg-[#000] text-[#fff]' : 'bg-transparent text-[#000]'}`}
            >
              3+1 BHK
            </div>
            <div
              onClick={() => handleUnitClick('4+1 BHK')}
              className={`mb-1 cxs:mb-0 w-full h-[32px] md:h-[36px] px-5 rounded-[9.42px] sm:hover:bg-[#000] sm:hover:text-white cursor-pointer sm:border-[0.94px] border-[#202622] leading-tight cxs:leading-normal whitespace-nowrap font-supera700 sm:font-supera500 text-lg xs:text-xl sm:text-[14px] cmd:text-[16px] tracking-[8%] text-center flex justify-center items-center uppercase ${selectedUnit === '4+1 BHK' ? 'bg-[#000] text-[#fff]' : 'bg-transparent text-[#868484]'}`}
            >
              4+1 BHK
            </div>
            <div className="block sm:hidden w-1/2 rounded border-b-[4px] border-b-[#000] absolute z-30 top-[95%] left-[0%] duration-300"></div>
          </div>
        </div>
        <div className="self-start mt-4 xs:mt-5 sm:mt-0 mb-0.5 sm:mb-0 w-[170px] h-[33px] md:h-[42px] border-[1.07px] rounded-[7px] sm:rounded-[10px] border-[#000] overflow-hidden relative flex justify-center">
          {/* View Toggle */}
          <div
            onClick={() => handleViewClick('2D View')}
            className={`w-1/2 h-full text-[#fff] px-2 sm:px-0 cursor-pointer relative z-30 font-supera600 sm:font-supera500 text-[13px] sm:text-[14px] md:text-[15px] capitalize tracking-wide text-center flex items-center justify-center ${selectedView === '2D View' ? 'bg-[#000] text-[#fff]' : 'bg-transparent text-[#000]'} transition-all duration-300`}
          >
            2D View
          </div>
          <div
            onClick={() => handleViewClick('3D View')}
            className={`w-1/2 h-full text-[#000] px-2 sm:px-0 cursor-pointer relative z-30 font-supera600 sm:font-supera500 text-[13px] sm:text-[14px] md:text-[15px] capitalize tracking-wide text-center flex items-center justify-center ${selectedView === '3D View' ? 'bg-[#000] text-[#fff]' : 'bg-transparent text-[#000]'} transition-all duration-300`}
          >
            3D View
          </div>
          {/* Background animation */}
          <div className={`w-[50%] h-full sm:rounded-[7.47px] absolute z-20 top-0 left-[0%] transition-all duration-300 ${selectedView === '3D View' ? 'bg-[#000]' : 'bg-[#fff]'}`}></div>
        </div>
      </div>

      {/* Swiper Image Slider */}
      <Swiper spaceBetween={50} slidesPerView={1} loop>
        {selectedUnit === '3+1 BHK' && selectedView === '2D View' && (
          <SwiperSlide>
            <UnitPlanImages />
          </SwiperSlide>
        )}
        {selectedUnit === '3+1 BHK' && selectedView === '3D View' && (
          <SwiperSlide>
            <UnitPlan3DView />
          </SwiperSlide>
        )}
        {selectedUnit === '4+1 BHK' && selectedView === '2D View' && (
          <SwiperSlide>
         <UnitPlan4Bhk/>
          </SwiperSlide>
        )}
        {selectedUnit === '4+1 BHK' && selectedView === '3D View' && (
          <SwiperSlide>
                  <UnitPlan4Bhk/>

          </SwiperSlide>
        )}
      </Swiper>
    
      <ContactUs/>
      <MapSection/>
    </div>
  );
};

export default UnitPlan;
