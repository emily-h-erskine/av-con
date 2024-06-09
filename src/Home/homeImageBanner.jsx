import React from "react";

export default function HomeImageBanner() {
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
      <button
          type="button"
          name="Book Tickets Button"
          style={{
            padding: '1.5vw 4vw',
            position: 'absolute',
            right: '10%',
            top: '40%'
          }}
        >
        <a href="./BookTickets" style={{ textDecoration: 'none', color: 'inherit' }}>
          Register for Tickets
        </a>
      </button>

      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80%',
          fontSize: '5vw',
          fontWeight: '800',
          color: 'white',
          textAlign: 'center',
        }}
      >
        Welcome to the Future of Aviation!
      </div>
    </div>
  );
}
