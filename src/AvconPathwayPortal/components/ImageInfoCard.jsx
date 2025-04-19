import React from "react";
import '../AvconPathwayPortal.css';

export default function ImageInfoCard({
  imageUrl,
  title,
  description,
  webURL,
}) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        <p className="card-text">{webURL}</p>
      </div>
    </div>
  );
}
