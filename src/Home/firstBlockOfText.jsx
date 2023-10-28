import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function FirstImageAndText() {
  return (
      <Box style={{padding:" 0 5% 0 0"}}>
        <Grid container >
          <Grid item xs={7}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?cs=srgb&dl=pexels-pixabay-46148.jpg&fm=jpg"
                  alt="Airplane"
                  style={{ width: '80%', mixBlendMode: 'luminosity' }}
                />
              </div>
          </Grid>
          <Grid item xs={5}>
              <div>
                <p>
                  Welcome to AvCon, your gateway to the future of aviation! This two-day event is your ticket to explore the world of aviation, from thrilling careers to cutting-edge technology. Here's what you can expect at AvCon:
                  <br /><br /><br />
                  <b>Part 1 - Aviation Convention:</b>
                  <br /><br />
                  Discover Career Opportunities: AvCon brings together the best and brightest minds in aviation to shed light on the exciting careers this industry has to offer.
                  <br /><br />
                  Tech Showcase: Get a glimpse into the future with presentations on the latest aviation technology.
                  <br /><br />
                  Engaging Talks: Hear from industry experts and thought leaders who will share their insights and experiences.
                  <br /><br />
                  Exhibitors: Explore booths featuring the latest innovations, educational institutions, and career opportunities in aviation.
                  <br /><br />
                  <b>Pricing:</b>
                  <br /><br />
                  School Groups: Free admission.
                  <br />
                  Third-Level Students: Free with valid student cards.
                  <br />
                  Individual Tickets: €10 per person.
                  <br />
                  To Register a School: Contact our dedicated school team at schools@avcon.ie.
                </p>
              </div>
          </Grid>
        </Grid>
      </Box>
  );
}
