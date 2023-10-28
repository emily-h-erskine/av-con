import React from "react";
import HomeImageBanner from "./homeImageBanner";
import FirstImageAndText from "./firstBlockOfText";
import SecondImageAndText from "./secondBlockOfText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <HomeImageBanner />
      <FirstImageAndText />
      <br /><br />
      <SecondImageAndText />
    </main>
  );
}
