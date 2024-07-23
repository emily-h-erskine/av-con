import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AircorpsImage from './HomePageImages/AirCorpsImage.jpg';

export default function SecondImageAndText() {
  return (
    <Box sx={{ padding: { xs: '0 2%', md: '0 5%' } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <h6>Highlights</h6>
              <p>
                <ul>
                  <li>AvCon 2024: A thrilling journey into the future of aviation, aerospace,  space & STEM for students.</li>
                  <li>Explore the wonders of aviation, from basics to cutting-edge technology.</li>
                  <li>Hands-on learning for primary and secondary students on flight principles and aerodynamics.</li>
                  <li>Career pathways for TY, LCA, LCVP, LC and tertiary students, connecting with industry professionals.</li>
                  <li>Inspirational speakers discussing the future of air travel, space exploration, and sustainable aviation.</li>
                  <li>Flight simulators and virtual reality experiences for an immersive pilot experience.</li>
                  <li>Global perspectives on aviation's role in connecting the world and addressing environmental challenges.</li>
                  <li>Unleash creativity with aviation-themed workshops, design challenges, and competitions.</li>
                </ul>
              </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={AircorpsImage}
              alt="Air Corps Helli Image"
              style={{ width: '100%', maxWidth: '100%', mixBlendMode: 'luminosity' }}
            />
          </div>
        </Grid>
      </Grid>
      <hr />
      <div style={{ padding: "0 5%" }}>
        <h6>Exhibitor Inquiries:</h6> 
        <p>If you are interested in showcasing your products or services at AvCon: <u><a href="./ExhibitorRegistration">click here</a></u></p>
      </div>
    </Box>
  );
}