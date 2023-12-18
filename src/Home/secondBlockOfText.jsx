import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function SecondImageAndText() {
  return (
    <Box style={{ padding: "0 0 0 5%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <div>
            <b>Highlights:</b>
            <ul>
              <li>Explore exciting aviation careers with industry experts.</li>
              <li>Get a glimpse of the latest aviation technology.</li>
              <li>Listen to insightful talks from industry leaders.</li>
              <li>Visit booths showcasing innovations and career opportunities.</li>
            </ul>
            <b>24-Hour Flight Sim Competition:</b>
            <ul>
              <li>Thrilling non-stop flight simulation from 12 pm to 12 pm.</li>
              <li>Support the Shannon Aviation Museum with your participation.</li>
              <li>Form a team of 4-8 for a round-the-world flight challenge.</li>
              <li>Each team must raise €xxxx to enter.</li>
              <li>Contact flightsim@avcon.ie to register your team.</li>
            </ul>
            <br />
            <hr />
            <h4 style={{ textAlign: 'center' }}>Join us for an extraordinary event fusing education, entertainment, and fundraising. Don't miss your chance to be part of the aviation revolution!</h4>
            <hr />
          </div>
        </Grid>
        <Grid item xs={12} sm={7}>
          <div style={{ textAlign: 'center' }}>
            <img
              src="https://www.atlanticaviation.ie/wp-content/uploads/2023/03/Shane-and-girls-scaled.jpg"
              alt="Sample AirCraft Tech Photo"
              style={{ width: '100%', maxWidth: '600px', mixBlendMode: 'luminosity' }}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
