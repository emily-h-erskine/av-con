import React from "react";
import HeroMobile from "../Home/Hero-mobile.png";

export default function FlightSimImageBanner() {
    return (
        <div style={{ position: "relative", padding: "0% 0% 5% 0%" }}>
            <picture>
                {/* This will display on screens 600px wide or smaller */}
                <source
                    media="(max-width: 600px)"
                    srcSet={HeroMobile}
                    className="img-fluid"
                />

                {/* This will display on screens larger than 600px */}
                <source
                    media="(min-width: 600px)"
                    srcSet="https://www.aviationpress.co.uk/wp-content/uploads/2022/04/PC-12-Banner-scaled.jpg"
                    className="img-fluid"
                />

                {/* Fallback image */}
                <img
                    src="https://www.aviationpress.co.uk/wp-content/uploads/2022/04/PC-12-Banner-scaled.jpg"
                    alt="Aeroplanes in a hanger"
                    style={{
                        width: "100%",
                        height: "100vh",
                        mixBlendMode: "luminosity",
                        display: "block",
                    }}
                />
            </picture>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    mixBlendMode: "darken",
                    background:
                        "linear-gradient(180deg, var(--background-dark) 0%, rgba(7, 16, 29, 0) 100%)",
                }}
            />
            <div className="hero-content-container hero-content-position flex-col space-between-col">
                <h1 className="title title-long full-text">
                    AN UNFORGETTABLE THRILL FOR GAMERS AND ENTHUSIASTS
                </h1>
                <h1 className="title title-short short-text uppercase">
                    Epic thrill of a Flight Sim
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
