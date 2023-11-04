import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function EventFirstBlock() {
  return (
      <Box style={{padding:" 0 5% 0 0"}}>
        <Grid container >
        <Grid item xs={6}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?cs=srgb&dl=pexels-pixabay-46148.jpg&fm=jpg"
                  alt="Airplane"
                  style={{ width: '80%', mixBlendMode: 'luminosity' }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                <b>Part 1 - Aviation Convention: </b>
                <ul>
                  <li><b>Discover Career Opportunities:</b> AvCon brings together the best and brightest minds in aviation to shed light on the exciting careers this industry has to offer.</li>
                  <li><b>Tech Showcase:</b> Get a glimpse into the future with presentations on the latest aviation technology.</li>
                  <li><b>Engaging Talks:</b> Hear from industry experts and thought leaders who will share their insights and experiences.</li>
                  <li><b>Exhibitors:</b> Explore booths featuring the latest innovations, educational institutions, and career opportunities in aviation.</li>
                </ul>
                <b>Pricing:</b>
                <ul>
                  <li>School Groups: Free admission.</li>
                  <li>Third-Level Students: Free with valid student cards.</li>
                  <li>Individual Tickets: €10 per person.</li>
                </ul>
                <h5>To Register a School: Contact our dedicated school team at schools@avcon.ie.</h5>
              </div>
            </Grid>
        </Grid>
      </Box>
  );
}
