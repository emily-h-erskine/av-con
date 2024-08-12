import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function GOCHighlight({ SpeakerImage, SpeakerName, SpeakerBio }) {
  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <div style={{
      width: '500px', // Set a fixed width
      height: '500px', // Set a fixed height
      overflow: 'hidden', // Hide any overflow
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem'
    }}>
      <img
        src={SpeakerImage}
        alt="Speaker Image"
        style={{
          width: '100%', // Ensure the image covers the width of the container
          height: '100%', // Ensure the image covers the height of the container
          objectFit: 'cover', // Crop the image to cover the container
          objectPosition: 'top' // Crop the image from the top
        }}
      />
    </div>
    <h6>{SpeakerName}</h6>
    <p>{SpeakerBio}</p>
  </div>
  );
}
