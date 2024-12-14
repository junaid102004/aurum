import React from 'react';

const ContactUs = () => {
  return (
    <section className="section-gap">
      <div>
        <div className="px-5 sm:px-5 mb-[20px] xl:container mx-auto">
          <h2 style={{ color: "#0a1325", textAlign: "center" }} className="uppercase font-supera700 text-[24px] sm:text-[32px] cmd:text-[36px] text-[#37493C]">
            contact us
          </h2>
          <p style={{ color: "#5A5454" }} className="font-supera600 capitalize cmd:mt-1.5 max-w-full tracking-wide sm:tracking-normal text-[13px] cxs:text-sm sm:text-[15px] md:text-[16px] cmd:text-[18px] leading-[14px] xs:leading-[18px] sm:leading-[20px] cmd:leading-[22px] text-center text-[#5A5454]">
            {/* You can add some contact description here if needed */}
          </p>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="mb-8 w-full md:h-[165px] bg-[#0E0E0E]">
          <div className="md:mt-16 w-[90%] 2xl:w-[70%] h-full mx-auto pb-8 md:py-0 flex gap-7 md:gap-0 justify-start cxs:justify-around md:justify-between items-start md:items-center flex-wrap md:flex-nowrap">
            <div className="relative md:w-[200px] cmd:w-[250px] flex flex-row md:flex-col justify-start md:justify-center items-center gap-x-4 md:gap-x-0">
              <div className="md:absolute bottom-[160%] lg:bottom-[135%] 2xl:bottom-[130%] min-w-[50px] min-h-[50px] sm:size-[61.33px] bg-backgroud-theme-local bg-cover bg-center rounded-full border-[1.5px] border-[#fff] flex justify-center items-center">
                {/* Call Icon */}
                <svg className="w-5 sm:w-6" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.1303 6.39945C15.8039 6.39945 16.9443 7.53984 16.9443 10.2135H19.487C19.487 6.1134 17.2304 3.85676 13.1303 3.85676V6.39945ZM17.4808 13.3194C17.2365 13.0973 16.9155 12.9789 16.5856 12.9891C16.2556 12.9993 15.9425 13.1373 15.7124 13.374L12.6701 16.5028C11.9378 16.363 10.4656 15.904 8.95012 14.3924C7.43468 12.8757 6.97573 11.3996 6.83969 10.6724L9.96593 7.62884C10.2029 7.39889 10.3411 7.08575 10.3513 6.75569C10.3616 6.42563 10.2429 6.10455 10.0206 5.8604L5.32298 0.69493C5.10055 0.450014 4.7914 0.301454 4.4612 0.280802C4.131 0.260149 3.80575 0.369031 3.55454 0.584323L0.795723 2.95029C0.575922 3.17089 0.44473 3.46449 0.427033 3.7754C0.407963 4.09323 0.0443588 11.6221 5.88237 17.4627C10.9754 22.5544 17.355 22.9269 19.112 22.9269C19.3688 22.9269 19.5264 22.9193 19.5684 22.9167C19.8792 22.8993 20.1727 22.7676 20.3922 22.5468L22.7569 19.7867C22.9724 19.5356 23.0815 19.2105 23.061 18.8803C23.0406 18.5501 22.8923 18.2409 22.6476 18.0183L17.4808 13.3194Z" fill="white"></path>
                </svg>
              </div>
              <div className="font-supera500 flex flex-col bxxs:flex-row cxs:flex-col gap-x-6 tracking-wide text-[13.5px] xs:text-[18px] cxs:text-[15px] lg:text-[18px] xl:text-[20px] text-[#fff]">
                <button aria-label="call-1">+91 89680 66698</button>
                <button aria-label="call-2">+91 99880 10405</button>
              </div>
            </div>

            <div className="relative md:w-[200px] cmd:w-[250px] flex flex-row md:flex-col justify-start md:justify-center items-center gap-x-4 md:gap-x-0">
              <div className="md:absolute bottom-[265%] lg:bottom-[220%] min-w-[50px] min-h-[50px] sm:size-[61.33px] bg-backgroud-theme-local bg-cover bg-center rounded-full border-[1.5px] border-[#fff] flex justify-center items-center">
                {/* Email Icon */}
                <svg className="w-5 sm:w-6" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.0201 0.0644531H0.0600586V21.6325H27.0201V0.0644531ZM24.3241 5.45646L13.5401 12.1965L2.75606 5.45646V2.76046L13.5401 9.50046L24.3241 2.76046V5.45646Z" fill="white"></path>
                </svg>
              </div>
              <div className="font-supera500 tracking-wide text-[13.5px] xs:text-[18px] cxs:text-[15px] lg:text-[18px] xl:text-[20px] text-[#fff]">
                <button aria-label="info@realtynivesh.com">info@realtynivesh.com</button>
              </div>
            </div>

            <div className="relative cxs:md:w-[250px] cmd:w-[340px] flex flex-row md:flex-col justify-start md:justify-center items-center gap-x-4 md:gap-x-0">
              <div className="md:absolute bottom-[125%] lg:bottom-[110%] min-w-[50px] min-h-[50px] sm:size-[61.33px] bg-backgroud-theme-local bg-cover bg-center rounded-full border-[1.5px] border-[#fff] flex justify-center items-center">
                {/* Location Icon */}
                <svg className="w-5 sm:w-6" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2784 0.137207C7.63045 0.140331 5.09189 1.19359 3.21953 3.06595C1.34717 4.93831 0.293906 7.47688 0.290782 10.1248C0.287611 12.2887 0.994435 14.3938 2.30283 16.1173C2.30283 16.1173 2.57521 16.476 2.6197 16.5277L10.2784 25.5601L17.9407 16.5232C17.9806 16.4751 18.2539 16.1173 18.2539 16.1173L18.2548 16.1146C19.5626 14.3919 20.2691 12.2877 20.2659 10.1248C20.2628 7.47688 19.2096 4.93831 17.3372 3.06595C15.4648 1.19359 13.0285 0.140331 10.2784 0.137207ZM10.2784 15.0003C7.95302 15.0003 6.01944 13.0667 6.01944 10.7413C6.01944 8.4159 7.95302 6.4823 10.2784 6.4823C12.6038 6.4823 14.5374 8.4159 14.5374 10.7413C14.5374 13.0667 12.6038 15.0003 10.2784 15.0003Z" fill="white"></path>
                </svg>
              </div>
              <div className="font-supera500 tracking-wide text-[13.5px] xs:text-[18px] cxs:text-[15px] lg:text-[18px] xl:text-[20px] text-[#fff]">
                <button aria-label="Location" onClick={() => window.open("https://goo.gl/maps/YZkXACzZa76H9dQF9", "_blank")}>
                  Showroom No. 12 Level 2, Gateway Tower, Westend Mall, Janakpuri
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
