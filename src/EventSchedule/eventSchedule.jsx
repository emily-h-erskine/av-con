import React from "react";
import AVConSchedule from "./AvConSpeakerSchedule.png";
import Session1 from "./EventScheduleImages/Event1.png";
import Session2 from "./EventScheduleImages/Event2.png";
import Session3 from "./EventScheduleImages/Event3.png";

export default function EventSchedule() {
    return (
        <main>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>Event Schedule</h3>

                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "1rem",
                            justifyItems: "center",
                            margin: "0 auto",
                        }}
                    >
                        <img
                            src={Session1}
                            alt="AVCon Speaker Schedule"
                            style={{ width: "100%", height: "auto" }}
                        />
                        <img
                            src={Session2}
                            alt="AVCon Speaker Schedule"
                            style={{ width: "100%", height: "auto" }}
                        />
                        <img
                            src={Session3}
                            alt="AVCon Speaker Schedule"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </div>

                <div style={{ textAlign: "center" }}>
                    <h6 style={{ marginBottom: "1rem" }}>LIVE STREAM on TY HUB YOUTUBE</h6>
                    <div 
                        style={{
                            position: "relative", 
                            paddingBottom: "56.25%", 
                            height: 0, 
                            overflow: "hidden", 
                            maxWidth: "100%", 
                            backgroundColor: "#000",
                            borderRadius: "8px",
                            marginBottom: "3rem"
                        }}
                    >
                        <iframe 
                            src="https://www.youtube.com/embed/7_AYMtVLbhI?si=ulFkMd-tNUI6KD3z" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        />
                    </div>
                </div>
            </div>

            {/* Media Queries for responsive images */}
            <style jsx>{`
                @media (max-width: 1024px) {
                    div {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    div {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </main>
    );
}
