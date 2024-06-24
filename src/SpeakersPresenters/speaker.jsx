import React from "react";

export default function Speaker({ SpeakerImage, SpeakerName, SpeakerBio }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <img
        src={SpeakerImage}
        alt="Speaker Image"
        style={{ width: '60%'}}
      />
      <h6>{SpeakerName}</h6>
      <p>{SpeakerBio}</p>
    </div>
  );
}
