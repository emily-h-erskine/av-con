import React from "react";
import HeroSection from "../CommonComponents/HeroSection/HeroSection";
import FirstImageAndText from "./firstBlockOfText";
import MiddleBlockOfText from "./middleBlock";
import MailchimpScript from "./mailChimpPopup";
import Highlights from "./hightlights-section";
import LastBlockOfText from "./lastBlackOfText";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-between p-24">
            <HeroSection
                defaultTitle="AN UNFORGETTABLE THRILL FOR GAMERS AND ENTHUSIASTS"
                defaultSubtitle="Take the stick for an epic experience with AvCon Xtra’s Flight Sim challenge"
                smallScreenTitle="AvCon 2025"
                smallScreenSubtitle="Take the stick for the Flight Sim Challenge"
                buttonText="Pre-Register Your School for AvCon 2025"
                buttonLink="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__WNhaCZURUg1NktIQVBGTThPMUlSWE4xSDdQWDZMWi4u"
            />
            <FirstImageAndText />
            <MiddleBlockOfText />
            <Highlights />
            <LastBlockOfText />
            <MailchimpScript />
        </main>
    );
}
