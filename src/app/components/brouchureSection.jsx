import Image from 'next/image';

export default function BrochureSection() {
  return (
    <section
      style={{
        backgroundImage: "url('/uploads/AURUM-GATE-NIGHT-HIRES.png')", // Replace with correct path
      }}
      className="w-full h-screen bg-cover bg-top bg-no-repeat relative"
    >
      {/* Overlay for small screens */}
      <div className="absolute top-0 left-0 sm:hidden bg-brochure-section-Shadow w-full h-full"></div>

      {/* Overlay for larger screens */}
      <div className="absolute top-0 left-0 hidden sm:block bg-[#00000053] cmd:bg-[#00000000] w-full h-full"></div>

      {/* Gradient overlay */}
      <div className="w-full h-[54%] bg-[linear-gradient(0deg,#000000_10.53%,#0000001f_100%)] sm:bg-[linear-gradient(100deg,#00000_1.53%,rgba(0,0,0,0)_100%)] absolute z-20 left-0 bottom-0"></div>

      <div className="2xl:container h-full mx-auto flex flex-col sm:flex-row gap-y-[60px] sm:gap-x-[60px] justify-center items-center px-5 xs:px-7 sm:px-10 lg:px-16 cmd:pb-[45px] relative z-30">
        
        {/* Left Section */}
        <div className="flex flex-col items-start w-full sm:w-1/2 lg:w-1/3">
          <h3 className="text-left sm:text-center cmd:text-left font-supera500 text-[27px] cxs:text-[32px] sm:text-[30px] lg:text-[35px] leading-[0.9] text-[#FFFFFF] uppercase flex flex-col items-start gap-x-2 sm:block">
            The pride of
            <span className="bg-[url('/uploads/bgimage.png')] tracking-wide sm:tracking-normal font-supera700 text-[60px] sm:text-[65px] lg:text-[80px] xl:text-[85px] text-transparent bg-clip-text bg-backgroud-theme-local bg-bottom"> Mohali</span>
          </h3>
          <p className="mt-2 font-supera500 text-[15px] bxxs:text-[16px] xs:text-[18px] text-[#fff] capitalize text-center cmd:text-left">
            on international airport road, mohali
          </p>
          <div className="text-left sm:text-left cmd:text-left tracking-wide sm:tracking-normal font-supera500 text-[19px] xs:text-[20px] xl:text-[28px] text-[#FFFFFF] capitalize mt-8 sm:mt-2.5 xl:mt-4">
            3+1 &amp; 4+1 luxury apartments
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-start sm:items-center cmd:items-start">
          <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-x-4">
            {/* Spread Info */}
            <div className="flex flex-row sm:flex-col items-center justify-start sm:justify-normal gap-y-0.5 cmd:block h-[95px] xs:h-[78px] cmd:h-[74px] lg:h-[85px] xl:h-[105px] sm:border-r sm:border-[#FFFFFF] sm:pr-[38px]">
              <div className="sm:pr-0 sm:mx-auto cmd:mx-0 w-[44px] h-[42px] sm:w-[30px] sm:h-[28px] lg:w-[38px] lg:h-[36px] xl:w-[44px] xl:h-[42px] relative">
                <Image
                  src="/images/brouchure-icon-1.svg"
                  alt="Spread Icon"
                  width={44}
                  height={42}
                />
              </div>
              <div className="ml-3 sm:ml-0 pl-3 sm:pl-0 border-l-[2px] sm:border-none border-[#C0C0C0]">
                <div className="whitespace-nowrap text-left sm:text-center cmd:text-left font-supera400 sm:font-supera500 text-[11.5px] sm:text-[12.5px] lg:text-[14px] xl:text-[16px] text-[#fff] pt-1 uppercase tracking-wide">
                  SPREAD ACROSS
                </div>
                <div className="text-center cmd:text-left font-supera600 text-[25px] sm:text-[26px] lg:text-[30px] xl:text-[36px] leading-[1] text-[#fff] uppercase">
                  12.6 acres
                </div>
              </div>
            </div>

            {/* Handover Date */}
            <div className="flex flex-row sm:flex-col items-center justify-start sm:justify-normal gap-y-0.5 cmd:block h-[95px] xs:h-[78px] cmd:h-[74px] lg:h-[85px] xl:h-[105px] sm:pl-[38px]">
              <div className="sm:pr-0 sm:mx-auto cmd:mx-0 w-[44px] h-[38px] sm:w-[30px] sm:h-[28px] lg:w-[38px] lg:h-[36px] xl:w-[44px] xl:h-[42px] relative">
                <Image
                  src="/images/brouchure-icon-2.svg"
                  alt="Handover Date Icon"
                  layout="responsive"  // Makes the image responsive
                  width={44}
                  height={42}
                />
              </div>
              <div className="ml-3 sm:ml-0 pl-3 sm:pl-0 border-l-[2px] sm:border-none border-[#C0C0C0]">
                <div className="whitespace-nowrap text-left sm:text-center cmd:text-left font-supera500 text-[11.5px] sm:text-[12.5px] lg:text-[14px] xl:text-[16px] text-[#fff] pt-1 uppercase">
                  HANDOVER DATE
                </div>
                <div className="text-center cmd:text-left font-supera600 text-[25px] leading-[28px] sm:text-[26px] sm:leading-[26px] lg:text-[30px] lg:leading-[33px] xl:text-[36px] xl:leading-[38px] text-[#fff] uppercase">
                  December 2029
                </div>
              </div>
            </div>
          </div>

          {/* Additional Text */}
          <p className="text-center cmd:text-left mt-1 sm:mt-2 lg:mt-3 xl:mt-10 capitalize font-supera500 sm:font-supera600 text-[14.15px] sm:text-[18px] lg:text-[20px] xl:text-[24px] text-[#fff]">
            10 Towers | G+17 floors | 76% Open area
          </p>

          {/* Button */}
          <div className="bg-backgroud-theme-local bg-right cursor-pointer sm:mx-auto cmd:mx-0 mt-[20px] xs:mt-[28px] sm:mt-[20px] w-[180px] h-[44px] xl:w-[200px] xl:h-[48px] bg-[#D1A963] rounded-full flex justify-center items-center">
  <button aria-label="Brochure" className="flex items-center gap-[12px] px-4 py-2">
    <div>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.62945 13.4604L3.32249 8.15339L4.80844 6.61437L7.56806 9.37399V0.723633H9.69085V9.37399L12.4505 6.61437L13.9364 8.15339L8.62945 13.4604ZM2.26109 17.7059C1.67733 17.7059 1.17776 17.4982 0.762405 17.0829C0.347046 16.6675 0.139013 16.1676 0.138306 15.5831V12.399H2.26109V15.5831H14.9978V12.399H17.1206V15.5831C17.1206 16.1669 16.9129 16.6668 16.4976 17.0829C16.0822 17.499 15.5823 17.7066 14.9978 17.7059H2.26109Z" fill="#fff"></path>
      </svg>
    </div>
    <span className="text-[12px] sm:text-[14px] xl:text-[16px] font-supera500 leading-[1] text-white">Download Brochure</span>
  </button>
</div>

        </div>
      </div>
    </section>
  );
}
