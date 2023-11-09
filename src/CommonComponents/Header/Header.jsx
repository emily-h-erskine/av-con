import React, { useState } from 'react';
import Dropdown from './Dropdown.svg';

export const Header = () => {
  const [showEventDropdown, setShowEventDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const handleEventDropdownToggle = () => {
    setShowEventDropdown(!showEventDropdown);
  };

  const handleAboutDropdownToggle = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', padding: '0% 10% 0% 5%'}}>
      <div style={{ textAlign: 'left' }}>
        <a href="/">
          <img src='./AVConLogoWhite.png' alt="AV Con" width={'40%'} />
        </a>
      </div>
      <div style={{ textAlign: 'right', padding:'15% 0 0 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%', gap: '2%' }}>
          <div
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={handleEventDropdownToggle}
            onMouseLeave={handleEventDropdownToggle}
          >
            <a href="./Event">EVENT INFO</a>
            <img src={Dropdown} alt="Dropdown" style={{ padding:'0 0 0 10px' }}/>
            {showEventDropdown && (
              <div style={{ top: '100%', left: 0, backgroundColor: '#07101D', padding: '15px', border: '2px white solid', textAlign:'left'}}>
                <a href="./EventSchedule">EVENT SCHEDULE</a>
                <br/><br/>
                <a href="./SpeakersPresenters">SPEAKERS &amp; PRESENTERS</a>
                <br/><br/>
                <a href="./FlightSim">24-HOUR FLIGHT SIM COMPETITION</a>
              </div>
            )}
          </div>
          <div
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={handleAboutDropdownToggle}
            onMouseLeave={handleAboutDropdownToggle}
          >
            <a href="./About">ABOUT AVCON</a>
            <img src={Dropdown} alt="Dropdown" style={{ padding:'0 0 0 10px' }}/>
            {showAboutDropdown && (
              <div style={{ top: '100%', left: 0, backgroundColor: '#07101D', padding: '15px', border: '2px white solid', textAlign:'left'}}>
                <a href="./News">NEWS &amp; UPDATES </a>
              </div>
            )}
          </div>
          <a href="./Contact">CONTACT US</a>
          <a href="./Register">REGISTER</a>
        </div>
      </div>
    </div>
  );
};