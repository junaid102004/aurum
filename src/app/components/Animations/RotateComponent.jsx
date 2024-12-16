import { motion } from "framer-motion";

const RotatingComponent = () => {
  return (
    <div className="absolute top-8 right-[-110%] size-[80px] lg:size-[110px] xl:size-[125px] 3xl:size-[144px]">
      <div className="w-full h-full">
        {/* Star SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-[22px] sm:max-w-[25px] lg:max-w-[35px] 3xl:max-w-[40px] absolute z-30 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>

        {/* Rotating Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1, // Animation duration in seconds
            ease: "linear",
          }}
          className="w-full h-full bg-[#FFFFFF80] rounded-full relative z-10"
        >
          <span>
            {/* Rotating Text */}
            <svg
              className="fill-[#ffffff00] w-[100%] h-[100%] p-1.5 xl:p-3"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="circlePath"
                d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0"
              ></path>
              <text className="fill-[#000] text-[10px] font-bold uppercase">
                <textPath href="#circlePath">
                  Best Price Deals, 100% Guarantee, Best Value!
                </textPath>
              </text>
            </svg>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default RotatingComponent;
