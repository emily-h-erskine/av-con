import React from "react";

export default function Partner({ logoPath, partnerName, partnerURL }) {
    return (
        <a href={partnerURL} className="partner-card">
            <img className="partner-logo" src={logoPath} alt={partnerName} />
            <h6>{partnerName}</h6>
        </a>
    );
}
