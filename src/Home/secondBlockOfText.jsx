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
      <div style={{ padding: "0 5% 0 0" }}>
        <hr />
        <h3>AvCon Xtra: 12-Hour Flight Sim Competition:</h3>

        <h5>
          <ul>
            <li>Non-stop Action: Join us for a thrilling 12-hour Flight simulation competition that kicks off at X am and concludes at X pm.</li>
            <li>Support Shannon Aviation Museum: All proceeds from this competition will go to the Shannon Aviation Museum.</li>
            <li>Team Competition: Teams of 4-8 participants will compete in 4 flight simulators, flying around the world with stop offs and facing fun & extreme challenges along the way.</li>
            <li>Fundraising Requirement: Each team must raise a minimum of €XXXX to enter.</li>
            <li>To Register a Team: Contact our Flight Sim Team at fightsim@avcon.ie</li>
          </ul>
        </h5>
        
        <hr/>

        <h3>Exhibitor Inquiries:</h3> 
        <h5>If you are interested in showcasing your products or services at AvCon, please contact us at hello@avcon.ie.</h5>
      </div>
    </Box>
  );
}
