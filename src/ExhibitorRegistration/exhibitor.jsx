import React from "react";
import ExhibitorRegistrationForm from "./exhibitorRegistrationForm";


export default function ExhibitorRegistration() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8 lg:p-12">
      <div className="event-container text-center">
        <h3 style={{textAlign:"center"}}>
        Register to be an Exhibitor at AvCon
        </h3>
        <div className="flex justify-center mb-8">
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
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <ExhibitorRegistrationForm />
          </div>
        </div>
      </div>
    </main>
  );
}
