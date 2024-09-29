import React, { useState, useEffect } from "react";
import HeroMobile from "./Hero-mobile.png";

// IMPORTANT!!
// Change to how component is called:
//   - pass the value of the title, subtitle, button text, and button link path each time the component is called on a page
//   - this means the same component can be called and different values injected
export default function HeroSection({
    defaultTitle, // default title from props passed to the component when called
    defaultSubtitle, // default title from props passed to the component when called
    smallScreenTitle,
    smallScreenSubtitle,
    buttonText,
    buttonLink,
}) {
    // State variables to hold the dynamic title and subtitle, which will change based on screen width
    const [title, setTitle] = useState(defaultTitle || ""); // Set a default empty string to prevent undefined issues
    const [subtitle, setSubtitle] = useState(defaultSubtitle || "");

    // useEffect to handle screen resizing logic
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            console.log("Screen width: ", screenWidth); // Debugging: check screen size

            if (screenWidth <= 600) {
                // console.log("Setting small screen title and subtitle"); // Debugging: Log when small screen logic is triggered
                // For small screens (599px and smaller), update the title and subtitle for small screens
                setTitle("AvCon 2024");
                setSubtitle("Welcome to the Future of Aviation!");
            } else {
                // Use the values passed when the component was called
                setTitle(defaultTitle);
                setSubtitle(defaultSubtitle);
            }
        };

        // Add event listener for resizing
        window.addEventListener("resize", handleResize);

        // Run the resize logic once on initial load
        handleResize();

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener("resize", handleResize);
    }, [defaultTitle, defaultSubtitle]); // Dependencies on the props

    return (
        <div className="mb-3" style={{ position: "relative" }}>
            <picture className="hero-image-container">
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
                {/* Safeguard: Render titles only if defined */}
                <p style={{ maxWidth: "100%" }} className="title">
                    {title || "Default Title"}
                </p>
                <p style={{ maxWidth: "100%" }} className="sub-title mb-3">
                    {subtitle || "Default Subtitle"}
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
