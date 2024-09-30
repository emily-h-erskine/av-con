import React from "react";

export default function Partner({ logoUrl, partnerName }) {
    return (
        <div className="partner-card">
            <img className="partner-logo" src={logoUrl} alt={partnerName} />
            <h6>{partnerName}</h6>
        </div>
    );
}
