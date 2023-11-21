import React from "react";

export default function HomeImageBanner() {
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
        <button
          type="button"
          name="Book Tickets Button"
          style={{
            padding: '1.5vw 4vw',
            position: 'absolute',
            right: '10%',
            top: '30%'
          }}
        >
          <a href="./Register">
            <b>Book Tickets</b>
          </a>
        </button>

      <div
        style={{
          width: '80%',
          height: 'auto',
          left: '10%',
          top: '10%',
          position: 'absolute',
          fontSize: '5vw',
          fontWeight: '800',
          color: 'white'
        }}
      >
        Welcome to the Future of Aviation!
      </div>
    </div>
  );
}
