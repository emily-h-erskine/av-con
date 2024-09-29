import React from "react";

export default function Partner({ logoUrl, partnerName }) {
    return (
        <div className="partner-container">
            <img className="partner" src={logoUrl} alt={partnerName} />
            <p>{partnerName}</p>
        </div>
    );
}
