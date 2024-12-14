import React from 'react';

const Property = () => {
  return (
    <div>
      {/* Main Section */}
      <section className="section-gap w-full">
        <div className="bg-[#000] h-[100px] sm:h-[100px] cmd:h-[100px] flex justify-center items-center">
          <div className="w-[1423px] lg:w-[88%] 3xl:container mx-auto flex justify-between items-center px-2 cxs:px-0 md:px-0 lg:px-0 3xl:mx-3 undefined">
            <p className="lg:text-[36px] text-[12px] xs:text-[15px] cxs:text-[20px] sm:text-[22px] md:text-[25px] xl:text-[36px] font-supera500 lg:leading-[49px] text-[#FFF]">
              Are you interested in this Property?
            </p>
            <div>
              <button
                aria-label="connect with us"
                type="button"
                className="bg-[url('/uploads/bgimage.png')] bg-cover bg-right flex items-center gap-x-2 rounded-full uppercase sm:px-6 px-2 py-2 lg:text-[16px] text-[8px] xs:text-[9px] cxs:text-[10px] font-supera700 sm:text-[13px] md:text-[14px] text-[#fff]"
              >
                connect with us
                <svg
                  width="27"
                  height="9"
                  viewBox="0 0 27 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.3536 8.43715L25.9143 4.7964C26.0323 4.6757 26.0976 4.51306 26.0957 4.34424C26.0938 4.17542 26.025 4.01427 25.9043 3.89622L22.2635 0.335514C22.1736 0.247207 22.0594 0.187603 21.9355 0.164257C21.8116 0.140912 21.6836 0.154876 21.5677 0.204381C21.4517 0.253885 21.3531 0.336701 21.2843 0.442327C21.2155 0.547954 21.1796 0.671635 21.1811 0.797692L21.215 3.76198L0.247013 3.99414L0.26118 5.2688L21.2291 5.03484L21.2612 7.99915C21.2624 8.12521 21.301 8.24806 21.3722 8.35213C21.4433 8.4562 21.5438 8.53681 21.6608 8.58372C21.7778 8.63064 21.9061 8.64175 22.0294 8.61566C22.1528 8.58956 22.2656 8.52744 22.3536 8.43715Z"
                    fill="#fff"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View Section */}
      <div className="block md:hidden w-full bg-white">
        <div className="w-full py-4 space-y-1.5">
          {/* First Contact Card */}
          <div className="pr-0.5 bg-backgroud-theme-local bg-right-top w-full">
            <div className="flex items-center gap-4 w-[99%] bg-[#202020] pl-5 pr-2 cxs:px-8 py-4">
              <div className="md:absolute bottom-[160%] lg:bottom-[135%] 2xl:bottom-[130%] min-w-[50px] min-h-[50px] sm:min-w-[55px] sm:min-h-[55px] bg-backgroud-theme-local bg-cover bg-center rounded-full border-[1.5px] border-[#fff] flex justify-center items-center">
                <svg className="w-5 sm:w-6" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.1303 6.39945C15.8039 6.39945 16.9443 7.53984 16.9443 10.2135H19.487C19.487 6.1134 17.2304 3.85676 13.1303 3.85676V6.39945ZM17.4808 13.3194C17.2365 13.0973 16.9155 12.9789 16.5856 12.9891C16.2556 12.9993 15.9425 13.1373 15.7124 13.374L12.6701 16.5028C11.9378 16.363 10.4656 15.904 8.95012 14.3924C7.43468 12.8757 6.97573 11.3996 6.83969 10.6724L9.96593 7.62884C10.2029 7.39889 10.3411 7.08575 10.3513 6.75569C10.3616 6.42563 10.2429 6.10455 10.0206 5.8604L5.32298 0.69493C5.10055 0.450014 4.7914 0.301454 4.4612 0.280802C4.131 0.260149 3.80575 0.369031 3.55454 0.584323L0.795723 2.95029C0.575922 3.17089 0.44473 3.46449 0.427033 3.7754C0.407963 4.09323 0.0443588 11.6221 5.88237 17.4627C10.9754 22.5544 17.355 22.9269 19.112 22.9269C19.3688 22.9269 19.5264 22.9193 19.5684 22.9167C19.8792 22.8993 20.1727 22.7676 20.3922 22.5468L22.7569 19.7867C22.9724 19.5356 23.0815 19.2105 23.061 18.8803C23.0406 18.5501 22.8923 18.2409 22.6476 18.0183L17.4808 13.3194Z" fill="white"></path>
                </svg>
              </div>
              <button aria-label="call 1" className="font-supera400 cxs:font-supera500 no-underline tracking-wider text-sm bxxs:text-base xs:text-lg cxs:text-xl text-white xs:pl-1 cxs:pl-2">
                +91 89680 66698
              </button>
            </div>
          </div>

          {/* Second Contact Card */}
          <div className="pr-0.5 bg-backgroud-theme-local bg-right-top w-full">
            <div className="flex items-center gap-4 w-[99%] bg-[#191919] pl-5 pr-2 cxs:px-8 py-5">
              <div className="md:absolute bottom-[160%] lg:bottom-[135%] 2xl:bottom-[130%] min-w-[50px] min-h-[50px] sm:min-w-[55px] sm:min-h-[55px] bg-backgroud-theme-local bg-cover bg-center rounded-full border-[1.5px] border-[#fff] flex justify-center items-center">
                <svg className="w-5 sm:w-6" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.1303 6.39945C15.8039 6.39945 16.9443 7.53984 16.9443 10.2135H19.487C19.487 6.1134 17.2304 3.85676 13.1303 3.85676V6.39945ZM17.4808 13.3194C17.2365 13.0973 16.9155 12.9789 16.5856 12.9891C16.2556 12.9993 15.9425 13.1373 15.7124 13.374L12.6701 16.5028C11.9378 16.363 10.4656 15.904 8.95012 14.3924C7.43468 12.8757 6.97573 11.3996 6.83969 10.6724L9.96593 7.62884C10.2029 7.39889 10.3411 7.08575 10.3513 6.75569C10.3616 6.42563 10.2429 6.10455 10.0206 5.8604L5.32298 0.69493C5.10055 0.450014 4.7914 0.301454 4.4612 0.280802C4.131 0.260149 3.80575 0.369031 3.55454 0.584323L0.795723 2.95029C0.575922 3.17089 0.44473 3.46449 0.427033 3.7754C0.407963 4.09323 0.0443588 11.6221 5.88237 17.4627C10.9754 22.5544 17.355 22.9269 19.112 22.9269C19.3688 22.9269 19.5264 22.9193 19.5684 22.9167C19.8792 22.8993 20.1727 22.7676 20.3922 22.5468L22.7569 19.7867C22.9724 19.5356 23.0815 19.2105 23.061 18.8803C23.0406 18.5501 22.8923 18.2409 22.6476 18.0183L17.4808 13.3194Z" fill="white"></path>
                </svg>
              </div>
              <button aria-label="call 2" className="font-supera400 cxs:font-supera500 no-underline tracking-wider text-sm bxxs:text-base xs:text-lg cxs:text-xl text-white xs:pl-1 cxs:pl-2">
                +91 89680 66698
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
