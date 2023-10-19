import React from 'react';

export const Header = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', padding: '2% 5%' }}>
      <div style={{ textAlign: 'left' }}>
        <a href="/">
          <img src='./AVConLogoWhite.jpeg' alt="AV Con" width={'35%'} />
        </a>
      </div>
      <div style={{ textAlign: 'right', padding:'12% 0 0 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', gap: '2%', fontSize: '15px' }}>
          <a href="./About">About</a>
          <a href="./Contact">Contact</a>
        </div>
      </div>
    </div>
  );
};