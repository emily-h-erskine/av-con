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
    <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', padding: '0% 10% 0% 5%' }}>
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
              <div style={{ backgroundColor: '#07101D', position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 1000 }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li><a href="./Event">EVENT INFO</a></li>
                  <li><a href="./EventSchedule">EVENT SCHEDULE</a></li>
                  <li><a href="./SpeakersPresenters">SPEAKERS &amp; PRESENTERS</a></li>
                  <li><a href="./FlightSim">AVCON XTRA: FLIGHT SIM COMPETITION</a></li>
                  <li><a href="./About">ABOUT AVCON</a></li>
                  <li><a href="./News">NEWS &amp; UPDATES</a></li>
                  <li><a href="./SponsorsPartners">SPONSORS &amp; PARTNERS</a></li>
                  <li><a href="./Contact">CONTACT US</a></li>
                  <li><a href="./BookTickets">REGISTER FOR TICKETS</a></li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%', gap: '2%' }}>
            <div
              style={{ position: 'relative', display: 'inline-block' }}
              onMouseEnter={handleEventDropdownToggle}
              onMouseLeave={handleEventDropdownToggle}
            >
              <a href="./Event">EVENT INFO</a>
              <img src={Dropdown} alt="Dropdown" style={{ padding: '0 0 0 10px' }} />
              {showEventDropdown && (
                <div style={{ top: '100%', left: 0, backgroundColor: '#07101D', padding: '15px', border: '2px white solid', textAlign: 'left' }}>
                  <a href="./EventSchedule">EVENT SCHEDULE</a>
                  <br /><br />
                  <a href="./SpeakersPresenters">SPEAKERS &amp; PRESENTERS</a>
                  <br /><br />
                  <a href="./FlightSim">AVCON XTRA: FLIGHT SIM COMPETITION</a>
                </div>
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
                <div style={{ top: '100%', left: 0, backgroundColor: '#07101D', padding: '15px', border: '2px white solid', textAlign: 'left' }}>
                  <a href="./News">NEWS &amp; UPDATES</a>
                  <br /><br />
                  <a href="./SponsorsPartners">SPONSORS &amp; PARTNERS</a>
                </div>
              )}
            </div>
            <a href="./Contact">CONTACT US</a>
            <a href="./BookTickets">REGISTER FOR TICKETS</a>
          </div>
        )}
      </div>
    </div>
  );
};