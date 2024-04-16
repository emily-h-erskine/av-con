import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';

export const Footer = () => (
    <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', padding: '5% 10% 0% 5%' }}>
        <div style={{ textAlign: 'left', padding: '5%' }}>
            <a href="https://emily-h-erskine.github.io/portfolio/" style={{ fontSize: '10px', textDecoration: 'none' }}>Copyright © 2024 Emily-Huong Erskine</a>
        </div>
        <div style={{ textAlign: 'right', padding: '5% 0 0 0' }}>
            <SocialMediaLinks />
        </div>
  </div>
);
