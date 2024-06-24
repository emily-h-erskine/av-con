import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';

export default function Footer(){

    return (

        <div style={{ padding: '5% 0% 0% 0%'}}>
            <div style={{ textAlign: 'center', padding: '0% 5%'}}>
                AvCon 2024 - Charting Aviation's Tomorrow. Set for November 7th, 2024, at Casement Aerodrome, Baldonnel, Co. Dublin, the home of the Irish Air Corps. Registration is currently underway for both <a href="./ExhibitorRegistration">Exhibitors </a> and <a href="./BookTickets">Schools</a>. Kindly be aware that registration for this event is designated for school and tertiary education group bookings exclusively; individual registrations are not applicable at this time. Any individual inquiries should be directed to hello@avcon.ie.
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', padding: '0% 10% 2% 5%'}}>
                <div style={{ textAlign: 'left'}}>
                  <a href="https://emily-h-erskine.github.io/portfolio/" style={{ fontSize: '10px', textDecoration: 'none' }}>Copyright © 2024 Emily-Huong Erskine</a>
                </div>
                <div style={{ textAlign: 'right'}}>
                     <SocialMediaLinks />
                </div>
            </div>

        </div>
    )


};
