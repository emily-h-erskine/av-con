import React from "react";

const Card = ({ imageSrc, heading, description }) => {
    return (
        <div className="card-container">
            <img
                src={imageSrc}
                alt={heading}
                className="card-image img-fluid"
            />
            <h3 className="card-heading pl-1 pr-1">{heading}</h3>
            <p className="card-description pl-1 pr-1">{description}</p>
        </div>
    );
};

export default Card;
