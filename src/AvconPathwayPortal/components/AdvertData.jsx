import React from 'react';
import ImageInfoCard from './ImageInfoCard';
import IAA from '../AdvertImages/IAA.png';
import UCD from '../AdvertImages/UCD.png'
import '../AvconPathwayPortal.css';

export default function AdvertData() {
  return (
    <section className="advert-container" aria-labelledby="opportunities-heading">
      <h2 id="opportunities-heading" className="section-title">Career & Training Opportunities</h2>

      {/* Wrap all cards in a container */}
      <div className="card-grid">
        <ImageInfoCard
          imageUrl={IAA}
          title="Irish Aviation Authority – Careers"
          description="The IAA is responsible for safety, security, and consumer interest regulation in civil aviation in Ireland."
          webURL="https://www.iaa.ie/careers"
          linkLabel="Visit Careers Section"
        />
        <ImageInfoCard
          imageUrl={IAA}
          title="Irish Aviation Authority – Training"
          description="IAA offers world-class training through online and in-class programs with industry experts."
          webURL="https://www.iaa.ie/training"
          linkLabel="Visit Training Section"
        />
        <ImageInfoCard
          imageUrl={UCD}
          title="SAR & InSAR Remote Sensing Micro-credential"
          description="5 ECTS | 12 Weeks | Online | Start Date: September 2025. Learn about SAR (Synthetic Aperture Radar) and InSAR (Interferometric SAR) techniques in remote sensing."
          webURL="https://www.ucd.ie/microcredentials/explorecourses/physics/sar-insar-remote-sensing/"
          linkLabel="Explore SAR & InSAR Course"
        />
        <ImageInfoCard
          imageUrl={UCD}
          title="Engaging with ESA Micro-credential"
          description="Level 9 | 5 ECTS | 6 Weeks | Online | Start Date: 23rd October, 2025. Engage with ESA's space missions, explore aerospace technologies, and more."
          webURL="https://www.ucd.ie/microcredentials/explorecourses/physics/engaging-with-esa/"
          linkLabel="Explore ESA Course"
        />
      </div>

      {/* Application Links */}
      <div className="application-links">
        <h3>Application Links:</h3>
        <ul>
          <li>
            <a href="https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?p_tag=DEEP&MAJOR=F293&TYPE=OCCA&TERM=202500" target="_blank" rel="noopener noreferrer">
              Apply for SAR & InSAR Micro-credential
            </a>
          </li>
          <li>
            <a href="https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?p_tag=DEEP&MAJOR=F273&TYPE=OCCA&TERM=202500" target="_blank" rel="noopener noreferrer">
              Apply for Engaging with ESA Micro-credential
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
