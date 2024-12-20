import React, { useState } from 'react';
import Image from 'next/image';
import './ChatIcon.css';  // Import the CSS file

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
    <div style={styles.chatIconWrapper}>
      {!isExpanded && isOpen && (
        <div style={styles.chatIconContainer}> 
          <div style={styles.closeButton} onClick={handleClose}>X</div>
          <div style={styles.textAbove}>Need Immediate Assistance</div>
          <div style={styles.circle}>
            <div style={styles.circle1}>
              <div style={styles.circle2}>
                <div style={styles.circle3}></div>
              </div>
            </div>
          </div>
          <Image
            src="/uploads/Ellipse 83.png"
            width={60}
            height={60}
            alt="chat icon"
            style={styles.chatIcon}
            onClick={toggleExpanded}
          />
          <div style={styles.textBelow}>Pawan Kumar</div>
        </div>
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
        <div style={styles.contactForm}>
          <div style={styles.closeButtonExpanded} onClick={toggleExpanded}> X </div>
          <h5 style={styles.formHeading}>Need Immediate Assistance?</h5>
          <div style={styles.agentInfo}>
            <div style={styles.agentImageWrapper}>
              <Image
                alt="agent-img"
                width={65}
                height={65}
                src="/uploads/Ellipse 83.png"
                style={styles.agentImage}
              />
            </div>
            <div style={styles.agentDetails}>
              <strong style={styles.agentName}>Pawan Kumar</strong>
              <p style={styles.agentCompany}>Realty Nivesh</p>
            </div>
          </div>
          <button
            style={styles.contactNowButton}
            onClick={() => alert('Contacting...')}
          >
            Contact Now
          </button>
          <div style={styles.buttonRow}>
            <button
              style={styles.callButton}
              onClick={() => alert('Calling...')}
            >
              <Image width={16} height={14} alt="call" src={'/uploads/gr2.png'} />
              <span>Call Now</span>
            </button>
            <button
              style={styles.whatsappButton}
              onClick={() => alert('Opening Whatsapp...')}
            >
              <Image width={16} height={14} alt="whatsapp" src={'/uploads/Vector(6).png'} />
              <span>Whatsapp</span>
            </button>
          </div>
        </div>
      )}
    </div>
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
    zIndex: 999, // Lower z-index for chat icon
  },
  chatIconContainer: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatIcon: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999, // Keep it below other content
  },
  circle: {
    width: '60px',
    height: '60px',
    backgroundColor: '#a4591a',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle1: {
    width: '60px',
    height: '60px',
    backgroundColor: '#a4591a',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle2: {
    width: '60px',
    height: '60px',
    backgroundColor: '#a4591a',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle3: {
    width: '60px',
    height: '60px',
    backgroundColor: '#a4591a',
    borderRadius: '50%',
  },
  closeButton: {
    position: 'absolute',
    top: '-115px',
    right: '-15px',
    backgroundColor: '#ffffffcb',
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
    color: '#474747',
    textAlign: 'center',
  },
  textBelow: {
    position: 'absolute',
    bottom: '-45px',
    fontSize: '12px',
    color: '#474747',
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
  contactForm: {
    position: 'absolute',
    bottom: '70px',
    right: '30px',
    backgroundColor: 'white',
    width: '300px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  closeButtonExpanded: {
    position: 'absolute',
    top: '-25px',
    right: '-25px',
    backgroundColor: '#ffffffcb',
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
  formHeading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  agentInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  agentImageWrapper: {
    position: 'relative',
    zIndex: 50,
    cursor: 'pointer',
  },
  agentImage: {
    borderRadius: '50%',
  },
  agentDetails: {
    marginLeft: '16px',
  },
  agentName: {
    fontWeight: 'bold',
    color: 'black',
  },
  agentCompany: {
    color: '#4c4c4c',
  },
  contactNowButton: {
    width: '100%',
    backgroundColor: '#1e40af',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    textAlign: 'center',
    border: 'none',
    marginBottom: '10px',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    marginTop: '10px',
  },
  callButton: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    width: '48%',
    border: '1.5px solid #000',
    borderRadius: '10px',
    padding: '10px',
    cursor: 'pointer',
    justifyContent: 'center',
  },
  whatsappButton: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    width: '48%',
    border: '1.5px solid #000',
    borderRadius: '10px',
    padding: '10px',
    cursor: 'pointer',
    justifyContent: 'center',
  },
};

export default ChatIcon;
