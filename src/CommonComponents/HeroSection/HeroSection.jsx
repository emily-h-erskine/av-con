import React, { useState, useEffect } from "react";
import HeroMobile from "./Hero-mobile.png";
import "./HeroSection.css";

export default function HeroSection({
    defaultTitle,
    defaultSubtitle,
    smallScreenTitle,
    smallScreenSubtitle,
    buttonText,
    buttonLink,
}) {
    const [title, setTitle] = useState(defaultTitle || "");
    const [subtitle, setSubtitle] = useState(defaultSubtitle || "");

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 600) {
                setTitle(smallScreenTitle || "AvCon 2025");
                setSubtitle(smallScreenSubtitle || "Welcome to the Future of Aviation!");
            } else {
                setTitle(defaultTitle);
                setSubtitle(defaultSubtitle);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [defaultTitle, defaultSubtitle, smallScreenTitle, smallScreenSubtitle]);

    return (
        <div className="hero-wrapper">
            <picture className="hero-image-container">
                <source media="(max-width: 600px)" srcSet={HeroMobile} />
                <source media="(min-width: 600px)" srcSet="https://www.aviationpress.co.uk/wp-content/uploads/2022/04/PC-12-Banner-scaled.jpg" />
                <img
                    src="https://www.aviationpress.co.uk/wp-content/uploads/2022/04/PC-12-Banner-scaled.jpg"
                    alt="Aeroplanes in a hangar"
                    className="hero-background-img"
                />
            </picture>

            <div className="hero-overlay" />

            <div className="hero-content-position">
                {title && <p className="title">{title}</p>}
                {subtitle && <p className="sub-title">{subtitle}</p>}

                {buttonText && buttonLink && (
                    <button type="button" name="Book Tickets Button" className="btn-primary mt-2">
                        <a href={buttonLink} className="uppercase btn-link">
                            {buttonText}
                        </a>
                    </button>
                )}
            </div>
        </div>
    );
}
