import React from "react";
import ExhibitorRegistrationForm from "./exhibitorRegistrationForm";

export default function ExhibitorRegistration() {
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
      <h1 style={{ textAlign: "center" }}>Register to be an Exhibitor at AvCon</h1>
      <ExhibitorRegistrationForm />
    </div>
  </div>
  );
}