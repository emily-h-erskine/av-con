import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function FirstImageAndText() {
  return (
    <Box style={{ padding: "0 5% 0 0" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <div style={{ textAlign: 'center' }}>
            <img
              src="https://i.ytimg.com/vi/etSlzjGCiKg/maxresdefault.jpg"
              alt="Shannon Airport Image"
              style={{ width: '100%', maxWidth: '600px', mixBlendMode: 'luminosity' }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div>
            <h1>
              See you at AvCon!!
              <br /><br />
              Where the future of aviation takes flight!
            </h1>
            <h3 style={{ textAlign: 'right' }}>
              This two-day extravaganza opens the doors to a world of thrilling opportunities and cutting-edge technology in aviation.
            </h3>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}