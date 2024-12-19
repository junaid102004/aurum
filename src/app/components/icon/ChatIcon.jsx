import React, { useState } from 'react';
import Image from 'next/image';

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClose = () => {
    setIsOpen(false);  // Close the chat icon
  };

  const handleOpen = () => {
    setIsOpen(true);  // Open the chat icon again
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);  // Toggle the expanded view
  };

  return (
    <>
      <style jsx global>{`
        @keyframes scaleOpacity {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .circle {
          animation: scaleOpacity 3s infinite ease-in-out;
        }

        .chatIconImage {
          position: absolute;
          width: 60px;
          height: 60px;
          object-fit: cover;
        }

        .contactForm {
          position: absolute;
          bottom: 70px;
          right: 30px;
          background-color: white;
          width: 300px;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          opacity: 1;
          visibility: visible;
        }

        .contactForm.hidden {
          opacity: 0;
          visibility: hidden;
        }

        .contactForm .agentInfo {
          margin-bottom: 15px; /* Adds space between agent info and buttons */
        }

        .contactForm .buttonRow {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-top: 10px; /* Add spacing between the button row and the other elements */
        }

        .contactForm button {
          margin-top: 10px; /* Adds margin between the buttons */
        }

        .contactForm h5 {
          margin-bottom: 20px; /* Adds space below the heading */
        }

        .contactForm .closeButton {
          position: absolute;
          top: -25px;
          right: -25px;
          background-color: white;
          color: black;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          cursor: pointer;
        }

        .flex {
          display: flex;
          align-items: center;
        }

        .ml-4 {
          margin-left: 16px;
        }

        .cursor-pointer {
          cursor: pointer;
        }
      `}</style>

      <div style={styles.chatIconWrapper}>
        {!isExpanded && isOpen && (
          <>
            <div style={styles.closeButton} onClick={handleClose}>X</div>
            <div style={styles.textAbove}>Need Immediate Assistance</div>

            <div style={styles.circle}>
              <Image
                src="/uploads/Ellipse 83.png"
                width={60}
                height={60}
                alt="chat icon"
                style={styles.chatIcon}
                onClick={toggleExpanded}
                className="chatIconImage"
              />
            </div>

            <div style={styles.textBelow}>Pawan Kumar</div>
          </>
        )}

        {!isOpen && (
          <div style={styles.closedIcon} onClick={handleOpen}>
            <Image
              src="/uploads/Ellipse 83.png"
              width={30}
              height={30}
              alt="chat icon"
            />
          </div>
        )}

        {isExpanded && (
          <div className={`contactForm ${!isExpanded ? 'hidden' : ''}`}>
            <div className="closeButton" onClick={toggleExpanded}>
              X
            </div>
            <h5 className="text-center">Need Immediate Assistance?</h5>
            <div className="flex agentInfo">
              <div className="relative z-50 cursor-pointer rounded-full">
                <Image
                  alt="agent-img"
                  width={60}
                  height={61}
                  src="/uploads/Ellipse 83.png"
                  className="rounded-full"
                />
              </div>
              <div className="ml-4">
                <strong className="text-black">Pawan Kumar</strong>
                <p className="text-[#4c4c4c]">Realty Nivesh</p>
              </div>
            </div>
            <div className="cursor-pointer">
              <button
                className="w-full bg-no-repeat bg-cover bg-right-bottom text-[13px]  font-supera700 text-white uppercase py-[7px] bg-[url('/uploads/bgimage.png')] bg-blue-500 text-white uppercase"
                onClick={() => alert('Contacting...')}
              >
                Contact Now
              </button>
            </div>
            <div className="buttonRow">
              <button
                className="cursor-pointer flex items-center pl-[10px] w-1/2 border-[1.5px] border-[#000] rounded-lg py-1.5"
                onClick={() => alert('Calling...')}
              >
                <Image width={16} height={14} alt="call" src={'/uploads/gr2.png'} />
                <span>Call Now</span>
              </button>
              <button
                className="cursor-pointer flex items-center pl-[10px] w-1/2 border-[1.5px] border-[#000] rounded-lg py-1.5"
                onClick={() => alert('Opening Whatsapp...')}
              >
                <Image width={16} height={14} alt="whatsapp" src={'/uploads/Vector(6).png'} />
                <span>Whatsapp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const styles = {
  chatIconWrapper: {
    position: 'fixed',
    bottom: '100px',
    right: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  chatIcon: {
    position: 'relative',
    height:"64",
    width:"65",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  circle: {
    width: '60px',
    height: '60px',
    backgroundColor: '#a4591a',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '-115px',
    right: '-15px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '50%',
    width: '28px',
    height: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    cursor: 'pointer',
  },
  textAbove: {
    position: 'absolute',
    top: '-80px',
    fontSize: '12px',
    color: 'white',
    textAlign: 'center',
  },
  textBelow: {
    position: 'absolute',
    bottom: '-35px',
    fontSize: '12px',
    color: 'white',
    textAlign: 'center',
  },
  closedIcon: {
    width: '30px',
    height: '30px',
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    backgroundColor: 'orange',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 999,
    transition: 'all 0.3s ease-in-out',
  },
};

export default ChatIcon;
