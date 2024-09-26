import React from "react";
import HeroSection from "./HeroSection";
import FirstImageAndText from "./firstBlockOfText";
import MiddleBlockOfText from "./middleBlock";
import MailchimpScript from "./mailChimpPopup";
import Highlights from "./hightlights-section";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-between p-24">
            <HeroSection
                title="AvCon 2024"
                subtitle="Welcome to the Future of Aviation!"
                buttonText="Get Tickets"
                buttonLink="./BookTickets"
            />
            <FirstImageAndText />
            <MiddleBlockOfText />
            <Highlights />
            <MailchimpScript />
        </main>
    );
}
