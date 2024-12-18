import React from 'react';

const LuxuryApartmentCard = () => {
  return (
    <div className="bg-[#131313] w-[300px] 2xl:w-[342px] 3xl:w-[360px] h-full">
      <div
        style={{ backgroundImage: "url('/images/productsbgimg.png')" }}
        className="w-full h-full pt-[20px] 3xl:pt-[30px] bg-no-repeat bg-cover 3xl:bg-cover relative z-30"
      >
        <div className="w-[calc(100%+26px)] 2xl:w-[calc(100%+29px)] h-[53px] relative right-[4.50%] 2xl:right-[4%] mx-auto bg-[#fff] shadow-[0px_6px_4px_0px_#00000040]">
          <div className="absolute z-20 bottom-[100%] w-0 h-0 border-r-[15.68px] border-t-[10.2px] border-r-black border-t-transparent"></div>
          <div className="absolute z-20 bottom-[100%] right-0 w-0 h-0 border-l-[14px] border-t-[10.2px] border-l-black border-t-transparent"></div>
          <div className="absolute z-20 top-[100%] right-0 w-0 h-0 border-l-[14px] border-b-[10.2px] border-l-black border-b-transparent"></div>
          <div className="absolute z-20 top-[100%] w-0 h-0 border-r-[15.68px] border-b-[10.2px] border-r-black border-b-transparent"></div>
          <div className="w-full h-full flex justify-center items-center px-1">
            <div
              style={{
                "--pause-on-hover": "running",
                "--pause-on-click": "running",
                "--width": "100%",
                "--transform": "none",
              }}
              className="rfm-marquee-container flex justify-center items-center py-1 px-2"
            >
              <div
                className="rfm-marquee"
                style={{
                  "--play": "running",
                  "--direction": "normal",
                  "--duration": "69.6336669921875s",
                  "--delay": "0s",
                  "--iteration-count": "infinite",
                  "--min-width": "100%",
                }}
              >
                {Array(10)
                  .fill("Ask us for the best available offers")
                  .map((text, index) => (
                    <div key={index} className="rfm-child">
                      <div className="font-supera700 text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-[3%] text-[#131313] ml-5 capitalize whitespace-nowrap">
                        {text}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[27px] pr-2 h-[50%] flex flex-col justify-evenly">
          <div>
            <div className="font-supera600 text-[35px] 2xl:text-[39px] 3xl:text-[39px] leading-snug text-left tracking-[3%] text-[#fff] uppercase">
              High Rise Luxury Apartments
            </div>
          </div>
          <div>
            <div className="font-supera600 text-[50px] 3xl:text-[54px] text-[#fff] flex items-center gap-x-1 2xl:gap-x-1.5">
              2950
              <span className="uppercase font-supera400 text-[12px] 2xl:text-[14.50px] text-[#fff]">
                sqft.
              </span>
            </div>
            <p className="-mt-3 font-supera400 2xl:font-supera500 text-[14px] 2xl:text-[16px] text-[#fff] uppercase">
              Ground + 17 Storey
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-around h-[40%]">
          <div className="h-[39%] flex items-center">
            <div className="w-full bg-white py-3 2xl:py-[15px]">
              <div className="flex justify-around">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[21px] h-[22px] relative">
                    <img
                      alt="building-icon"
                      loading="lazy"
                      decoding="async"
                      className="object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent",
                      }}
                      src="/_next/static/media/our-product-build-icon.eb70c2a2.svg"
                    />
                  </div>
                  <span className="font-supera500 text-[11px] text-[#131313] mt-[6.55px]">Type</span>
                  <div className="font-supera600 text-[12px] 2xl:text-[12px] mt-[-2px] text-[#131313] capitalize">
                    Semi Furnished
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center relative px-[15px] border-x-[0.89px] border-[#5251514D]">
                  <div className="w-[21px] h-[22px] relative">
                    <img
                      alt="rupee-icon"
                      loading="lazy"
                      decoding="async"
                      className="object-contain"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent",
                      }}
                      src="/_next/static/media/our-product-rupee-icon.d3ea52dc.svg"
                    />
                  </div>
                  <span className="font-supera500 text-[11px] text-[#131313] mt-[6.55px]">Price</span>
                  <div className="font-supera600 text-[12px] 2xl:text-[12px] mt-[-2px] text-[#131313] capitalize">
                    On Request
                  </div>
                  <p className="absolute top-[102%] font-supera500 tracking-wider text-[5px] text-[#131313]">
                    T&amp;C Apply*
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[21px] h-[22px] relative">
                    <img
                      alt="key-icon"
                      loading="lazy"
                      decoding="async"
                      className="object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent",
                      }}
                      src="/_next/static/media/our-product-keyicon.64a20d73.svg"
                    />
                  </div>
                  <span className="font-supera500 text-[11px] text-[#131313] mt-[6.55px]">Hand over</span>
                  <div className="font-supera600 text-[12px] 2xl:text-[12px] mt-[-2px] text-[#131313] capitalize">
                    December 2029
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[60%] flex flex-row 2xl:flex-col justify-around items-center 2xl:items-start gap-2 xl:gap-1 2xl:gap-0 px-1 2xl:px-0">
          <div className="mt-1 2xl:ml-[27px] flex justify-start gap-x-[14px] 2xl:gap-x-[40px]">
            <button
              aria-label="call"
              className="group relative cursor-pointer group w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-full bg-transparent hover:bg-[#fff] border-[1px] border-[#FFFFFF] flex justify-center items-center"
            >
              <svg
                className="w-[17px] 3xl:w-[19px] group-hover:fill-[#131313] fill-[#fff]"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.87884 2.41184H5.73448L6.97704 5.51174L4.98053 6.83977C4.86296 6.91804 4.76656 7.02406 4.6999 7.14841C4.63324 7.27276 4.59838 7.41161 4.5984 7.55263V7.57148C4.59891 7.6098 4.60161 7.64825 4.60651 7.68676L4.95172 8.83297L5.32448 9.59832C6.70851 12.6429 10.7996 14.3142 13.6704 12.2211L14.6159 10.8453L14.6242 10.8428L14.9991 10.6212L16.2685 12.1275L16.6045 12.9161L15.7809 13.2159C14.1345 14.0913 10.6455 14.2588 8.28986 12.6004L7.52838 11.5918L8.29002 8.96034C8.53544 8.11877 9.16779 7.50245 9.98379 7.50245C10.4676 7.50245 10.8835 7.61349 11.1816 7.89234L12.2526 8.85843C12.5615 9.13425 12.7518 9.42542 12.7951 9.69671C12.8383 9.96799 12.7299 10.2351 12.5188 10.3532L10.2084 10.9731C9.67034 11.1152 9.12933 10.8925 8.92469 10.4241L8.63692 9.24391C8.58803 9.11844 8.44144 9.0627 8.28891 9.08951L7.9974 9.19477C7.84716 9.21798 7.72961 9.30848 7.67312 9.4309L6.45982 10.7945C6.28834 10.9469 6.05171 11.0225 5.81864 11.0292C5.52994 11.0372 5.24363 10.9615 5.00226 10.8216L3.28876 9.70918C2.95263 9.34841 3.02079 8.7817 3.37795 8.49302C3.73511 8.20433 4.25472 8.25172 4.59126 8.57797L5.18577 9.31588L6.07686 8.12107C6.42429 7.74893 7.03565 7.70777 7.48115 8.04479C8.5856 8.68293 9.82944 9.2198 10.3098 10.1253C10.4186 10.3586 10.5898 10.5715 10.8128 10.7432C11.1414 10.957 11.4535 11.182 11.6751 11.4841L11.9939 12.3208C12.2118 12.6765 12.592 12.9209 13.0011 12.9641C13.5338 13.036 13.8468 13.388 13.9662 13.9112C14.0229 14.0812 13.9649 14.2653 13.8009 14.3946C13.637 14.5238 13.4108 14.4925 13.2829 14.3421C12.4736 13.3792 11.3535 12.7802 9.9225 12.5967L9.29485 12.4269C8.64579 12.2512 8.36095 11.5633 8.5355 10.9145L8.94746 9.60888L7.91974 6.57557L6.47704 4.78842L1.87884 2.41184Z" />
              </svg>
            </button>
          </div>
          <div className="flex justify-start">
            <button
              aria-label="whatsapp"
              className="group relative cursor-pointer group w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-full bg-transparent hover:bg-[#fff] border-[1px] border-[#FFFFFF] flex justify-center items-center"
            >
              <svg
                className="w-[17px] 3xl:w-[19px] group-hover:fill-[#131313] fill-[#fff]"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 14.9849V14.4999C18 13.6395 17.1045 12.8949 16.3485 12.8319C15.9005 12.7929 15.5655 12.4289 15.356 12.2329C14.962 11.7389 14.774 11.3969 14.347 11.1589C14.076 11.0149 13.779 10.9649 13.551 11.0609C13.190 11.2069 12.826 11.4319 12.359 11.7799C12.074 12.0589 11.69 12.1259 11.276 12.1059C9.614 12.0719 8.135 10.6969 7.405 9.1269C7.098 8.4739 6.813 7.7999 6.815 7.2179C6.815 6.7469 7.271 6.3219 7.736 6.0939C8.204 5.8549 8.785 5.8439 9.248 6.0399C9.585 6.1799 9.887 6.3929 10.062 6.6709C10.242 6.9729 10.217 7.4469 10.309 7.9159C10.405 8.4719 10.685 8.9019 11.012 9.1869C11.396 9.4979 11.834 9.5759 12.235 9.6799C12.847 9.8329 13.389 9.9499 13.682 9.9939C14.647 10.0949 15.442 10.7719 15.863 11.7889C16.023 12.1549 16.439 12.4149 16.908 12.4939C17.398 12.5819 17.934 12.6269 18 12.9759C18.036 13.3789 18 14.0239 18 14.9849Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryApartmentCard;
