import React from "react";

const PaymentStructure = () => {
  return (
    <section id="payment-structure" className="section-gap scroll-mt-24">
      <div className="bg-[#333333] relative">
        <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#0000009b]"></div>
        <div className="pt-6 sm:py-10 cmd:py-14 px-3 bxxs:px-5 bg-paymentStructure-section-local">
          <div className="relative z-20">
            <h5 className="text-[#fff] tracking-wider uppercase font-supera700 text-[24px] sm:text-[30px] cmd:text-[35px] text-center">
              Payment Structure
            </h5>
          </div>
          <div className="bg-white relative top-8 sm:top-0 z-20 2xl:container mx-auto rounded-2xl sm:rounded-xl overflow-hidden mb-16 sm:mb-0 sm:mt-8 cmd:mt-14 px-0 bxxs:px-3 xs:px-5 sm:px-16 py-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:shadow-none">
            <h6 className="font-supera600 text-[27px] text-[#494949] text-center mb-2 sm:mb-8">
              Milestone&nbsp;Details
            </h6>
            <div className="grid grid-cols-1 h-[550px] gap-y-[30px] sm:gap-y-[40px] py-2 overflow-y-auto sm:pr-2">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12"
                >
                  <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#141413] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                    <div>
                      {[
                        "Within 30 Days of Booking",
                        "On Start of Raft",
                        "On Completion of Stilt",
                        "On Completion of 3rd Floor",
                        "On Completion of 6th Floor",
                        "On Completion of 9th Floor",
                        "On Completion of 12th Floor",
                        "On Completion of 15th Floor",
                        "On Completion of 18th Floor",
                        "On Start of Plumbing Work",
                        "On Start of PO Work",
                        "On Possession"
                      ][index]}
                    </div>
                    <div className="ml-8 text-right">
                      {[
                        "25% of Sale Price",
                        "10% of Sale Price",
                        "10% of Sale Price",
                        "5% of Sale Price",
                        "5% of Sale Price",
                        "5% of Sale Price",
                        "5% of Sale Price",
                        "5% of Sale Price",
                        "5% of Sale Price",
                        "10% of Sale Price",
                        "10% of Sale Price",
                        "5% of Sale Price"
                      ][index]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentStructure;
