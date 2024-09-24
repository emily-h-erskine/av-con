import React from "react";
export default function FlightSimImageBanner() {
    return (
        <div style={{ position: "relative", padding: "0% 0% 5% 0%" }}>
            <img
                src="https://www.aviationpress.co.uk/wp-content/uploads/2022/04/PC-12-Banner-scaled.jpg"
                alt="aeroplanes in a hanger"
                style={{
                    position: "relative",
                    zIndex: "-1",
                    width: "100%",
                    mixBlendMode: "luminosity",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    left: 0,
                    top: 0,
                    position: "absolute",
                    zIndex: "0", // Higher z-index than the image
                    mixBlendMode: "darken",
                    background:
                        "linear-gradient(180deg, var(--background-dark) 0%, rgba(7, 16, 29, 0) 100%)",
                }}></div>
            <div className="hero-content-container hero-content-position">
                <h1 className="title">
                    AN UNFORGETTABLE THRILL FOR GAMERS AND ENTHUSIASTS
                </h1>
                <h2 className="sub-title">
                    Take the stick for an epic experience with AvCon Xtra's
                    Flight Sim Challenge
                </h2>
                <button className="btn-primary uppercase">Book Now</button>
            </div>
        </div>
    );
}
