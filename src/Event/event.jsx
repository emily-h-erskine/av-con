import React from "react";
import EventFirstBlock from "./eventsFirstBlock";
import EventSecondBlock from "./eventSecondBlock";
import HeroSection from "../CommonComponents/HeroSection/HeroSection";

export default function Event() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-8 lg:p-12 xl:p-24">
      <HeroSection
                defaultTitle="AvCon 2025 - The Future of Aviation"
                defaultSubtitle="Welcome to AvCon 2025 - an exhilarating journey into the future of aviation! Calling all Primary, Secondary, and 3rd Level Students, as well as aviation enthusiasts, to join us for a thrilling adventure that will take you soaring through the skies of innovation and discovery."
                smallScreenTitle="AvCon 2025 - The Future of Aviation"
                smallScreenSubtitle="Welcome to AvCon 2025 - an exhilarating journey into the future of aviation!"
                buttonText="Pre-Register Your School for AvCon 2025"
                buttonLink="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__WNhaCZURUg1NktIQVBGTThPMUlSWE4xSDdQWDZMWi4u"
      />
      <br />
      <EventFirstBlock />
      <br /><br />
      <EventSecondBlock />
    </main>
  );
}
