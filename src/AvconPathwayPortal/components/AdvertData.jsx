import React from 'react';
import ImageInfoCard from './ImageInfoCard';
import IAA from '../AdvertImages/IAA.png';
import UCD from '../AdvertImages/UCD.png';
import '../AvconPathwayPortal.css';

export default function AdvertData() {
  return (
    <section className="advert-container" aria-labelledby="opportunities-heading">
      <br/><br/>
      <h2 id="opportunities-heading" className="section-title">Career & Training Opportunities</h2>

      <p className="intro-text" id="opportunities-intro">
        Explore current career openings, training programs, and professional development opportunities
        within the aviation and aerospace industries. Click on each listing for more details.
        <br /><br />
      </p>

      {/* Job Listings Grid */}
      <div className="card-grid" role="list" aria-describedby="opportunities-intro">
        <ImageInfoCard
          imageUrl={IAA}
          title="Irish Aviation Authority – Careers"
          description="Responsible for safety, security, and consumer interest regulation in civil aviation in Ireland."
          webURL="https://www.iaa.ie/careers"
          linkLabel="View Careers Opportunities"
          role="listitem"
        />
        <ImageInfoCard
          imageUrl={IAA}
          title="Irish Aviation Authority – Training Programs"
          description="Offering world-class training through online and in-class programs led by industry experts."
          webURL="https://www.iaa.ie/training"
          linkLabel="Explore Training Options"
          role="listitem"
        />
        <ImageInfoCard
          imageUrl={UCD}
          title="SAR & InSAR Remote Sensing Micro-credential"
          description="5 ECTS | 12 Weeks | Online | Start Date: September 2025. Learn about advanced radar techniques in remote sensing."
          webURL="https://www.ucd.ie/microcredentials/explorecourses/physics/sar-insar-remote-sensing/"
          linkLabel="Apply for SAR & InSAR Course"
          role="listitem"
        />
        <ImageInfoCard
          imageUrl={UCD}
          title="Engaging with ESA Micro-credential"
          description="Level 9 | 5 ECTS | 6 Weeks | Online | Starts 23rd October 2025. Explore ESA’s aerospace technologies and missions."
          webURL="https://www.ucd.ie/microcredentials/explorecourses/physics/engaging-with-esa/"
          linkLabel="Apply for ESA Course"
          role="listitem"
        />
      </div>

      {/* Application Links */}
      <div className="application-links" aria-label="Direct application links">
        <h3>Direct Application Links</h3>
        <ul>
          <li>
            <a
              href="https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?p_tag=DEEP&MAJOR=F293&TYPE=OCCA&TERM=202500"
              target="_blank"
              rel="noopener noreferrer"
              className="application-link"
            >
              Apply for SAR & InSAR Micro-credential
            </a>
          </li>
          <li>
            <a
              href="https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?p_tag=DEEP&MAJOR=F273&TYPE=OCCA&TERM=202500"
              target="_blank"
              rel="noopener noreferrer"
              className="application-link"
            >
              Apply for Engaging with ESA Micro-credential
            </a>
          </li>
          <li>
            <a
              href="https://icbe.ie/training-programmes/aviation-skillnet/ "
              target="_blank"
              rel="noopener noreferrer"
              className="application-link"
            >
              Apply for Aviation Courses on the ICBE Site
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
