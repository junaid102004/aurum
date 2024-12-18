import React, { useState } from 'react';
import Image from 'next/image';

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
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
            opacity: 0.7; /* Animation on the circle */
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .chatIcon {
          animation: scaleOpacity 3s infinite ease-in-out; /* Apply animation on the circle */
        }

        .chatIconImage {
          position: absolute;
          width: 60px; 
          height: 60px; 
          object-fit: cover; /* Ensures the image stays inside the circle */
        }
      `}</style>

      <div style={styles.chatIconWrapper}>
        {isOpen && (
          <>
            <div style={styles.closeButton} onClick={handleClose}>X</div>
            <div style={styles.textAbove}>Need Immediate Assistance</div>

            {/* Circle with animation */}
            <div style={styles.circle}>
              <Image
                src="/uploads/Ellipse 83.png"
                width={60}
                height={60}
                alt="icon"
                style={styles.chatIcon}
                className="chatIconImage" // Ensure the image is inside the circle
              />
            </div>

            <div style={styles.textBelow}>Pawan Kumar</div>
          </>
        )}
        {!isOpen && (
          <div style={styles.closedIcon} onClick={handleOpen}>
            {/* Small icon when closed, click to open */}
            <Image
              src="/uploads/Ellipse 83.png"
              width={30}
              height={30}
              alt="icon"
            />
          </div>
        )}
      </div>
    </>
  );
};

const styles = {
  chatIconWrapper: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  chatIcon: {
   
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  circle: {
    width: '60px', // Circle size
    height: '60px', // Circle size
    backgroundColor: '#a4591a', // Circle color
    borderRadius: '50%', // Makes it a circle
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '-25px',
    right: '5px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    cursor: 'pointer',
  },
  textAbove: {
    position: 'absolute',
    top: '-120px',
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
    width: '30px', // Small size when closed
    height: '30px',
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    backgroundColor: 'orange', // Same color as circle
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
