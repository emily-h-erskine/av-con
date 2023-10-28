import React from 'react';

export const Header = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', padding: '2% 5%' }}>
      <div style={{ textAlign: 'left' }}>
        <a href="/">
          <img src='./AVConLogoWhite.png' alt="AV Con" width={'35%'} />
        </a>
      </div>
      <div style={{ textAlign: 'right', padding:'12% 0 0 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%', gap: '2%'}}>
          <a href="./Event">EVENT INFO</a>
          <a href="./About">ABOUT AVCON</a>
          <a href="./Contact">CONTACT US</a>
          <a href="./Register">REGISTER</a>
        </div>
      </div>
    </div>
  );
};