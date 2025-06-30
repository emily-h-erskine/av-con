import React from "react";
import Grid from "@mui/material/Grid";
import Sponsor from "./sponsor";

// Sponsor images
import SponsoredBy from "./SponsorImages/1.png";
import S3 from "./SponsorImages/3.png";
import S4 from "./SponsorImages/4.png";
import S5 from "./SponsorImages/5.png";
import S6 from "./SponsorImages/6.png";
import S7 from "./SponsorImages/AvCon Supported By Banners -2.png";
import S8 from "./SponsorImages/AvCon Supported By Banners -3.png";
import S9 from "./SponsorImages/AvCon Supported By Banners -4.png";
import S10 from "./SponsorImages/AvCon Supported By Banners -5.png";
import S11 from "./SponsorImages/AvCon Supported By Banners -7.png";
import S12 from "./SponsorImages/AvCon Supported By Banners -9.png";
import S13 from "./SponsorImages/AvCon Supported By Banners -10.png";
import S14 from "./SponsorImages/AvCon Supported By Banners -11.png";
import S15 from "./SponsorImages/AvCon Supported By Banners -12.png";
import S16 from "./SponsorImages/AvCon Supported By Banners -13.png";
import S17 from "./SponsorImages/AvCon 16.png";
import S18 from "./SponsorImages/AvCon 17.png";
import S19 from "./SponsorImages/AvCon 18.png";
import S20 from "./SponsorImages/AvCon 19.png";
import S21 from "./SponsorImages/AvCon 20.png";
import S22 from "./SponsorImages/S22.png";
import S23 from "./SponsorImages/S23.png";
import S24 from "./SponsorImages/S24.jpeg";
import AirCorpLogo from "./SponsorImages/AirCorpsLogo.jpeg";
import TYHubLogo from "./SponsorImages/TYHubLogo.jpg";
import ODohertysLogo from "./SponsorImages/ODohertysLogo.jpg";

// 🧩 Reusable Image Component
const SponsorImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: "100%",
      maxWidth: "400px",
      opacity: 0.7,
      transition: "opacity 0.3s ease-in-out",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
    onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
  />
);

export default function SponsorsPartners() {
  const generalSponsors = [
    S7, S3, S4, S5, S6, S8, S9, S10,
    S11, S13, S12, S16, S14, S15,
    S17, S18, S19, S20, S21,
  ];

  const exhibitionPartners = [S23];
  const mainStagePartners = [S24];
  const liveStreamPartners = [S22, TYHubLogo, ODohertysLogo];

  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-24">
      {/* Main Header */}
      <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our Sponsors and Partners
      </h3>

      {/* Description */}
      <p style={{ textAlign: "center", padding: "2%" }}>
        AvCon - The Future of Aviation is an unparalleled event made possible through the generous support of our sponsors,
        exhibitors, and partners. This collaboration, including a key partnership with The Irish Air Corps, brings together
        leading aviation professionals, innovative companies, and educational institutions to create an inspiring experience...
      </p>

      {/* Sponsored By Image */}
      <Grid container justifyContent="center" sx={{ mb: 4 }}>
        <SponsorImage src={SponsoredBy} alt="AvCon Sponsored By" />
      </Grid>

      {/* General Sponsors */}
      <Grid container spacing={2} justifyContent="center">
        {generalSponsors.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <SponsorImage src={img} alt={`General Sponsor ${index + 1}`} />
          </Grid>
        ))}
      </Grid>

      {/* Exhibition Partners */}
      <h6 style={{ textAlign: "center", padding:"2rem" }}>Exhibition Partners:</h6>
      <Grid container spacing={2} justifyContent="center" padding="2rem">
        {exhibitionPartners.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SponsorImage src={img} alt={`Exhibition Partner ${index + 1}`} />
          </Grid>
        ))}
      </Grid>

      {/* Main Stage Partners */}
      <h6 style={{ textAlign: "center", marginBottom: "2rem" }}>Main Stage Partners:</h6>
      <Grid container spacing={2} justifyContent="center" padding="2rem">
        {mainStagePartners.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SponsorImage src={img} alt={`Main Stage Partner ${index + 1}`} />
          </Grid>
        ))}
      </Grid>

      {/* Live Stream Partners */}
      <h6 style={{ textAlign: "center", marginBottom: "2rem" }}>Live Stream Partners:</h6>
      <Grid container spacing={2} justifyContent="center" padding="2rem" alignItems="center">
        {liveStreamPartners.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SponsorImage src={img} alt={`Live Stream Partner ${index + 1}`} />
          </Grid>
        ))}
      </Grid>

      {/* Collaboration */}
      <h6 style={{ textAlign: "center", marginBottom: "2rem" }}>
        AvCon In Collaboration with:
      </h6>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Sponsor logoUrl={AirCorpLogo} sponsorName="Irish Air Corps" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Sponsor logoUrl={TYHubLogo} sponsorName="TY Hub" />
        </Grid>
      </Grid>
    </main>
  );
}
