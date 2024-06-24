import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sponsor from "./sponsor";
import AirCorpLogo from './SponsorImages/AirCorpsLogo.jpeg';
import HireUpLogo from './SponsorImages/HireUpLogo.jpg';
import ShannonAirportLogo from './SponsorImages/ShannonAirportLogo.jpg';
import TYHubLogo from './SponsorImages/TYHubLogo.jpg';
import ODohertysLogo from './SponsorImages/ODohertysLogo.jpg';
import AvationSkillnet from './SponsorImages/AviationSkillnetLogo.png';

export default function SponsorsPartners() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-24" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Our Sponsors and Partners
      </h1>

      <h4 style={{ textAlign:'center', padding:'2%' }}>AvCon - The Future of Aviation is an unparalleled event made possible through the generous support of our sponsors, exhibitors, and partners. This collaboration, including a key partnership with The Irish Air Corps, brings together leading aviation professionals, innovative companies, and educational institutions to create an inspiring experience. AvCon offers school and college groups free access to explore the cutting-edge advancements in aviation, meet industry experts, and engage with interactive exhibits, fostering the next generation of aviation enthusiasts and professionals. Join us in celebrating the future of flight and the minds shaping it.</h4>

      <div style={{padding: '2%', textAlign: 'center'}}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Collaboration with:</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Sponsor
                logoUrl={AirCorpLogo}
                sponsorName="Irish Air Corps"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Sponsor
                logoUrl={TYHubLogo}
                sponsorName="TY Hub"
              />
            </Grid>
          </Grid>
        </Box>
        <br /><br />
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Proudly supported by:</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Sponsor
                logoUrl={HireUpLogo}
                sponsorName="Hire Up"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Sponsor
                logoUrl={ShannonAirportLogo}
                sponsorName="Shannon Airport"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Sponsor
                logoUrl={AvationSkillnet}
                sponsorName="Aviation Skillnet"
              />
            </Grid>
          </Grid>
        </Box>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Media Partner:</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Sponsor
                logoUrl={ODohertysLogo}
                sponsorName="O'Doherty Media Group"
              />
            </Grid>
          </Grid>
        </Box>
      </div>

    </main>
  );
}