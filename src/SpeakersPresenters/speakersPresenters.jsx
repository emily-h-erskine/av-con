import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Speaker from "./speaker";
import KarlBoweImage from './PresenterSpeakerImages/KarlBowe.jpeg';
import AllyGarvey from './PresenterSpeakerImages/Ally.JPG';

export default function SpeakersPresentors() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-24">
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Speakers and Presenters
      </h1>
      <br /><br />
      <h5 style={{padding: '0 5%'}}>Get ready to soar into the future of aviation at AvCon 2024! We're thrilled to introduce our dynamic duo of presenters, Ally Garvey and Karl Bowe, who will be your guides through this exhilarating journey. From the warm welcome to riveting interviews and captivating talks with esteemed guests from the aviation world, Ally and Karl will ensure an unforgettable experience. Stay tuned for announcements on our line-up of guests and talks that will keep you at the edge of your seat. Trust us, you won't want to miss the electrifying show we have in store for you.
        <br /><br />
      </h5>
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
                SpeakerImage={AllyGarvey}
                SpeakerName="Ally Garvey"
                SpeakerBio="Working within the fashion and media industry for over 15 years, Ally Garvey thrives on delivering the latest showbiz news and the Hottest topics to a wide audience. Ally has worked on live tv for over a number of years now on a range of different broadcasting stations where quick thinking and wide range of conversational skills are a must. 
                Ally's favourite environment to work in is a live audience, she loves to engage with co. presenters and the audience.
                Check out  Ally's instagram page to get a glimpse of the many different events both on screen and off screen she has worked on."
            />
          </Grid>
        </Grid>
      </Box>
      <h4 style={{padding: '0 5%', textAlign: 'center'}}>Calling all educators! Secure your school's free tickets now, as individual tickets are not available at this time.
        <br/> Register your education group <a href="/BookTickets"><u>HERE</u></a> and get ready for a flight of inspiration and innovation on November 7th at Casement Aerodrome, Baldonnel, co. Dublin.
      </h4>
    </main>
  );
}