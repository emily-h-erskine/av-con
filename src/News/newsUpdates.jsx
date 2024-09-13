import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FacebookNews from "./facebookNews.jsx";
import PressRelease from "./AvConPressRelease-May7th.pdf";

const NewsContent = () => (
  <Box sx={{ padding: 2 }}>
    <h4 style={{ textAlign: 'center', margin: '1rem 0' }}>
      🎉 We did it! 🚀 AvCon - The Future of Aviation has officially launched! 🚀
    </h4>
    <p style={{ textAlign: 'center' }}>
      A massive thank you to everyone who joined and supported the launch of our exciting initiative to inspire 6,000 students at The Irish Air Corps on November 7th. We are thrilled to announce that we will also Live Stream the event to over 600 schools across Ireland and Northern Ireland. Aviation enthusiasts can also tune in via YouTube and LinkedIn with TY Hub 🌍 🎉🚀✈️🛫🇮🇪✨️
    </p>
    <p style={{ textAlign: 'center' }}>
      ✨️ A big thank you to AirNav Ireland & the Irish Aviation Authority for co-hosting our official launch on August 29th, in the beautiful Atrium of The Times Building. ✈️ Special thanks to Aviation Skillnet for sponsoring the fabulous refreshments. 🛫
    </p>
    <p style={{ textAlign: 'center' }}>
      📸 Check out the photo gallery from the launch <a href="https://drive.google.com/drive/folders/1-ZtmuTUVVbTEN2QhP6FGuGRoJ2JmjxME?usp=share_link" target="_blank" rel="noopener noreferrer">here</a>.
    </p>
    <p style={{ textAlign: 'center' }}>
      📣 We also want to give a very special thank you to Irish Air Corps’ Rory O'Connor for our collaboration, and to John Drysdale, Jane Magill, Kumar Kaneswaran, Linda Barron, Julie Garland, Alec Elliott, Declan Fitzpatrick, Valentina Fitzpatrick, the IAA, and our media partner O'Doherty's Audio Visual. A heartfelt thank you to Team AvCon—without your incredible support from the start, none of this would be possible!
    </p>
    <p style={{ textAlign: 'center' }}>
      We’re also grateful to Minister for Transport, James Lawless, for showing his immense support for #AvCon and for speaking at the event. Thank you to the wonderful speakers, Dr. Peter Kearney & David Hodnett, and all our guests for attending our inaugural event. 🚀
    </p>
    <p style={{ textAlign: 'center' }}>
      🚁 There was an energetic buzz at the launch, with career paths ranging from the ground to outer space! We're certain this will spark inspiration to Dream Big and go Beyond Limits. The Future of Aviation is an exciting adventure, and we’re thrilled to be a part of it! 🌍
    </p>
    <p style={{ textAlign: 'center' }}>
      Thank you all again, and we look forward to shaping the future of aviation together on November 7th, 2024 The Irish Air Corps in Casement Aerodrome, Baldonnel, Co. Dublin. 🛫
    </p>
    <p style={{ textAlign: 'center' }}>
      Get in touch to get involved! Team AvCon is ready to help you become a part of history with #AvCon2024. Email us at <a href="mailto:hello@avcon.ie">hello@avcon.ie</a> today! 🛬
    </p>
    <p style={{ textAlign: 'center' }}>
      #FutureOfAviation #IrishAirCorps #Careers #CareerPathways #BeMore #Aviation #Space #NextGen #Inspiration #Aerospace #Engineers #STEM #FIA2024
    </p>
  </Box>
);

export default function News() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Get the Latest Updates:</h3>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* Facebook Live Feed Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <h6>Facebook Live Feed</h6>
              <FacebookNews />
            </Box>
          </Grid>
          {/* Latest Press Release Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <h6>Latest</h6>
              <Grid item xs={12}>
                <NewsContent />
              </Grid>
              <p>-------- May 7th 2024 --------</p>
              <iframe src={PressRelease} width="100%" height="500px" style={{ border: 'none' }} title="Press Release"></iframe>
            </Box>
          </Grid>
          </Grid>
      </Box>
    </main>
  );
}