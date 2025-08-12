import React from "react";
import '../AvconPathwayPortal.css';

export default function FirstImageAndText() {
  return (
    <section className="intro-text-block" aria-labelledby="intro-heading">
      <h2 id="intro-heading" className="section-title">Welcome to A.P.P.</h2>
      <div className="intro-columns">
        <div className="column">
          <p>
            Welcome to the Aviation Pathways Portal (A.P.P), AvCon's innovative platform designed to connect
            aspiring professionals with exciting opportunities in the aviation, aerospace, and space industries.
            Whether you're a student exploring your career options or a seasoned professional looking to
            advance your skills, A.P.P offers a comprehensive range of resources: work experience, internships,
            graduate programs, and courses from foundational to advanced.
          </p>
        </div>
        <div className="column">
          <p>
            Explore bridging courses, college programs, and upskilling resources tailored to the evolving job market.
            <br /><br />
            Are you an industry professional with a course or opportunity? Email us at <a href="mailto:hello@avcon.ie">hello@avcon.ie</a> to share your listing for free. Together, were shaping the future of aviation—one pathway at a time.
          </p>
        </div>
      </div>
      <hr />
    </section>
  );
}
