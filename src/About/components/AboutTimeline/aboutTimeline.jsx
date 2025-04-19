import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./aboutTimeline.css"

const AboutTimeline = ({ aboutAVCon }) => {
  return (
    <Box className="about-timeline-container">
      <Grid container spacing={2}>
        {aboutAVCon.map((event, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <div className="timeline-item">
              <div className="timeline-date">{event.date}</div>
              <div className="timeline-content">
                <img
                  className="timeline-image"
                  src={event.imageSrc}
                  alt={event.imageAlt}
                />
                <h3>{event.event}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutTimeline;
