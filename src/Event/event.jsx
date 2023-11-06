import React from "react";
import EventFirstBlock from "./eventsFirstBlock";
import EventSecondBlock from "./eventSecondBlock";

export default function Event() {
  return (
      <main className="flex min-h-screen flex-col justify-between p-24">
         <h1 style={{textAlign: 'center'}}>What to Expect:</h1>
         <br/>
         <EventFirstBlock />
         <br /><br />
         <EventSecondBlock />
      </main>
  );
}