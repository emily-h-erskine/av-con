import React from "react";
import Grid from "@mui/material/Grid";
import FacebookNews from "./facebookNews.jsx";
import NewsContent from "./newsContent.jsx";
import "./newsUpdates.css";

export default function News() {
  return (
    <main className="news-main" aria-labelledby="news-and-updates">
      <h2 id="news-and-updates" className="news-title">
        📰 Get the Latest News & Updates
      </h2>

      <Grid container spacing={4} className="news-grid">
        {/* Left Column: Social Media */}
        <Grid item xs={12} md={6}>
          <section
            aria-labelledby="social-media-updates"
            className="social-section"
          >
            <h3 id="social-media-updates" className="section-heading">
              📺 TY Hub YouTube Live Stream
            </h3>
            <div className="video-container" role="region" aria-label="YouTube Live Stream">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/7_AYMtVLbhI?si=ulFkMd-tNUI6KD3z"
                title="TY Hub YouTube Livestream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <h3 className="section-heading" style={{ marginTop: "2rem" }}>
              📘 Facebook Feed
            </h3>
            <FacebookNews />
          </section>
        </Grid>

        {/* Right Column: News & Press */}
        <Grid item xs={12} md={6}>
          <section
            aria-labelledby="latest-news"
            className="press-section"
          >
            <h3 id="latest-news" className="section-heading">
              🗞️ Latest News & Press
            </h3>
            <NewsContent />
          </section>
        </Grid>
      </Grid>
    </main>
  );
}
