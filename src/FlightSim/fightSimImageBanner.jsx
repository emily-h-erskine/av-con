import React from "react";

export default function FlightSimImageBanner() {
  return (
    <div style={{ position: 'relative', padding: '0% 2% 5% 2%' }}>
      <img
        src="https://www.aviationpress.co.uk/wp-content/uploads/2022/04/PC-12-Banner-scaled.jpg"
        alt="header image"
        style={{
          width: '100%',
          mixBlendMode: 'luminosity',
          display: 'block',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          mixBlendMode: 'darken',
          background: 'linear-gradient(180deg, #07101D 0%, rgba(7, 16, 29, 0) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '90%',
          fontSize: '4vw',
          fontWeight: '800',
          color: 'white',
          textAlign: 'left',
        }}
      >
        AvCon Xtra promises an unforgettable experience for aviation enthusiasts and competitive gamers alike.
      </div>
    </div>
  );
}
