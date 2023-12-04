import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function EventFirstBlock() {
  return (
    <Box style={{ padding: "0 5% 0 0" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://fullfatthings-keyaero.b-cdn.net/sites/keyaero/files/inline-images/Pilatus%20PC-9M%20%5B260%2C%20Irish%20Air%20Corps%20College%20-%20Flying%20Training%20School%2C%20Irish%20Air%20Corps%2C%20RAF%20Cosford%20Airshow%202016%5D%201.JPG"
              alt="Airplane"
              style={{ width: '100%', maxWidth: '600px', mixBlendMode: 'luminosity' }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <b>Part 1 - Aviation Convention: </b>
            <ul>
              <li><b>Discover Career Opportunities:</b> AvCon brings together the best and brightest minds in aviation to shed light on the exciting careers this industry has to offer.</li>
              <li><b>Tech Showcase:</b> Get a glimpse into the future with presentations on the latest aviation technology.</li>
              <li><b>Engaging Talks:</b> Hear from industry experts and thought leaders who will share their insights and experiences.</li>
              <li><b>Exhibitors:</b> Explore booths featuring the latest innovations, educational institutions, and career opportunities in aviation.</li>
            </ul>
            <b>Pricing:</b>
            <ul>
              <li>School Groups: Free with prior valid registration</li>
              <li>Third-Level Students: Free with a Valid Student ID</li>
              <li>Individual Tickets: €10 per person</li>
            </ul>
            <h5>To Register a School: Contact our dedicated school team at schools@avcon.ie.</h5>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
