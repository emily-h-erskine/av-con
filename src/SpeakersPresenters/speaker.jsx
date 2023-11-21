import React from "react";

export default function Speaker() {
  return (
      <main className="flex min-h-screen flex-col justify-between p-24">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
                src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?cs=srgb&dl=pexels-pixabay-46148.jpg&fm=jpg"
                alt="Airplane"
                style={{ width: '80%', mixBlendMode: 'luminosity'}}
            />
        </div>
        <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Speaker/Presenter Name</h5>
      </main>
  );
}