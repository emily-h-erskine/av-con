import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function EventSecondBlock() {
  return (
    <Box style={{ padding: "0 0 0 5%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <div>
            <b>Part 2 - 24-Hour Flight Sim Competition: </b>
            <ul>
              <li><b>Non-stop Action:</b> Join us for a thrilling 24-hour flight simulation competition that kicks off at 12 pm on day 1 and concludes at 12 pm on day 2.</li>
              <li><b>Support Shannon Aviation Museum:</b> All proceeds from this competition will go to the Shannon Aviation Museum.</li>
              <li><b>Team Competition:</b> Teams of 4-8 participants will compete in 4 flight simulators, flying around the world without stopping.</li>
              <li><b>Fundraising Requirement:</b> Each team must raise a minimum of €3000 to enter.</li>
              <li><b>To Register a Team:</b> Contact our flight sim team at flightsim@avcon.ie.</li>
            </ul>
            <br />
            <b>Exhibitor Inquiries:</b>
            <h5>If you are interested in showcasing your products or services at AvCon, please contact us at hello@avcon.ie.</h5>
            <hr />
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
      <br />
      <h5>
        AvCon promises to be an event like no other, offering a unique blend of education, entertainment, and fundraising for a great cause. Join us on October 2024 and be a part of the aviation revolution!
        <br /><br />
        For the latest updates and information, visit our website at www.avcon.ie
        <br />
        Don't miss your chance to be a part of the future of aviation at AvCon!
      </h5>
    </Box>
  );
}
