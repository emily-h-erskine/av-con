import React from "react";
import HomeImageBanner from "./homeImageBanner";
import FirstImageAndText from "./firstBlockOfText";
import MiddleBlockOfText from "./middleBlock";
import MailchimpScript from "./mailChimpPopup";
import Highlights from "./hightlights-section";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-between p-24">
            <HomeImageBanner />
            <FirstImageAndText />
            <MiddleBlockOfText />
            <Highlights />
            <MailchimpScript />
        </main>
    );
};