import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown.svg';

export const Header = () => {
  const [showEventDropdown, setShowEventDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleEventDropdownToggle = () => {
    setShowEventDropdown(!showEventDropdown);
  };

  const handleAboutDropdownToggle = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  const handleMobileToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      closeMobileMenu();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', padding: '3% 10% 0% 5%' }}>
      <div style={{ textAlign: 'left' }}>
        <a href="/">
          <img src='./AVConLogoWhite.png' alt="AV Con" width={isMobile ? '80%' : '40%'} />
        </a>
      </div>
      <div style={{ textAlign: 'right', padding: isMobile ? '15% 0 0 0' : '15% 0 0 0' }}>
        {isMobile ? (
          <div style={{ cursor: 'pointer' }} onClick={handleMobileToggle}>
            ☰
            {showMobileMenu && (
              <p style={{ backgroundColor: '#07101D', position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 1000 }}>
                <ul style={{ listStyleType: 'none'}}>
                  <li style={{ padding: '2% 10%'}}><a href="./Event">EVENT INFO</a></li>
                  <li style={{ padding: '2% 10%'}}><a href="./EventSchedule">EVENT SCHEDULE</a></li>
                  <li style={{ padding: '2% 10%'}}><a href="./SpeakersPresenters">SPEAKERS &amp; PRESENTERS</a></li>
                  <li style={{ padding: '2% 10%'}}><a href="./FlightSim">AVCON XTRA: THE FLIGHT SIM CHALLENGE</a></li>
                  <li style={{ padding: '2% 10%'}}><a href="./About">ABOUT AVCON</a></li>
                  <li style={{ padding: '2% 10%'}}><a href="./News">NEWS &amp; UPDATES</a></li>
                  <li style={{ padding: '2% 10%'}}><a href="./SponsorsPartners">SPONSORS &amp; PARTNERS</a></li>
                  <li style={{ padding: '2% 10%'}}><a href="./Contact">CONTACT US</a></li>
                  <li style={{ padding: '2% 10%'}}><a href="./BookTickets">REGISTER FOR TICKETS</a></li>
                  <li style={{ padding: '2% 10%'}}><a href="./ExhibitorRegistration">REGISTER TO BE AN EXHIBITOR</a></li>
                </ul>
              </p>
            )}
          </div>
        ) : (
          <h6 style={{ display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%', gap: '4%', textAlign: 'center', alignItems:'baseline' }}>
              <div
                style={{ position: 'relative', display: 'inline-block' }}
                onMouseEnter={handleEventDropdownToggle}
                onMouseLeave={handleEventDropdownToggle}
              >
                <a href="./Event">EVENT INFO</a>
                <img src={Dropdown} alt="Dropdown" style={{ padding: '0 0 0 10px' }} />
                {showEventDropdown && (
                  <p style={{ top: '100%', left: 0, backgroundColor: '#07101D', padding: '10px', border: '2px white solid', textAlign: 'left' }}>
                    <a href="./EventSchedule">EVENT SCHEDULE</a>
                    <br /><br />
                    <a href="./SpeakersPresenters">SPEAKERS &amp; PRESENTERS</a>
                    <br /><br />
                    <a href="./FlightSim">AVCON XTRA: THE FLIGHT SIM CHALLENGE</a>
                  </p>
                )}
              </div>
              <div
                style={{ position: 'relative', display: 'inline-block' }}
                onMouseEnter={handleAboutDropdownToggle}
                onMouseLeave={handleAboutDropdownToggle}
              >
                <a href="./About">ABOUT AVCON</a>
                <img src={Dropdown} alt="Dropdown" style={{ padding: '0 0 0 10px' }} />
                {showAboutDropdown && (
                  <p style={{ top: '100%', left: 0, backgroundColor: '#07101D', padding: '10px', border: '2px white solid', textAlign: 'left' }}>
                    <a href="./News">NEWS &amp; UPDATES</a>
                    <br /><br />
                    <a href="./SponsorsPartners">SPONSORS &amp; PARTNERS</a>
                  </p>
                )}
              </div>
              <a href="./Contact">CONTACT US</a>
              <a href="./BookTickets">REGISTER FOR TICKETS</a>
              <a href="./ExhibitorRegistration">REGISTER TO BE AN EXHIBITOR</a>
          </h6>
        )}
      </div>
    </div>
  );
};