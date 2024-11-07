import React from "react";
import AVConSchedule from "./AvConSpeakerSchedule.png";
import Session1 from "./EventScheduleImages/Event1.png";
import Session2 from "./EventScheduleImages/Event2.png";
import Session3 from "./EventScheduleImages/Event3.png";

export default function EventSchedule() {
    return (
        <main>
            <div className="container">
                <h3 className="title">Event Schedule</h3>

                <div className="images-grid">
                    <img src={Session1} alt="AVCon Session 1" className="schedule-image" />
                    <img src={Session2} alt="AVCon Session 2" className="schedule-image" />
                    <img src={Session3} alt="AVCon Session 3" className="schedule-image" />
                </div>

                <div className="live-stream">
                    <h6 className="live-stream-title">LIVE STREAM on TY HUB YOUTUBE</h6>
                    <div className="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/7_AYMtVLbhI?si=ulFkMd-tNUI6KD3z"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }

                .title {
                    text-align: center;
                    margin-bottom: 2rem;
                }

                .images-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                    justify-items: center;
                    margin-bottom: 2rem;
                }

                .schedule-image {
                    width: 100%;
                    height: auto;
                }

                .live-stream {
                    text-align: center;
                }

                .live-stream-title {
                    margin-bottom: 1rem;
                }

                .video-container {
                    position: relative;
                    padding-bottom: 56.25%;
                    height: 0;
                    overflow: hidden;
                    max-width: 100%;
                    background-color: #000;
                    border-radius: 8px;
                    margin-bottom: 3rem;
                }

                .video-container iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                /* Responsive Styles */
                @media (max-width: 1024px) {
                    .images-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .images-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 480px) {
                    .container {
                        padding: 0 1rem;
                    }
                }
            `}</style>
        </main>
    );
}
