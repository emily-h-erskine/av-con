import React from "react";
import AboutTimeline from './aboutTimeline.jsx';
import AVConPromoVideo from './The Future of aviation.mp4'

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
    <main className="flex min-h-screen flex-col p-24">
      <div className="event-container">
        <h1 className="event-title">About AVCon</h1>
        <div style={{textAlign: "center", padding:"2% 0 0 0"}}>
        <iframe 
          width="1120" 
          height="630"
          src={AVConPromoVideo}
          title="AVCon Future of Aviation" 
          frameborder="0" 
          allow="accelerometer; 
          autoplay; 
          clipboard-write; 
          encrypted-media; 
          gyroscope; 
          picture-in-picture; 
          web-share" allowfullscreen />
        </div>
        {/* <AboutTimeline aboutAVCon={aboutAVCon} /> */}
      </div>
    </main>
  );
}
