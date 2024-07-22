import React from "react";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  },
  image: {
    width: '100%',
  },
  name: {
    marginTop: '15px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#333',
  },
  bioContainer: {
    flex: 1,
    textAlign: 'left',
    padding: '20px',
  },
  bio: {
    fontSize: '1em',
    lineHeight: '1.6',
    color: '#555',
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
        <h6 style={styles.name}>{SpeakerName}</h6>
      </div>
      <div style={styles.bioContainer}>
        <p style={styles.bio}>{SpeakerBio}</p>
      </div>
    </div>
  );
}
