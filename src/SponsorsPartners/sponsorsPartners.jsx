import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sponsor from "./sponsor";
import AirCorpLogo from './SponsorImages/AirCorpLogo.jpg';
import HireUpLogo from './SponsorImages/HireUpLogo.jpg';
import ShannonAirportLogo from './SponsorImages/ShannonAirportLogo.jpg';
import TYHubLogo from './SponsorImages/TYHubLogo.jpg';
import ODohertysLogo from './SponsorImages/ODohertysLogo.jpg';

export default function SponsorsPartners() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-24">
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Thank you to All Our Sponsors and Partners
      </h1>
      <br /><br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Sponsor
              logoUrl={AirCorpLogo}
              sponsorName="Irish Air Corps"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Sponsor
              logoUrl={HireUpLogo}
              sponsorName="Hire Up"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Sponsor
              logoUrl={ShannonAirportLogo}
              sponsorName="Shannon Airport"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Sponsor
              logoUrl={TYHubLogo}
              sponsorName="TY Hub"
            />
          </Grid>
        </Grid>
      </Box>
      <Sponsor
        logoUrl={ODohertysLogo}
        sponsorName="O'Doherty Media Group"
      />
    </main>
  );
}