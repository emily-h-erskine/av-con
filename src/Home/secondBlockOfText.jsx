import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function SecondImageAndText() {
  return (
    <Box style={{ padding: "0 0 0 5%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <div>
            <h3>
              Secure your FREE tickets now for an unforgettable adventure at AvCon 2024 book/register here - an absolute must for anyone passionate about aviation!
              <br/><br/>
              <hr/>
            </h3>
            <h3>Highlights</h3>
            <b>
              <h5>
                <ul>
                  <li>AvCon 2024: A thrilling journey into the future of aviation for students and enthusiasts.</li>
                  <li>Explore the wonders of aviation, from basics to cutting-edge technology.</li>
                  <li>Hands-on learning for primary and secondary students on flight principles and aerodynamics.</li>
                  <li>Career pathways for tertiary students and aviation enthusiasts, connecting with industry professionals.</li>
                  <li>Inspirational speakers discussing the future of air travel, space exploration, and sustainable aviation.</li>
                  <li>Flight simulators and virtual reality experiences for an immersive pilot experience.</li>
                  <li>Global perspectives on aviation's role in connecting the world and addressing environmental challenges.</li>
                  <li>Unleash creativity with aviation-themed workshops, design challenges, and competitions.</li>
                </ul>
              </h5>
            </b>
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
