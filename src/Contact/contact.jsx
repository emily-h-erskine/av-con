import React, { useEffect, useState } from 'react';
import ContactUsForm from "./contactForm";

export default function Contact() {
  return (
    <div style={{ position: 'relative', padding: '0% 2% 5% 2%' }}>
      <div
        style={{
          width: '100%',
          height: '50%',
          left: 0,
          top: 0,
          position: 'absolute',
          mixBlendMode: 'darken',
          background:
            'linear-gradient(180deg, #07101D 0%, rgba(7, 16, 29, 0) 100%)'
        }}
      />
      <img
        src="https://www.aviationpress.co.uk/wp-content/uploads/2022/04/PC-12-Banner-scaled.jpg"
        alt="header image"
        style={{
          position: 'relative',
          zIndex: '-1',
          width: '100%',
          mixBlendMode: 'luminosity'
        }}
      />
      <div style={{padding:'5%'}}>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Contact Us</h1>
        <ContactUsForm />
      </div>
    </div>
  );
}