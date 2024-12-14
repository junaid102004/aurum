// AboutUs.js
import Image from 'next/image';
import StatisticsSection from '../components/statistcics';

const AboutUs = () => {
  return (
    <section id="about-us" className="section-gap scroll-mt-24">
      <div className="bg-[#0b0b0b]">
        <div className="mt-10 md:bg-[url('/uploads/group1.png')]  bg-cover bg-left bg-no-repeat w-full h-full">
          <div className="bg-[url('/uploads/imageblack.png')]  bg-cover bg-no-repeat w-full max-w-[100%] sm:max-w-[95%] lg:max-w-[90%] 3xl:max-w-[1400px] mx-auto pt-[40px] md:pt-[30px] md:py-[60px] pb-[35px] flex flex-col md:flex-row gap-4 cmd:gap-5 xl:gap-8 3xl:gap-4 xl:justify-center items-center">
            <div className="w-full max-w-[320px] bxxs:max-w-[360px] cxs:max-w-[400px] md:max-w-[340px] cmd:max-w-[416px] h-full flex flex-col justify-center items-center pl-2 md:pl-0 lg:pr-0 lg:pl-0 2xl:pr-0 2xl:pl-0">
              <div className="w-[80%] sm:w-[90%] xl:w-full h-[220px] cxs:h-[300px] md:h-[404px] relative flex items-center">
                <Image
                  alt="About Us Image"
                  src="/uploads/image.webp"
                  layout="fill"
                  objectFit="contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-[60%] mt-1.5 cxs:mt-0 md:mt-0 flex flex-col gap-5 px-5 md:px-0 lg:pl-0 2xl:pl-8 md:pr-8 2xl:pr-0">
              <p className="capitalize tracking-wide font-supera500 text-[14px] cxs:text-[15px] md:text-[16px] lg:text-[17px] 3xl:text-[19px] leading-relaxed text-justify text-[#fff]">
                Welcome to <strong className="font-supera300">Medallion Aurum</strong>, a premium residential destination designed to redefine luxury living in Mohali. Strategically located, <strong className="font-supera300">Medallion Aurum Mohali</strong> offers an unparalleled blend of elegant architecture, modern amenities, and a lifestyle that resonates with opulence and comfort. Our vision is to create a world-class living experience for residents who value sophistication and exclusivity.
              </p>
              <p className="capitalize tracking-wide font-supera500 text-[14px] cxs:text-[15px] md:text-[16px] lg:text-[17px] 3xl:text-[19px] leading-relaxed text-justify text-[#fff]">
                <strong className="font-supera300">Medallion Aurum Apartments</strong> are thoughtfully designed to provide maximum space utilization, contemporary aesthetics, and a seamless blend of functionality and beauty. With a keen focus on quality, convenience, and luxury, we offer a variety of high-end apartments that cater to diverse needs, ensuring comfort and satisfaction for every resident.
              </p>
              <button
                aria-label="read-more"
                className="md:w-[167px] md:h-[38px] md:flex justify-center items-center font-supera600 capitalize md:uppercase text-[16px] sm:text-[20px] md:text-[24px] text-[#F9A221] md:text-[#000] rounded-md bg-right md:bg-[url('/uploads/bgimage.png')]  cursor-pointer text-justify tracking-wide"
              >
                Read more
              </button>
            </div>
          </div>
      <StatisticsSection/>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
