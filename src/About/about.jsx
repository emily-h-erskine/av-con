import React from "react";
import AboutTimeline from "./components/AboutTimeline/aboutTimeline.jsx";
import AVConPromoVideo from "./The Future of aviation.mp4";
import "./about.css";

export default function About() {
    const aboutAVCon = [
        {
            date: "January 2023",
            event: "Event 1",
            description: "Description for Event 1",
            imageSrc:
                "https://www.atlanticaviation.ie/wp-content/uploads/2023/03/Shane-and-girls-scaled.jpg",
            imageAlt: "Image 1 Alt Text",
        },
        {
            date: "February 2023",
            event: "Event 2",
            description: "Description for Event 2",
            imageSrc:
                "https://www.atlanticaviation.ie/wp-content/uploads/2023/03/Shane-and-girls-scaled.jpg",
            imageAlt: "Image 2 Alt Text",
        },
    ];

    return (
        <main className="about-main">
            <div className="about-container">
                <h3 className="about-heading">About AvCon</h3>

                {/* Uncomment this when AboutTimeline is ready */}
                {/* <AboutTimeline aboutAVCon={aboutAVCon} /> */}
            </div>
                <div container className="about-grid">
                    <div item className="about-grid-item-video">
                        <iframe
                            className="about-video"
                            src={AVConPromoVideo}
                            title="AvCon Future of Aviation"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                    <div item className="about-grid-item-text">
                        <p>
                        AvCon 2025 - The Future of Aviation Is Landing
                        <br/>
                        Where the next generation of talent meets the trailblazers of the skies. Where careers take flight — and the industry connects with its future.
                        On October 2nd, AvCon returns live from Casement Aerodrome, Baldonnel, hosted by the Irish Air Corps — bringing together over 8,000 registered students, 300+ schools and colleges, and a powerful lineup of industry leaders, innovators, and educators.
                            <br />
                            <br />
                            For all other queries please contact us at{" "}
                            <a href="mailto:hello@avcon.ie">hello@avcon.ie</a>
                        </p>
                    </div>
                </div>
                <div className="about-grid-item-text">
                    <br />
                    This is Ireland's leading aviation and aerospace careers event, built to engage 15-25-year-olds with real-world pathways in aviation, aerospace, space tech, UAS, simulation, sustainability, air traffic, engineering, and more.
                    <br />
                    <br />
                    🚀 For Industry: Showcase your brand, your tech, and your opportunities — in person and via our high-impact Live Stream (TYHub.ie & YouTube). Network with future-ready students, build talent pipelines, and connect with a growing community of educators shaping Ireland's workforce.
                    <br/>
                    🎓 For Students & Colleges: Step inside a hangar full of aircraft, innovation zones, flight simulators, and inspiring speakers. Hear from drone pilots, aerospace engineers, Air Corps leaders, space entrepreneurs — and imagine yourself in their shoes.
                    <br/>
                    AvCon isn't just about the future of aviation. It's about the future of your organisation. Be seen. Be heard. Be part of the movement.
                    <br/>
                    🛫 AvCon 2025 - Now boarding.
                    <br />
                </div>
        </main>
    );
}
