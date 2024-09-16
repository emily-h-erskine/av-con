import React from "react";
import HeroMobile from "./Hero-mobile.png";

export default function HomeImageBanner() {
    return (
        <div className="mb-3" style={{ position: "relative" }}>
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

            <div
                className="mb-3 hero-content-position"
                style={{
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    marginBottom: "var(--margin-large)",
                }}>
                <p style={{ maxWidth: "100%" }} className="title">
                    AvCon 2024
                </p>
                <p style={{ maxWidth: "100%" }} className="sub-title mb-3">
                    Welcome to the Future of Aviation!
                </p>
                <button
                    type="button"
                    name="Book Tickets Button"
                    className="btn-primary">
                    <a
                        href="./BookTickets"
                        className="uppercase"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}>
                        Get Tickets
                    </a>
                </button>
            </div>
        </div>
    );
}
