import React from "react";
import EventFirstBlock from "./eventsFirstBlock";
import EventSecondBlock from "./eventSecondBlock";

export default function Event() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-8 lg:p-12 xl:p-24">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl" style={{textAlign: 'center'}}>AvCon 2024 - The Future of Aviation</h1>
      <br />
      <EventFirstBlock />
      <br /><br />
      <EventSecondBlock />
    </main>
  );
}
