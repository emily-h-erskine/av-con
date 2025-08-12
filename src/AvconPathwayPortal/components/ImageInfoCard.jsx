import React from "react";
import '../AvconPathwayPortal.css';

export default function ImageInfoCard({ imageUrl, title, description, webURL, linkLabel }) {
  return (
    <article className="card" role="region" aria-label={title}>
      <img src={imageUrl} alt={`${title} Logo`} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <a
          href={webURL}
          className="card-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkLabel}
        </a>
      </div>
    </article>
  );
}
