import React from "react";
import HeroSection from "../CommonComponents/HeroSection/HeroSection";
import './AvConEzine.css';

export default function AvConEzine() {
  return (
    <main className="main-container">
      <HeroSection
        defaultTitle="AVCON EZINE 2024"
        defaultSubtitle="AvCon is thrilled to present its signature event dedicated to all things aviation"
        smallScreenTitle="AvCon Ezine 2024"
        smallScreenSubtitle="AvCon presenting an event for all things aviation"
      />
      <div className="iframe-container">
        <iframe
          src="https://e.issuu.com/embed.html?d=avcon_ezine_2024-3&u=tyhub"
          title="Avcon Ezine 2024-3"
          allow="fullscreen"
        ></iframe>
      </div>
    </main>
  );
}
