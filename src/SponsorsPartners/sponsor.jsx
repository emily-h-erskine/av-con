import React from "react";

export default function Sponsor({ logoPath, linkURL, altText }) {
    return (
        <div className="sponsor">
            <a href={linkURL} target="blank">
                <img src={logoPath} alt={altText} className="sponsor" />
            </a>
        </div>
    );
}
