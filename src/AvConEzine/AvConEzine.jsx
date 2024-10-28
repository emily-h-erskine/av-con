import React from "react";
import HeroSection from "../CommonComponents/HeroSection/HeroSection";

export default function AvConEzine() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-8 lg:p-12 xl:p-24">
      <HeroSection
                defaultTitle="AVCON EZINE 2024"
                defaultSubtitle="AvCon is thrilled to present its signature event dedicated to all things aviation"
                smallScreenTitle="AvCon Ezine 2024"
                smallScreenSubtitle="AvCon presenting an event for all things aviation"
       />
    </main>
  );
}
