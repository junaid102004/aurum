import { useState, useEffect } from "react";
import Image from "next/image";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(true); // Start with button visible
  const [timer, setTimer] = useState(null); // Timer state to store interval id

  // Function to handle the visibility based on scroll position
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsVisible(true); // Show button when at the top of the page
    }
  };

  // Function to handle visibility timer (hide button after 10 seconds)
  const startTimer = () => {
    const intervalId = setInterval(() => {
      setIsVisible(false); // Hide button after 10 seconds
    }, 10000);
    setTimer(intervalId); // Store intervalId in state
  };

  // Set an interval to hide the button after 5 seconds
  useEffect(() => {
    if (isVisible) {
      // Clear the previous timer when the button becomes visible again
      if (timer) {
        clearInterval(timer);
      }
      startTimer(); // Start the timer again
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listeners and clear the interval
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) {
        clearInterval(timer); // Clear the interval when component unmounts
      }
    };
  }, [isVisible]); // Runs when `isVisible` changes

  return (
    <div
      className={`${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-[140%] opacity-0"
      } fixed bottom-1.5 w-full z-50 flex sm:hidden justify-center transition-all duration-1000`}
    >
      <div className="sm:hidden justify-center relative justify-center items-center w-full px-3">
        <div className="relative table mx-auto w-full max-w-[461px]">
          <svg
            className="w-full"
            viewBox="0 0 461 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M188.752 10.1253C185.653 4.61766 180.256 0.366638 173.936 0.366638H10.7858C5.28923 0.366638 0.833374 4.82249 0.833374 10.3191V50.6693C0.833374 56.1659 5.28922 60.6217 10.7858 60.6217H450.881C456.378 60.6217 460.833 56.1659 460.833 50.6693V10.3191C460.833 4.8225 456.378 0.366638 450.881 0.366638H288.202C281.882 0.366638 276.485 4.61766 273.386 10.1253C265.011 25.0091 249.198 35.0449 231.069 35.0449C212.94 35.0449 197.127 25.0091 188.752 10.1253Z"
              fill="#ffdeac"
            ></path>
          </svg>
          <div className="w-full h-full absolute left-0 bottom-0 flex text-[#000]">
            <button
              aria-label="call"
              className="w-1/3 relative pt-1.5 text-center text-[11px] whitespace-nowrap xs:text-[12px] font-supera600 tracking-widest flex flex-col justify-center items-center"
            >
              <div className="absolute bottom-[1px] xxs:bottom-0.5 xs:bottom-1 flex flex-col gap-[3px] xs:gap-[3px]">
                <Image
                  src="/uploads/gr2.png"
                  width={16}
                  height={16}
                  alt="Call Icon" // Added alt text for accessibility
                />
                Call
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;
