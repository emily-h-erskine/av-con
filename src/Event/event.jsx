import React from "react";
import EventFirstBlock from "./eventsFirstBlock";
import EventSecondBlock from "./eventSecondBlock";

export default function Event() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-8 lg:p-12 xl:p-24">
      <h3 style={{textAlign: "center"}}>AvCon 2024 - The Future of Aviation</h3>
      <br />
      <EventFirstBlock />
      <br /><br />
      <EventSecondBlock />
    </main>
  );
}
