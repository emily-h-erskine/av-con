import React, { useState, useEffect } from "react";
import HeroMobile from "./Hero-mobile.png";

// IMPORTANT!!
// Change to how component is called:
//   - pass the vale of the title, subtitle, button text and button linkpath each time component is called on a page
//   - this means the same component can be called and different values injected
export default function HeroSection({
    title: defaultTitle,
    subtitle: defaultSubtitle,
    buttonText,
    buttonLink,
}) {
    // State variables to hold the dynamic title and subtitle, which will change based on screen width
    const [title, setTitle] = useState(defaultTitle);
    const [subtitle, setSubtitle] = useState(defaultSubtitle);

    // useEffect to handle screen resizing logic
    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(max-width: 599px)").matches) {
                /* For small screens (599px and smaller), 
                if the screen is bigger it will render the values passed 
                to the component in flightSim.jsx */
                setTitle("AvCon Xtra");
                setSubtitle("Experience the Ultimate Flight Sim Challenge");
            } else {
                // For larger screens
                setTitle(defaultTitle);
                setSubtitle(defaultSubtitle);
            }
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Run once to set the initial values based on screen size
        handleResize();

        // Clean up the event listener
        return () => window.removeEventListener("resize", handleResize);
    }, [defaultTitle, defaultSubtitle]);

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
                    {title}
                </p>
                <p style={{ maxWidth: "100%" }} className="sub-title mb-3">
                    {subtitle}
                </p>
                <button
                    type="button"
                    name="Book Tickets Button"
                    className="btn-primary mt-2">
                    <a
                        href={buttonLink}
                        className="uppercase"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}>
                        {buttonText}
                    </a>
                </button>
            </div>
        </div>
    );
}
