import React from "react";
import RegistrationForm from "./registrationForm";

export default function Register() {
  return (

    <div style={{ position: 'relative', padding: '0% 2% 5% 2%' }}>
    <div>
    <div
      style={{
        width: '100%',
        height: '30%',
        left: 0,
        top: 0,
        position: 'absolute',
        mixBlendMode: 'darken',
        background:
          'linear-gradient(180deg, #07101D 0%, rgba(7, 16, 29, 0) 100%)'
      }}
    />
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
    </div>
    <div>
      <h1 style={{textAlign: "center"}}>Register for AvCon Tickets</h1>
      <RegistrationForm />
    </div>
  </div>
  );
}
