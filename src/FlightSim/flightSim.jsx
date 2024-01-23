import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FlightSimImage from "./FlightSimImage.png";
import FlightSimImageBanner from "./fightSimImageBanner";

export default function FlightSim() {
  return (
      <main className="flex min-h-screen flex-col justify-between p-24">
        <FlightSimImageBanner/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={FlightSimImage}
                  alt="FlightSim"
                  style={{ width: '80%', mixBlendMode: 'luminosity'}}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <div style={{padding: '0 5% 0 0'}}>
                <h1>AvCon Xtra: 12-Hour Flight Sim Competition:</h1>
                <ul>
                  <li>Non-stop Action: Join us for a thrilling 12-hour Flight simulation competition that kicks off at X am and concludes at X pm.</li>
                  <li>Support Shannon Aviation Museum: All proceeds from this competition will go to the Shannon Aviation Museum.</li>
                  <li>Team Competition: Teams of 4-8 participants will compete in 4 flight simulators, flying around the world with stop offs and facing fun & extreme challenges along the way.</li>
                  <li>Fundraising Requirement: Each team must raise a minimum of €XXXX to enter.</li>
                </ul>
                <h3>For More Information or To Register a Team: Contact our Flight Sim Team at fightsim@acon.ie</h3>
              </div>
            </Grid>
          </Grid>
        </Box>
      </main>
  );
}