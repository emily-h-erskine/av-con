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
      <div className="event-container text-center">

        <h1 className="event-title text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">About AvCon</h1>

        <iframe
            className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2"
            height="500"
            width="100%"
            src={AVConPromoVideo}
            title="AvCon Future of Aviation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
      />

        <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl mt-6 px-2 md:px-4 lg:px-6">
          <p>
            Welcome to AvCon - The Future of Aviation! Taking place on November 7th at The Irish Air Corps, Casement Aerodrome, Baldonnel, Co. Dublin, AvCon is thrilled to present its signature event dedicated to all things aviation.
            Designed to ignite the imaginations of students from primary to tertiary education levels, AvCon offers a dynamic platform to explore career opportunities and delve into the exciting world of flight. Whether you're a curious primary schooler, a discerning secondary school student, especially in Transition Year, or a tertiary education enthusiast, AvCon promises an immersive experience like no other.
          </p>
          <p className="mt-4">
            Dubbed as the Comic Con of Aviation, AvCon brings together aviation enthusiasts, industry experts, and educational institutions to showcase the cutting-edge advancements and endless possibilities within the aviation sector. Join us at AvCon and let your dreams take flight!
          </p>
          <p className="mt-4">
            Please note: AvCon is only facilitating education group bookings at the moment. 
          </p>
          <p className="mt-4">
            <a href="/BookTickets" className="text-blue-500 underline">Register through our registration and ticket page.</a>
          </p>
          <p className="mt-4">
            For all other queries please contact us at <a href="mailto:hello@avcon.ie" className="text-blue-500 underline">hello@avcon.ie</a>
          </p>
        </div>
        
        {/* Uncomment this when AboutTimeline is ready */}
        {/* <AboutTimeline aboutAVCon={aboutAVCon} /> */}
        
      </div>
    </main>
  );
}
