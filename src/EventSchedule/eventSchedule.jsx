import React from "react";
import AVConSchedule from "./AvConSpeakerSchedule.png";

export default function EventSchedule() {
    return (
        <main>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>Event Schedule</h3>

                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <img 
                        src={AVConSchedule} 
                        alt="AVCon Speaker Schedule" 
                        style={{ width: "100%", height: "auto" }}
                    />
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
        </main>
    );
}
