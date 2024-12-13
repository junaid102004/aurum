import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const StatisticsSection = () => {
  const [statsShown, setStatsShown] = useState(false);

  const [number1, setNumber1] = useState(0); // Acres Land Area
  const [number2, setNumber2] = useState(0); // Luxury Apartments
  const [number3, setNumber3] = useState(0); // Luxury Towers
  const [number4, setNumber4] = useState(0); // Another number (example: 100,000)

  useEffect(() => {
    // Function to animate the numbers
    const animateNumbers = () => {
      if (statsShown) return;

      setStatsShown(true);

      // Incrementing number1 (up to 12.6)
      const interval1 = setInterval(() => {
        setNumber1(prev => {
          if (prev < 12.6) {
            return parseFloat((prev + 0.1).toFixed(1));  // Fix to 1 decimal
          }
          clearInterval(interval1);
          return 12.6;
        });
      }, 50);

      // Incrementing number2 (up to 700)
      const interval2 = setInterval(() => {
        setNumber2(prev => {
          if (prev < 700) {
            return prev + 10;
          }
          clearInterval(interval2);
          return 700;
        });
      }, 50);

      // Incrementing number3 (up to 10 million)
      const interval3 = setInterval(() => {
        setNumber3(prev => {
          if (prev < 10000000) {
            return prev + 100000;  // Increment by 100k
          }
          clearInterval(interval3);
          return 10000000;
        });
      }, 50);

      // Incrementing number4 (up to 100,000)
      const interval4 = setInterval(() => {
        setNumber4(prev => {
          if (prev < 100000) {
            return prev + 1000;
          }
          clearInterval(interval4);
          return 100000;
        });
      }, 50);
    };

    // Intersection Observer to trigger animation on scroll
    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        animateNumbers();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // trigger when 50% of the section is visible
    });

    const section = document.getElementById('statistics-section');
    if (section) {
      observer.observe(section);
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [statsShown]);

  return (
    <section
      id="statistics-section"
      className="bg-[#F0F0F0]"
      style={{
        backgroundImage: "url('/images/staticbgImage.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="2xl:container mx-auto py-[55px] cxs:py-[60px] 3xl:py-[68px] px-[14px] xs:px-[30px] cmd:px-[45px]">
        <div className="grid grid-cols-2 gap-x-5 gap-y-7 xs:gap-6 cxs:gap-8 md:gap-0 md:flex md:justify-between cmd:justify-around">
          
          {/* First Column - Acres Land Area */}
          <div className="w-full md:w-auto flex justify-start md:justify-center cmd:border-r-[1.29px] border-[#D8D8D8] pr-[4px] cmd:pr-[2%] lg:pr-[2%] 2xl:pr-[4%]">
            <div className="w-full md:w-auto flex items-center gap-2.5 pb-2.5 sm:pb-1.5 lg:pb-2.5 relative before:absolute before:bottom-0 before:left-0 before:w-[90%] before:h-[1.74px] before:bg-[#AA601F] sm:before:bg-[#AA601F]">
              <div className="w-[35px] xs:w-[40px] sm:w-[50px] md:w-[35px] cmd:w-[40px] lg:w-[50px] xl:w-[58px] h-[38px] xs:h-[44px] sm:h-[53px] md:h-[40px] cmd:h-[44px] lg:h-[53px] xl:h-[61px] relative">
                <Image
                  alt="Icon 1"
                  src="/_next/static/media/statics-icon1.740aa650.svg"
                  width={150}
                  layout="responsive"  // Makes the image responsive
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-[25px] leading-[20px] bxxs:text-[32px] xs:leading-[26px] cxs:text-[40px] cxs:leading-[36px] sm:text-[45px] sm:leading-[40px] md:text-[35px] md:leading-[30px] cmd:text-[40px] cmd:leading-[36px] lg:text-[45px] lg:leading-[40px] xl:text-[55px] xl:leading-[49px] font-supera800 text-[#4D4E4D]">
                  {number1}
                </h4>
                <div className="text-[13px] cxs:text-[14px] sm:text-[16px] md:text-[14px] cmd:text-[14px] lg:text-[16px] xl:text-[18px] mt-2 leading-tight font-supera700 sm:font-supera600 text-[#474747]">
                  Acres Land Area
                </div>
              </div>
            </div>
          </div>

          {/* Second Column - Luxury Apartments */}
          <div className="w-full md:w-auto flex justify-start md:justify-center cmd:border-r-[1.29px] border-[#D8D8D8] pr-[4px] cmd:pr-[2%] lg:pr-[2%] 2xl:pr-[4%]">
            <div className="w-full md:w-auto flex items-center gap-2.5 pb-2.5 sm:pb-1.5 lg:pb-2.5 relative before:absolute before:bottom-0 before:left-0 before:w-[90%] before:h-[1.74px] before:bg-[#AA601F] sm:before:bg-[#AA601F]">
              <div className="w-[35px] xs:w-[40px] sm:w-[50px] md:w-[35px] cmd:w-[40px] lg:w-[50px] xl:w-[58px] h-[38px] xs:h-[44px] sm:h-[53px] md:h-[40px] cmd:h-[44px] lg:h-[53px] xl:h-[61px] relative">
                <Image
                  alt="Icon 2"
                  width={150}
                  layout="responsive"  // Makes the image responsive
                  height={40}
                  src="/_next/static/media/statics-icon2.1c319a9e.svg"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-[25px] leading-[20px] bxxs:text-[32px] xs:leading-[26px] cxs:text-[40px] cxs:leading-[36px] sm:text-[45px] sm:leading-[40px] md:text-[35px] md:leading-[30px] cmd:text-[40px] cmd:leading-[36px] lg:text-[45px] lg:leading-[40px] xl:text-[55px] xl:leading-[49px] font-supera800 text-[#4D4E4D]">
                  {number2}
                </h4>
                <div className="text-[13px] cxs:text-[14px] sm:text-[16px] md:text-[14px] cmd:text-[14px] lg:text-[16px] xl:text-[18px] mt-2 leading-tight font-supera700 sm:font-supera600 text-[#474747]">
                  Luxury Apartments
                </div>
              </div>
            </div>
          </div>

          {/* Third Column - Luxury Towers */}
          <div className="w-full md:w-auto flex justify-start md:justify-center cmd:border-r-[1.29px] border-[#D8D8D8] pr-[4px] cmd:pr-[2%] lg:pr-[2%] 2xl:pr-[4%]">
            <div className="w-full md:w-auto flex items-center gap-2.5 pb-2.5 sm:pb-1.5 lg:pb-2.5 relative before:absolute before:bottom-0 before:left-0 before:w-[90%] before:h-[1.74px] before:bg-[#AA601F] sm:before:bg-[#AA601F]">
              <div className="w-[35px] xs:w-[40px] sm:w-[50px] md:w-[35px] cmd:w-[40px] lg:w-[50px] xl:w-[58px] h-[38px] xs:h-[44px] sm:h-[53px] md:h-[40px] cmd:h-[44px] lg:h-[53px] xl:h-[61px] relative">
                <Image
                  alt="Icon 3"
                  width={150}
                  height={40}
                  layout="responsive"  // Makes the image responsive
                  src="/_next/static/media/statics-icon3.1c319a9e.svg"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-[25px] leading-[20px] bxxs:text-[32px] xs:leading-[26px] cxs:text-[40px] cxs:leading-[36px] sm:text-[45px] sm:leading-[40px] md:text-[35px] md:leading-[30px] cmd:text-[40px] cmd:leading-[36px] lg:text-[45px] lg:leading-[40px] xl:text-[55px] xl:leading-[49px] font-supera800 text-[#4D4E4D]">
                  {number3}
                </h4>
                <div className="text-[13px] cxs:text-[14px] sm:text-[16px] md:text-[14px] cmd:text-[14px] lg:text-[16px] xl:text-[18px] mt-2 leading-tight font-supera700 sm:font-supera600 text-[#474747]">
                  Luxury Towers
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="w-full md:w-auto flex justify-start md:justify-center">
            {/* Fourth column code similar to the above */}
            <div className="w-full md:w-auto flex items-center gap-2.5 pb-2.5 sm:pb-1.5 lg:pb-2.5 relative before:absolute before:bottom-0 before:left-0 before:w-[90%] before:h-[1.74px] before:bg-[#AA601F] sm:before:bg-[#AA601F]">
              <div className="w-[35px] xs:w-[40px] sm:w-[50px] md:w-[35px] cmd:w-[40px] lg:w-[50px] xl:w-[58px] h-[38px] xs:h-[44px] sm:h-[53px] md:h-[40px] cmd:h-[44px] lg:h-[53px] xl:h-[61px] relative">
                <Image
                  alt="Icon 4"
                  width={150}
                  height={40}
                  layout="responsive"  // Makes the image responsive
                  src="/_next/static/media/statics-icon4.1c319a9e.svg"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-[25px] leading-[20px] bxxs:text-[32px] xs:leading-[26px] cxs:text-[40px] cxs:leading-[36px] sm:text-[45px] sm:leading-[40px] md:text-[35px] md:leading-[30px] cmd:text-[40px] cmd:leading-[36px] lg:text-[45px] lg:leading-[40px] xl:text-[55px] xl:leading-[49px] font-supera800 text-[#4D4E4D]">
                  {number4}
                </h4>
                <div className="text-[13px] cxs:text-[14px] sm:text-[16px] md:text-[14px] cmd:text-[14px] lg:text-[16px] xl:text-[18px] mt-2 leading-tight font-supera700 sm:font-supera600 text-[#474747]">
                  Another Metric (Example)
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
