import { useState } from 'react';

const ChatIcon = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat((prevState) => !prevState);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-5 md:bottom-10 right-2 md:right-10 z-50">
      <div className="relative flex flex-col justify-center items-center">
        {/* Main button with SVG for closing chat */}
        <div
          className="opacity-100 bg-[#ffffffcb] absolute bottom-[100%] right-0 z-50 cursor-pointer size-[25px] border-[0.0001px] border-gray-400 rounded-full flex justify-center items-center p-1"
          onClick={toggleChat}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 15 15"
            className="text-gray-500 relative z-50 text-4xl font-thin"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        {/* Chat bubble with wave animation */}
        {showChat && (
          <div className="w-[0px] opacity-100 whitespace-nowrap duration-300 shadow-lg absolute bottom-[90%] -right-[0px] xs:right-8 z-50 bg-white rounded-xl overflow-hidden">
            <div className="w-full h-full relative after:absolute after:w-[60%] after:h-[4px] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:rounded-t-2xl after:bg-[#000]">
              <div className="cursor-pointer text-[#131313dd] text-[25px] font-supera700 absolute top-2 right-2 z-40">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 15 15"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              {/* Chat details */}
              <div className="py-4 px-3 xs:px-[37px] relative flex flex-col gap-6">
                <h5 className="text-[16px] text-center text-[#535353] font-supera800 capitalize">
                  Need immediate assistance?
                </h5>
                <div className="flex">
                  <div className="relative z-50 cursor-auto size-[65px] rounded-full">
                    <img
                      alt="agent-img"
                      loading="lazy"
                      width="60"
                      height="61"
                      decoding="async"
                      className="relative z-50 w-full h-full"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fagenticon.fd54840f.png&w=128&q=75"
                    />
                  </div>
                  <div className="ml-4">
                    <strong className="font-supera800 text-[15px] text-center capitalize text-[#000]">
                      Pawan Kumar
                    </strong>
                    <p className="font-supera500 text-[10px] text-[#4c4c4c] capitalize">
                      Realty Nivesh
                    </p>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="cursor-default w-full rounded-md overflow-hidden">
                  <button
                    aria-label="contact now"
                    className="w-full py-[7px] bg-backgroud-theme-local bg-cover bg-right-bottom text-[13px] font-supera700 text-white uppercase"
                  >
                    Contact Now
                  </button>
                </div>
                <div className="w-full flex justify-between gap-x-[10px] pt-1 pb-3">
                  <button
                    aria-label="call now"
                    className="cursor-auto flex items-center pl-[10px] w-1/2 border-[1.5px] border-[#000] rounded-lg py-1.5"
                  >
                    <span>
                      <svg
                        width="17"
                        height="15"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.64952 0.980195H3.39685L3.95996 2.38503L3.05516 2.98688C3.00188 3.02235 2.9582 3.0704 2.92799 3.12675C2.89778 3.18311 2.88198 3.24603 2.88199 3.30994V3.31848C2.88222 3.33585 2.883 3.3532 2.88432 3.37051C2.88666 3.40235 2.89055 3.44545 2.89794 3.49865C2.91312 3.60349 2.94231 3.74793 2.99912 3.918C3.11354 4.2597 3.33769 4.70196 3.77433 5.13762C4.21097 5.57329 4.65422 5.79694 4.99629 5.9111C5.16713 5.96779 5.31151 5.99652 5.41736 6.01206C5.47711 6.02038 5.53725 6.02556 5.59754 6.02759L5.6026 6.02798H5.60572C5.67797 6.02794 5.74917 6.00783 5.81062 5.96991C5.87207 5.93198 5.92172 5.87774 5.95401 5.81325L6.21475 5.29294L7.94106 5.58028V7.25769C7.11955 7.37612 4.90056 7.493 3.15712 5.75345C1.41369 4.01391 1.53043 1.79949 1.64952 0.980195ZM3.68871 3.49865L4.39193 3.03115C4.54049 2.93228 4.65045 2.78544 4.70338 2.61527C4.75631 2.4451 4.74898 2.26195 4.68263 2.09653L4.11952 0.691695C4.06173 0.547602 3.962 0.424091 3.83319 0.337093C3.70437 0.250095 3.55239 0.203603 3.39685 0.203613H1.62928C1.27553 0.203613 0.942803 0.448625 0.884818 0.83148C0.752504 1.70203 0.573101 4.27329 2.60685 6.3025C4.6406 8.33171 7.21762 8.15232 8.09011 8.02068C8.47382 7.96244 8.71938 7.63084 8.66652 7.26085L8.31729 5.73579L6.21474 5.29294C5.90087 5.22014 5.67985 4.84743 5.67985 4.46529C5.67985 4.13527 5.8951 3.84564 6.21473 3.74561C6.53437 3.64559 6.95197 3.56306 7.31758 3.49865C7.04039 3.28033 6.70447 3.17606 6.37993 3.13893C5.97494 3.09677 5.65379 3.06591 5.32872 3.09904C5.03157 3.12883 4.77609 3.31733 4.60441 3.56306C4.48253 3.77194 4.27246 3.80125 4.12242 3.94471C3.99853 4.04803 3.88303 4.16171 3.68871 3.49865Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatIcon;
