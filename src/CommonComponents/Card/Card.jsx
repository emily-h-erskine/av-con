import React from "react";
import "./Card.css";

export default function Card({ imageSrc, heading, description }) {
    return (
        <div className="card">
            <img src={imageSrc} alt={heading} className="card-img" />
            <div className="card-body">
                <h3 className="card-title">{heading}</h3>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}
