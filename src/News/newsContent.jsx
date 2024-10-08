import React, { useState } from 'react';
import { Box, Button, Typography, Collapse } from '@mui/material';

const NewsContent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h4" align="center" sx={{ margin: '1rem 0' }}>
        🎉 We did it! 🚀 AvCon - The Future of Aviation has officially launched! 🚀
      </Typography>
      
      <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
        A massive thank you to everyone who joined and supported the launch of our exciting initiative to inspire 6,000 students at The Irish Air Corps on November 7th. We are thrilled to announce that we will also Live Stream the event to over 600 schools across Ireland and Northern Ireland. Aviation enthusiasts can also tune in via YouTube and LinkedIn with TY Hub 🌍 🎉🚀✈️🛫🇮🇪✨️
      </Typography>

      <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
        ✨️ A big thank you to AirNav Ireland & the Irish Aviation Authority for co-hosting our official launch on August 29th, in the beautiful Atrium of The Times Building. ✈️ Special thanks to Aviation Skillnet for sponsoring the fabulous refreshments. 🛫
      </Typography>

      <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
        📸 Check out the photo gallery from the launch <a href="https://drive.google.com/drive/folders/1-ZtmuTUVVbTEN2QhP6FGuGRoJ2JmjxME?usp=share_link" target="_blank" rel="noopener noreferrer">here</a>.
      </Typography>

      <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
        📣 We also want to give a very special thank you to Irish Air Corps’ Rory O'Connor for our collaboration, and to John Drysdale, Jane Magill, Kumar Kaneswaran, Linda Barron, Julie Garland, Alec Elliott, Declan Fitzpatrick, Valentina Fitzpatrick, the IAA, and our media partner O'Doherty's Audio Visual. A heartfelt thank you to Team AvCon—without your incredible support from the start, none of this would be possible!
      </Typography>

      <Collapse in={expanded}>
        <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
          We’re also grateful to Minister for Transport, James Lawless, for showing his immense support for #AvCon and for speaking at the event. Thank you to the wonderful speakers, Dr. Peter Kearney & David Hodnett, and all our guests for attending our inaugural event. 🚀
        </Typography>
        <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
          🚁 There was an energetic buzz at the launch, with career paths ranging from the ground to outer space! We're certain this will spark inspiration to Dream Big and go Beyond Limits. The Future of Aviation is an exciting adventure, and we’re thrilled to be a part of it! 🌍
        </Typography>
        <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
          Thank you all again, and we look forward to shaping the future of aviation together on November 7th, 2024 at The Irish Air Corps in Casement Aerodrome, Baldonnel, Co. Dublin. 🛫
        </Typography>
        <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
          Get in touch to get involved! Team AvCon is ready to help you become a part of history with #AvCon2024. Email us at <a href="mailto:hello@avcon.ie">hello@avcon.ie</a> today! 🛬
        </Typography>
        <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
          #FutureOfAviation #IrishAirCorps #Careers #CareerPathways #BeMore #Aviation #Space #NextGen #Inspiration #Aerospace #Engineers #STEM #FIA2024
        </Typography>
      </Collapse>
      
      <Button onClick={toggleExpand} variant="outlined" sx={{ marginTop: 2 }}>
        {expanded ? 'Show Less' : 'Expand for More'}
      </Button>
    </Box>
  );
};

export default NewsContent;
