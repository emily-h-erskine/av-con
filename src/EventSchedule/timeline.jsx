import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Timeline = ({ events }) => {
  return (
    <Box style={{ padding: "0 0 0 5%" }}>
      <Grid container spacing={2}>
        {events.map((events, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <div className="timeline-item">
              <div className="timeline-date">{events.date}</div>
              <div className="timeline-content">
                <img src={events.imageSrc} alt={events.imageAlt} style={{ width: '100%', maxWidth: '600px', mixBlendMode: 'luminosity' }} />
                <h6>{events.event}</h6>
                <p>{events.description}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Timeline;