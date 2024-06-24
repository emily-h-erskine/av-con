import React from "react";

export default function Sponsor({ logoUrl, sponsorName }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src={logoUrl}
        alt="Sponsor Logo"
        style={{ width: '90%'}}
      />
      <p>{sponsorName}</p>
    </div>
  );
}
