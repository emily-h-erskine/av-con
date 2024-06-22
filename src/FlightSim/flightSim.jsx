import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FlightSimImage from "./FlightSimImage.png";
import InsideAirplaneImage from "./InsideAirplane.jpg";
import FlightSimImageBanner from "./fightSimImageBanner";

export default function FlightSim() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-8">
      <FlightSimImageBanner />
      <Box sx={{ padding: { xs: '0 2%', md: '0 5%' } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box sx={{ paddingRight: { xs: '0', md: '5%' } }}>
              <h1>AvCon Xtra: The Flight Sim Challenge</h1>
              <h4>
                Get ready to soar to new heights with AvCon Xtra: The Flight Sim Challenge! This adrenaline-pumping event is set to take flight soon, promising an exhilarating 12-hour journey through the virtual skies.
                <br/><br/>
                Prepare for non-stop action as participants dive into the world of flight simulation, embarking on an epic adventure that begins at 8 am and doesn't touch down until 8 pm. With multiple flight simulators ready to take flight, AvCon Xtra will bring together aviation enthusiasts from all corners of Ireland, uniting them in a shared passion for high-flying excitement.
              </h4>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={FlightSimImage}
                alt="FlightSim"
                style={{ width: '100%', maxWidth: '100%', mixBlendMode: 'luminosity' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <br/><br/>
      <Box sx={{ padding: { xs: '0 2%', md: '0 5%' } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={InsideAirplaneImage}
                alt="Inside Airplane Image"
                style={{ width: '100%', maxWidth: '100%', mixBlendMode: 'luminosity' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ paddingLeft: { xs: '0', md: '5%' } }}>
              <h4>
                But AvCon Xtra isn't just about the thrill of the challenge—it's also about giving back. In support of the Shannon Aviation Museum, all proceeds from this competition will contribute to preserving Ireland's rich aviation heritage, ensuring that future generations can continue to be inspired by the wonders of flight.
                <br/><br/>
                Teams of participants will compete head-to-head in flight simulators, charting courses around the globe with strategic stop-offs and encountering a series of thrilling and daring challenges along the way. From navigating through turbulent weather to executing precision landings, every twist and turn will test the skills and teamwork of each competing crew.
                <br/><br/>
                To take part in this epic event, teams must meet a fundraising requirement, with every euro raised contributing to the success of the Shannon Aviation Museum and the continuation of its invaluable work.
              </h4>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box 
        sx={{
          height: 'auto',
          padding: '5%',
          fontSize: { xs: '4vw', md: '2vw' },
          fontWeight: '800',
          textAlign: 'center',
          color: 'white',
        }}
      >
        Ready to take flight and join the adventure? For more information or to register your team, reach out to our Flight Sim Team at flightsim@avcon.ie. Don't miss your chance to be part of AvCon Xtra: The Flight Sim Challenge—where the sky is the limit!
      </Box>
    </main>
  );
}
