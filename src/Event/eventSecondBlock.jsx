import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function EventSecondBlock() {
  return (
    <Box style={{ padding: "0 0 0 5%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <div>
            Flight Simulators and Virtual Reality: Experience the thrill of being a pilot without leaving the ground! AvCon 2024 offers state-of-the-art flight simulators and virtual reality experiences, allowing attendees to take control and navigate the skies like never before.
            <br/><br/>
            Global Perspectives: Understand how aviation connects the world. Learn about international collaborations, the impact of technology on global travel, and the role of aviation in addressing environmental challenges.
            <br/><br/>
            Unleash Your Imagination: AvCon 2024 encourages creativity and innovation. Engage in aviation-themed workshops, design challenges, and competitions that will spark your imagination and leave you with a newfound appreciation for the limitless possibilities of flight.
            <br/><br/>
            AvCon 2024 is not just an event; it's an expedition into the future of aviation. Embark on this thrilling journey with us and discover the endless horizons that await in the sky. The future is yours to explore! #AvCon2024 #FutureOfAviation #InnovationInTheSkies

          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://www.dublinaerospace.com/site/uploads/sys_articles/62/Dublin%20Aerospace%20Recruiting%20Drive%20.jpg"
              alt="Airplane"
              style={{ width: '100%', maxWidth: '600px', mixBlendMode: 'luminosity' }}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
