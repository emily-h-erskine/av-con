import React, { useEffect, useState } from 'react';
import ContactUsForm from "./contactForm";

export default function Contact() {
  return (

    <div style={{ padding: '0% 2% 5% 2%' }}>
    <div>
      <img
        src="https://www.aviationpress.co.uk/wp-content/uploads/2022/04/PC-12-Banner-scaled.jpg"
        alt="header image"
        style={{
          width: '100%',
          mixBlendMode: 'luminosity'
        }}
      />
    </div>
    <div style={{ padding: '2% 0%' }}>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <ContactUsForm />
    </div>
  </div>
  );
}