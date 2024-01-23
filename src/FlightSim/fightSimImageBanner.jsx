import React from "react";

export default function FlightSimImageBanner() {
  return (
    <div style={{ position: 'relative', padding: '0% 2% 5% 2%' }}>
      <img
        src="https://careers.ryanair.com/wp-content/uploads/2019/01/Engineering-Lead-Image.jpg"
        alt="header image"
        style={{
          position: 'relative',
          zIndex: '-1',
          width: '100%',
          mixBlendMode: 'luminosity'
        }}
      />
      <div
        style={{
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          position: 'absolute',
          mixBlendMode: 'darken',
          background:
            'linear-gradient(180deg, #07101D 0%, rgba(7, 16, 29, 0) 100%)'
        }}
      />
      <div
        style={{
          width: '70%',
          height: 'auto',
          left: '5%',
          top: '2%',
          position: 'absolute',
          fontSize: '35px',
          fontWeight: '800',
          textAlign: 'left',
          color: 'white'
        }}
      >
        AvCon Xtra promises an unforgettable experience for aviation enthusiasts and competitive gamers alike. So, assemble your dream team, fundraise for a fantastic cause, and prepare for a
        12-hour flight simulation adventure like no other!
      </div>
    </div>
  );
}
