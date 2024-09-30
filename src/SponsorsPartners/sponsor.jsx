import React from "react";

export default function Sponsor({ logoPath, linkURL, altText }) {
    return (
        <a href={linkURL} target="blank" className="sponsor">
            <img src={logoPath} alt={altText} className="sponsor" />
        </a>
    );
}
