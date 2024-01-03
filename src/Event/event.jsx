import React from "react";
import EventFirstBlock from "./eventsFirstBlock";
import EventSecondBlock from "./eventSecondBlock";

export default function Event() {
  return (
      <main className="flex min-h-screen flex-col justify-between p-24">
         <h1 style={{textAlign: 'center'}}>AvCon 2024 - The Future of Aviation</h1>
         <br/>
         <EventFirstBlock />
         <br /><br />
         <EventSecondBlock />
      </main>
  );
}