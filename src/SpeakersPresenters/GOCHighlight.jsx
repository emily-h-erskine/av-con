import React from "react";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    margin: '0 auto',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    width: '50%',
    maxWidth: '100%',
    border: '1px solid #ddd',
    display: 'block',
    margin: '0 auto',
  },
  bioContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  bio: {
    columnCount: 2,
    columnGap: '5%',
    margin: 0,
  },
};

export default function GOCHighlight({ SpeakerImage, SpeakerName, SpeakerBio }) {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src={SpeakerImage}
          alt="Speaker"
          style={styles.image}
        />
      </div>
      <div>
        <h6>{SpeakerName}</h6>
      </div>
      <div style={styles.bioContainer}>
        <p style={styles.bio}>{SpeakerBio}</p>
      </div>
    </div>
  );
}
