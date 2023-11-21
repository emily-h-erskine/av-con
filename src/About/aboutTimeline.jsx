import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const AboutTimeline = ({ aboutAVCon }) => {
  return (
    <Box style={{ padding: "0 0 0 5%" }}>
      <Grid container spacing={2}>
        {aboutAVCon.map((aboutAVCon, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <div className="timeline-item">
              <div className="timeline-date">{aboutAVCon.date}</div>
              <div className="timeline-content">
                <img src={aboutAVCon.imageSrc} alt={aboutAVCon.imageAlt} style={{ width: '100%', maxWidth: '600px', mixBlendMode: 'luminosity' }} />
                <h3>{aboutAVCon.event}</h3>
                <p>{aboutAVCon.description}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutTimeline;

