import React from "react";
import Grid from "@mui/material/Grid";
import Sponsor from "./sponsor";

// Sponsor images
import SponsoredBy from "./SponsorImages/1.png";
import S22 from "./SponsorImages/S22.png";
import S23 from "./SponsorImages/S23.png";
import S24 from "./SponsorImages/S24.jpeg";
import AirCorpLogo from "./SponsorImages/AirCorpsLogo.jpeg";
import TYHubLogo from "./SponsorImages/TYHubLogo.jpg";
import ODohertysLogo from "./SponsorImages/ODohertysLogo.jpg";

// Sponsor Video
import SponsorsPartners2025 from "./SponsorsPartners2025.mp4";


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

      {/* Sponsored By */}
      <Grid container justifyContent="center" sx={{ mb: 4 }}>
        <SponsorImage src={SponsoredBy} alt="AvCon Sponsored By" />
      </Grid>
      <Grid container justifyContent="center" padding="2rem">
        <Grid item xs={12} md={10} lg={8}>
          <video
            src={SponsorsPartners2025}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          />
        </Grid>
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
