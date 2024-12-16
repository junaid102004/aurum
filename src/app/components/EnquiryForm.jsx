// components/KnowMoreForm.js
import { useState } from 'react';
import Image from 'next/image';

const KnowMoreForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    termsAccepted: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here, you can send the data to an API or handle the form submission logic
  };

  return (
    <div className="section-gap">
      <div className="w-full h-full relative bg-[#000000] cmd:bg-[#f1f1f1] flex justify-center items-center py-8 sm:py-10 md:py-16 cmd:py-0">
        <div className="block cmd:hidden w-full h-1/2 absolute top-0 left-0 bg-backgroud-theme-local bg-cover"></div>
        <div className="enquiry-form w-full max-w-[96%] sm:max-w-[95%] cmd:max-w-[90%] lg:max-w-[90%] xl:max-w-[1200px] h-auto xs:min-h-[400px] lg:h-[500px] xl:h-[500px] bg-white overflow-hidden rounded-lg cmd:rounded-[5px] mx-auto" style={{ background: 'transparent' }}>
          <div className="shadow-[0px_0px_1.8px_0px_rgba(0,0,0,0.25)] cmd:shadow-none bg-white cmd:bg-transparent relative w-full h-full bg-no-repeat bg-left-bottom">
            <div className="w-full h-full flex flex-col cmd:flex-row justify-between pt-7 lg:pt-16 cmd:pb-7 lg:pb-16 px-3.5 xxs:px-5 cxs:px-10 xl:px-28 3xl:px-7">
              <div className="w-full cmd:w-1/2 flex flex-col justify-around">
                <h4 className="mb-5 cmd:mb-0 pr-5 xs:pr-10 sm:pr-7 lg:pr-5 capitalize font-supera600 text-[25px] cmd:text-[30px] xl:text-[35px] text-[#4E4E4E] w-full leading-[1.3]">
                  Can't wait to know more? <span className="text-[#464646] font-supera700">Let's talk!</span>
                </h4>
                <div className="hidden cmd:block w-[300px] h-[70px] lg:w-[350px] lg:h-[80px] xl:w-[420px] xl:h-[100px] relative">
                  <Image
                    alt="realty nivesh logo"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcombined-logo2.9966aa09.webp"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
              <form onSubmit={handleSubmit} className="h-full overflow-y-auto pr-2">
                <div className="w-full h-full flex flex-col justify-between cmd:justify-center lg:justify-start gap-y-3 xl:gap-y-5">
                  <div className="flex flex-col max-w-full cmd:max-w-[405px]">
                    <div className="mt-1 cmd:mt-2 pr-2 pt-2.5 text-[#101010] bg-transparent border-b-[0.5px] border-[#AFAFAF] font-supera500 text-[15px] 3xl:text-[16px] overflow-hidden">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full h-full placeholder:text-[#101010] outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col max-w-full">
                    <div className="w-full h-full flex justify-between items-center gap-x-3 pt-2.5 mt-1 cmd:mt-2 text-[#101010] bg-transparent border-b-[0.5px] border-[#AFAFAF] font-supera500 text-[15px] 3xl:text-[16px] overflow-hidden">
                      <div className="w-full flex items-center">
                        <span className="whitespace-nowrap pr-2.5">+ 91</span>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="Your Phone number*"
                          className="w-full h-full placeholder:text-[#101010] outline-none bg-transparent"
                        />
                      </div>
                    </div>
                    <p className="pt-1.5 font-supera400 text-[12px] text-[#7D7D7D]">You’ll receive OTP via SMS </p>
                  </div>

                  <div className="mt-2 lg:mt-0 flex flex-col max-w-full cmd:max-w-[405px]">
                    <div className="pr-2 xl:pt-2.5 text-[#101010] bg-transparent border-b-[0.5px] border-[#AFAFAF] font-supera500 text-[15px] 3xl:text-[16px] overflow-hidden">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Id"
                        className="w-full h-full placeholder:text-[#101010] outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="xl:mt-0">
                    <div className="mt-3 cmd:mt-5 pl-2 flex">
                      <input
                        id="terms"
                        name="termsAccepted"
                        type="checkbox"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="w-[17px] h-[17px] relative top-0.5 border-[#e98f0a] outline-[#e98f0a]"
                      />
                      <p className="ml-2.5 max-w-[350px] tracking-wide font-supera500 text-[11px] text-[#101010]">
                        I agree to receive newsletters, or relevant marketing content and The Medallion Terms and Conditions
                      </p>
                    </div>
                    <button
                      type="submit"
                      aria-label="submit"
                      className="mt-5 cmd:mt-10 w-full h-[45px] bg-[#101010] rounded-[20px] text-[#fff] font-supera500 tracking-wide text-[16px]"
                    >
                      Get OTP
                    </button>
                  </div>
                </div>
                <div className="block cmd:hidden mx-auto my-10 w-full bxxs:w-[300px] h-[70px] sm:w-[350px] sm:h-[80px] md:w-[420px] md:h-[100px] relative">
                  <Image
                    alt="realty nivesh logo"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcombined-logo2.9966aa09.webp"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMoreForm;
