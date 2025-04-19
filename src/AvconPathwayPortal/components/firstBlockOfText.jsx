import React from "react";
import '../AvconPathwayPortal.css';

export default function FirstImageAndText() {
  return (
    <div className="image-text-container">
      <div container spacing={4}>
        <div item xs={12} md={6}>
          <p className="text">
            Welcome to the Aviation Pathways Portal (A.P.P), AvCon's innovative platform designed to connect
            aspiring professionals with exciting opportunities in the aviation, aerospace, and space industries. At
            AvCon, we recognize the growing skills gap in these dynamic fields, and A.P.P is our solution to bridge
            that divide. Whether you're a student exploring your career options or a seasoned professional looking to
            advance your skills, A.P.P offers a comprehensive range of resources, including work experience
            placements, student programs, internships, graduate opportunities, and courses spanning from
            foundational to advanced levels.
          </p>
        </div>
        <div item xs={12} md={6}>
          <p className="text">
            Our platform is your gateway to building a successful career in these industries. Explore bridging courses,
            college programs, and upskilling courses tailored to meet the demands of the evolving job market.
            <br />
            <br />
            If you're an industry professional with a program, course, or opportunity to share, we invite you to
            contribute. Simply email us at hello@avcon.ie to add your listing for free. Together, we're shaping the
            future of aviation, aerospace, and space—one pathway at a time.
          </p>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
    </div>
  );
}
