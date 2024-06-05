import React, { useState, useRef, useEffect } from 'react';
import logo from "../assets/images/logo.png";
import '../assets/styles/header.css';
import SignupForm from './SignUpForm';
import SigninForm from './SignInForm';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('click', handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleAccount = () => {
    setIsOpen(!isOpen);
  };

  const toggleSignUpPopup = () => {
    setIsOpen(!isOpen);
    setShowSignUpPopup(!showSignUpPopup);
  };
  const toggleSignInPopup = () => {
    setIsOpen(!isOpen);
    setShowSignInPopup(!showSignInPopup);
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src={logo} alt="Logo" style={styles.logoImage} />
      </div>
      <nav ref={navRef} style={styles.nav} className="homenav">
        <div className='nav-item'>
          <h5><span className='icon-support'></span>Customer Support</h5>
        </div>
        <div className='nav-item my-account' onClick={toggleAccount}>
          <div className='icon-bars'></div>
          <div className='icon-user'></div>
        </div>
        
        {isOpen && <ul style={styles.navList}>
          <li style={styles.listitem}><span style={styles.listitema}>Explore</span></li>
          <li style={styles.listitem}><span style={styles.listitema}>Become an affiliate</span></li>
          <li style={styles.listitem} onClick={toggleSignUpPopup}><span style={styles.listitema}>Sign Up</span></li>
          <li style={styles.listitem} onClick={toggleSignInPopup}><span style={styles.listitema}>Log In</span></li>
        </ul>}
      </nav>

      {/* Sign Up Popup */}
      {showSignUpPopup && (
        <div className="popup-overlay" style={styles.popupOverlay}>
          <div className="popup" style={styles.popup}>
            <span className="close-button" style={styles.closeButton} onClick={toggleSignUpPopup}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
            <div className='signin'>
              <h2>Sign Up</h2>
              <SignupForm/>
            </div>
          </div>
        </div>
      )}
      {showSignInPopup && (
        <div className="popup-overlay" style={styles.popupOverlay}>
          <div className="popup" style={styles.popup}>
            <span className="close-button" style={styles.closeButton} onClick={toggleSignInPopup}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
            <div className='signin'>
              <h2>Sign In</h2>
              <SigninForm/>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    backgroundImage: 'radial-gradient(circle, #3D627B, #1D445B)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100px',
    padding: '0 40px 0 40px',
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999999,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  },
  logo: {
    marginRight: '20px',
    zIndex: 999999
  },
  logoImage: {
    width: '150px',
    height: '150px',
    zIndex: 999999,
    overflow: 'hidden'
  },
  nav: {
    display: 'flex',
    zIndex: 999999,
    marginRight: "40px"
  },
  navList: {
    listStyle: 'none',
    padding: '32px',
    right: '80px',
    margin: 0,
    top: '63px',
    alignItems: 'center',
    zIndex: 999999,
    position: 'absolute',
    backgroundColor: "#fff",
    borderRadius: "24px"
  },
  listitem: {
    cursor: 'pointer',
    marginBottom: '24px'
  },
  listitema: {
    cursor: 'pointer',
    color: '#172432',
    fontWeight: 700
  },
  navItem: {
    marginLeft: '20px',
    zIndex: 999999
  },
  // Popup Styles
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999999999999
  },
  popup: {
    backgroundColor: '#fff',
    padding: '32px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    cursor: 'pointer',
    fontSize:'18px'
  }
};

export default Header;
