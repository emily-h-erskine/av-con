import React from "react";

export default function Speaker({ SpeakerImage, SpeakerName, SpeakerBio }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <img
        src={SpeakerImage}
        alt="Speaker Image"
        style={{ width: '60%'}}
      />
      <h3>{SpeakerName}</h3>
      <h5>{SpeakerBio}</h5>
    </div>
  );
}
