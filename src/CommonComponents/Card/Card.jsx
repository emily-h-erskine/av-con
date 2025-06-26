import React from "react";
import "./Card.css"; // Make sure this file exists

export default function Card({ imageSrc, heading, description }) {
    return (
        <div className="card">
            <div className="card-image-wrapper">
                <img src={imageSrc} alt={heading} className="card-image" />
            </div>
            <div className="card-content">
                <h4>{heading}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}
