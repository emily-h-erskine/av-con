import React from "react";
import Timeline from './timeline.jsx';


export default function EventSchedule() {
  const eventsData = [
    {
      date: 'January 2023',
      event: 'Event 1',
      description: 'Description for Event 1',
      imageSrc: 'https://www.atlanticaviation.ie/wp-content/uploads/2023/03/Shane-and-girls-scaled.jpg',
      imageAlt: 'Image 1 Alt Text',
    },
    {
      date: 'February 2023',
      event: 'Event 2',
      description: 'Description for Event 2',
      imageSrc: 'https://www.atlanticaviation.ie/wp-content/uploads/2023/03/Shane-and-girls-scaled.jpg',
      imageAlt: 'Image 1 Alt Text',
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
