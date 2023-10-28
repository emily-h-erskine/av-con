import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function SecondImageAndText() {
  return (
      <Box style={{padding:" 0 0 0 5%"}}>
        <Grid container >
          <Grid item xs={5}>
              <div>
                <p>
                Part 2 - 24-Hour Flight Sim Competition:
                <br /><br /><br />
                Non-stop Action: Join us for a thrilling 24-hour flight simulation competition that kicks off at 12 pm on day 1 and concludes at 12 pm on day 2.
                <br /><br />
                Support Shannon Aviation Museum: All proceeds from this competition will go to the Shannon Aviation Museum.
                <br /><br />
                Team Competition: Teams of 4-8 participants will compete in 4 flight simulators, flying around the world without stopping.
                <br /><br />
                Fundraising Requirement: Each team must raise a minimum of €3000 to enter.
                <br /><br />
                To Register a Team: Contact our flight sim team at flightsim@avcon.ie.
                <br /><br /><br />
                Exhibitor Inquiries:
                <br /><br />
                If you are interested in showcasing your products or services at AvCon, please contact us at hello@avcon.ie.
                <br /><br />
                AvCon promises to be an event like no other, offering a unique blend of education, entertainment, and fundraising for a great cause. Join us on [event dates] and be a part of the aviation revolution!
                <br /><br />
                Don't miss your chance to be a part of the future of aviation at AvCon!
                </p>
              </div>
          </Grid>
          <Grid item xs={7}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?cs=srgb&dl=pexels-pixabay-46148.jpg&fm=jpg"
                  alt="Airplane"
                  style={{ width: '80%' }}
                />
              </div>
          </Grid>
        </Grid>
      </Box>
  );
}
