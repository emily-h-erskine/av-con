import React from "react";
import HomeImageBanner from "./homeImageBanner";
import FirstImageAndText from "./firstBlockOfText";
import SecondImageAndText from "./secondBlockOfText";
import MiddleBlockOfText from "./middleBlock";
import MailchimpScript from "./mailChimpPopup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <HomeImageBanner />
      <FirstImageAndText />
      <br /><br />
      <MiddleBlockOfText />
      <br /><br />
      <SecondImageAndText />
      <MailchimpScript />
    </main>
  );
}
