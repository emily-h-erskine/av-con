import React from "react";
import AVConSchedule from "./AvConSpeakerSchedule.png";

export default function EventSchedule() {
    return (
        <main className="flex min-h-screen flex-col p-24">
            <div className="event-container">
                <h3 style={{ textAlign: "center" }}>Event Schedule</h3>
                <br/><br/>
                <img src={AVConSchedule} width={'100%'}/>
            </div>
        </main>
    );
}
