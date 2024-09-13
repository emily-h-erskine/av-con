import React from "react";

const Card = ({ imageSrc, heading, description }) => {
    return (
        <div className="card pb-3">
            <img
                src={imageSrc}
                alt={heading} // this will be very poor alt text for the images will need a solution
                className="img-fluid"
            />
            <h3 className="card-heading pt-1 pl-1 pr-1">{heading}</h3>
            <p className="card-description pt-1 pb-1 pl-1 pr-1">
                {description}
            </p>
        </div>
    );
};

export default Card;
