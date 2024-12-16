import React from "react";
import Image from "next/image";  // If using Next.js for optimized image handling
import { FaStar } from "react-icons/fa";  // Optional: For star ratings

const testimonials = [
  {
    id: 1,
    name: "The Gupta Family",
    image: "/_next/static/media/user.2c79519a.png",
    rating: 5,
    comment:
      "Medallion Aurum’s strategic location in Sector 67, Mohali, is unbeatable. It provides easy access to all major points, including Chandigarh International Airport and IT City Mohali. As an entrepreneur, I needed convenience and luxury combined, and Medallion Aurum delivers on both fronts. The quality of construction using Mivan technology further assures me of a safe and lasting investment.",
  },
  {
    id: 2,
    name: "Appreciation for Design and Planning",
    image: "/_next/static/media/user.2c79519a.png",
    rating: 5,
    comment:
      "We were impressed by the thoughtful design of the apartments at Medallion Aurum. The layout is perfect for our family, with plenty of natural light and ventilation. It truly feels like a home.",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container py-10 px-5">
      <div className="swiper-container">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="swiper-slide w-full h-full relative z-10"
            style={{ height: "454px" }}
          >
            <div className="w-full h-full flex items-center justify-end">
              <div className="w-full md:w-1/2 text-white font-supera900 text-[40px]">
                <div className="max-w-[600px] mx-auto md:mx-0">
                  <div className="relative w-[100px] h-[80px] mx-auto">
                    <Image
                      alt="testimonial-quote"
                      src="/_next/static/media/testimonal-comma.edf1a0b0.png"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="mt-3 md:mt-2 font-poppins font-light tracking-wide text-center md:text-left capitalize text-[14px] xl:text-[17px] leading-relaxed text-[#fff] relative">
                    <strong className="font-medium">{testimonial.comment}</strong>
                  </p>
                  <div className="flex justify-center md:justify-start gap-x-[10.23px] mt-3 md:mt-[46px]">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <FaStar key={index} size={18} color="#FFC267" />
                    ))}
                  </div>
                  <div className="block md:hidden mt-10">
                    <div className="relative z-50 cursor-pointer size-[80px] rounded-full mx-auto mt-[23px]">
                      <Image
                        alt={testimonial.name}
                        src={testimonial.image}
                        width={512}
                        height={512}
                        layout="intrinsic"
                      />
                      <div className="testimonal-img-container absolute inset-0 flex justify-center items-center">
                        <div className="circle size-[65px] delay1"></div>
                        <div className="circle size-[65px] delay2"></div>
                        <div className="circle size-[65px] delay3"></div>
                        <div className="circle size-[65px] delay4"></div>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-poppins font-semibold text-[24px] text-[#fff] text-center mt-3">
                        {testimonial.name}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
