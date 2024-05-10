import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ApprenticePhoto from './HomePageImages/apprentices.jpg'

export default function FirstImageAndText() {
  return (
    <Box style={{ padding: "0 5% 0 0" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={ApprenticePhoto}
              alt="Apprentice Photo"
              style={{ width: '100%', maxWidth: '600px', mixBlendMode: 'luminosity' }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div>
            <h1>Get ready to soar into the future of aviation at AvCon 2024!</h1>
            <h4 style={{textAlign: 'right'}}>
              Calling all primary, secondary, and 3rd level students, to experience an electrifying journey through the skies of innovation. 
              <br/><br/>
              Join us for an exhilarating event where you'll explore cutting-edge technology, witness thrilling demonstrations, and engage with industry experts shaping the future of flight.
              <br/><br/>
            </h4> 
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}