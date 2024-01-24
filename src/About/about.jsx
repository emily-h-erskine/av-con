import React from "react";
import AboutTimeline from './aboutTimeline.jsx';
import AVConPromoVideo from './The Future of aviation.mp4';

export default function About() {
  const aboutAVCon = [
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
      imageAlt: 'Image 2 Alt Text',
    },
  ];


  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8 lg:p-12">
      <div className="event-container">
        <h1 className="event-title text-3xl md:text-4xl lg:text-5xl xl:text-6xl">About AVCon</h1>
        <div style={{ textAlign: "center", paddingTop: "2%" }}>
          <iframe
            className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2"
            height="630"
            width="100%"
            src={AVConPromoVideo}
            title="AVCon Future of Aviation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          {/* <AboutTimeline aboutAVCon={aboutAVCon} /> */}
        </div>
      </div>
    </main>
  );
}