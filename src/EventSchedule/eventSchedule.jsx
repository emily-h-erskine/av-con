import React from "react";
import Timeline from './timeline.jsx';
import EventAVCon from "./EventAVCon.jpeg"; 
import EventAVConXtra from "./EventAVConXtra.jpeg";


export default function EventSchedule() {
  const eventsData = [
    {
      date: '2024',
      event: 'AVCon',
      description: 'Description for Event 1',
      imageSrc: EventAVCon,
      imageAlt: 'AVCon Event',
    },
    {
      date: '2024',
      event: 'AVCon Xtra',
      description: 'Description for Event 2',
      imageSrc: EventAVConXtra,
      imageAlt: 'AVCon Xtra',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col p-24">
          <div className="event-container">
            <h1 className="event-title">Event Schedule</h1>
            <Timeline events={eventsData} />
          </div>
    </main>
  );
}
