import React from "react";
import FirstImageAndText from "./firstBlockOfText";
import AdvertData from "./AdvertData";
import HeroSection from "../CommonComponents/HeroSection/HeroSection";


export default function AvconPathwayPortal() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8 lg:p-12">
      <HeroSection
                defaultTitle="AVIATION PATHWAY PORTAL (A.P.P.)"
                defaultSubtitle="AvCon is thrilled to present its signature event dedicated to all things aviation"
                smallScreenTitle="Avcon Pathway Portal"
                smallScreenSubtitle="AvCon presenting an event for all things aviation"
                buttonText="Register for Live Stream Now!"
                buttonLink="https://streamyard.com/watch/4DN8GWpH2XCr"
      />
      <div className="event-container text-center">
            <FirstImageAndText />
            <AdvertData />
      </div>
    </main>
  );
}
