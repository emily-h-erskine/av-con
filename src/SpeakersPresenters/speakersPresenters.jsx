import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Speaker from "./speaker";
import KarlBoweImage from './PresenterSpeakerImages/KarlBowe.jpeg';

export default function SpeakersPresentors() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-24">
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Speakers and Presenters
      </h1>
      <br /><br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{ padding: '5%' }}>
            <Speaker 
              SpeakerImage={KarlBoweImage}
              SpeakerName="Karl Bowe"
              SpeakerBio="Karl Bowe has over 10 years experience within the entertainment industry that varies from acting, modelling, hosting and presenting.
              Trained in Bull Alley, Liberties College to pursue an acting career from 2009-2013, Karl featured in some of their local productions before branching out into theatre and plays nationwide.
              In 2012, Karl joined a vocal harmony group called “Element” and made it to boot camp stages in X-Factor.
              In 2014, Karl was crowned Mr. Ireland and represented the country at that years Mr. World which was held in Torquay, England. 
              Over the years, he appeared in numerous pantos across the country as well as hosting some high profile events.
              Karl recently featured as the electrician in the “Giggly Bit” commercial for Eir broadband and is currently playing the role of “Andy” the barman in RTE's Fair City. He also does voice over work and provides the announcements on Dublin City FM."
            />
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: '5%' }}>
            <Speaker 
                SpeakerImage={KarlBoweImage}
                SpeakerName="Karl Bowe"
                SpeakerBio="Karl Bowe has over 10 years experience within the entertainment industry that varies from acting, modelling, hosting and presenting.
                Trained in Bull Alley, Liberties College to pursue an acting career from 2009-2013, Karl featured in some of their local productions before branching out into theatre and plays nationwide.
                In 2012, Karl joined a vocal harmony group called “Element” and made it to boot camp stages in X-Factor.
                In 2014, Karl was crowned Mr. Ireland and represented the country at that years Mr. World which was held in Torquay, England. 
                Over the years, he appeared in numerous pantos across the country as well as hosting some high profile events.
                Karl recently featured as the electrician in the “Giggly Bit” commercial for Eir broadband and is currently playing the role of “Andy” the barman in RTE's Fair City. He also does voice over work and provides the announcements on Dublin City FM."
            />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}