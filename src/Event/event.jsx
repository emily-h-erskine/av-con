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
         <br /><br />
        <div style={{padding: '1% 5%'}}>
        AvCon promises to be an event like no other, offering a unique blend of education, entertainment, and fundraising for a great cause. Join us on [event dates] and be a part of the aviation revolution!
        <br/><br/>
        For the latest updates and information, visit our website at www.avcon.ie 
        <br/>
        Don't miss your chance to be a part of the future of aviation at AvCon!
        </div>
      </main>
  );
}