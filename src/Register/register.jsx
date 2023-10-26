import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Register() {
  return (
      <main className="flex min-h-screen flex-col justify-between p-24">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?cs=srgb&dl=pexels-pixabay-46148.jpg&fm=jpg"
                  alt="Airplane"
                  style={{ width: '80%' }}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <p>Register for AVCon</p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </main>
  );
}