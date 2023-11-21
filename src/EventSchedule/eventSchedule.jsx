import React from "react";
import Timeline from './timeline.jsx';


export default function EventSchedule() {
  const eventsData = [
    {
      date: 'January 2023',
      event: 'Event 1',
      description: 'Description for Event 1',
    },
    {
      date: 'February 2023',
      event: 'Event 2',
      description: 'Description for Event 2',
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
