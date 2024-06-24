import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sponsor from "./sponsor";
import SponsoredBy from './SponsorImages/1.png';
import S2 from './SponsorImages/2.png';
import S3 from './SponsorImages/3.png';
import S4 from './SponsorImages/4.png';
import S5 from './SponsorImages/5.png';
import S6 from './SponsorImages/6.png';
import AvationSkillnet from './SponsorImages/AviationSkillnetLogo.png';

export default function SponsorsPartners() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-24" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Our Sponsors and Partners
      </h3>

      <p style={{ textAlign:'center', padding:'2%' }}>AvCon - The Future of Aviation is an unparalleled event made possible through the generous support of our sponsors, exhibitors, and partners. This collaboration, including a key partnership with The Irish Air Corps, brings together leading aviation professionals, innovative companies, and educational institutions to create an inspiring experience. AvCon offers school and college groups free access to explore the cutting-edge advancements in aviation, meet industry experts, and engage with interactive exhibits, fostering the next generation of aviation enthusiasts and professionals. Join us in celebrating the future of flight and the minds shaping it.</p>

      <div style={{padding: '5%', textAlign: 'center'}}>
        <img
          src={SponsoredBy}
          alt="AvCon Sponsored By"
          style={{ width: '100%'}}
        />
        <img
          src={S2}
          alt="Sponsors Display"
          style={{ width: '100%'}}
        />
        <img
          src={S3}
          alt="Sponsors Display"
          style={{ width: '100%'}}
        />
        <img
          src={S4}
          alt="Sponsors Display"
          style={{ width: '100%'}}
        />
        <img
          src={S5}
          alt="Sponsors Display"
          style={{ width: '100%'}}
        />
        <img
          src={S6}
          alt="Sponsors Display"
          style={{ width: '100%'}}
        />
        
      </div>

    </main>
  );
}