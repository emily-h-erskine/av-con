import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
// import FooterBanner from "./footerBanner.jpeg";
import "../../index.css";

export default function Footer() {
    return (
        // <div>
        //     <div className="flex-col-center mt-4" style={{ padding: "0 5%" }}>
        //         <a
        //             href="./BookTickets"
        //             target="_blank"
        //             rel="noopener noreferrer">
        //             <img
        //                 src={FooterBanner}
        //                 alt="AvCon 2024 URL, admission details and email address with a aearoplane spec diagram background"
        //                 style={{
        //                     width: "100%",
        //                     mixBlendMode: "luminosity",
        //                     display: "block",
        //                 }}
        //             />
        //         </a>
        //     </div>
        //     <div
        //         className="flex-col-center"
        //         style={{
        //             padding: "0% 10% 2% 5%",
        //         }}>
        //         <p
        //             className="my-2 "
        //             style={{ textAlign: "center", padding: "0% 5%" }}>
        //             AvCon 2024 - Charting Aviation's Tomorrow. Set for November
        //             7th, 2024, at Casement Aerodrome, Baldonnel, Co. Dublin, the
        //             home of the Irish Air Corps. Registration is currently
        //             underway for both{" "}
        //             <a href="./ExhibitorRegistration">Exhibitors </a> and{" "}
        //             <a href="./BookTickets">Schools</a>. Kindly be aware that
        //             registration for this event is designated for school and
        //             tertiary education group bookings exclusively; individual
        //             registrations are not applicable at this time. Any
        //             individual inquiries should be directed to hello@avcon.ie.
        //         </p>
        //         <div className="flex-col-center">
        //             <SocialMediaLinks />
        //             <a
        //                 href="https://emily-h-erskine.github.io/portfolio/"
        //                 className="copyright"
        //                 style={{
        //                     fontSize: "14px",
        //                     textDecoration: "none",
        //                 }}>
        //                 Copyright © 2024 Emily-Huong Erskine
        //             </a>
        //         </div>
        //     </div>
        // </div>

        // NEW FOOTER - PROPOSAL ACCEPTED 07/09/2024
        <footer className="flex-container mt-4 px-5">
            <div
                style={{ borderRight: "1px solid var(--mid-grey" }}
                className="flex-col width-30 pb-5 pr-5">
                <a href="/index.html">
                    <img
                        className="footer-logo mb-3"
                        src="./AVConLogoWhite.png"
                        alt="AV Con logo"
                    />
                </a>
                <p className="mb-2 footer-text">
                    AvCon - The Future of Aviation: Inspiring and educating
                    future aviation professionals through a dynamic, interactive
                    event
                </p>
                <a
                    href="https://emily-h-erskine.github.io/portfolio/"
                    className="copyright"
                    style={{
                        fontSize: "14px",
                        textDecoration: "none",
                    }}>
                    Copyright © 2024 Emily-Huong Erskine
                </a>
            </div>

            <div className="flex-container space-between width-70 pl-5">
                <div className="flex-col flex-1 pb-5 ">
                    <p className="mb-2 uppercase footer-heading">Events</p>
                    <div className="flex-col">
                        <a href="./Event" className="footer-link">
                            AvCon 2024 info
                        </a>
                        <a href="/#" className="footer-link">
                            Get tickets
                        </a>
                        <a href="/#" className="footer-link">
                            Exhibitor registration
                        </a>
                    </div>
                </div>

                <div className="flex-col flex-1 pb-5 ">
                    <p className="mb-2 uppercase footer-heading">Company</p>
                    <div className="flex-col ">
                        <a href="/#" className="footer-link">
                            About us
                        </a>
                        <a href="/#" className="footer-link">
                            Our partners
                        </a>
                        <a href="/#" className="footer-link">
                            Our sponsors
                        </a>
                        <a href="/#" className="footer-link">
                            Career pathways
                        </a>
                    </div>
                </div>

                <div className="flex-col flex-1 space-between-col">
                    <p className="uppercase mb-2 footer-heading">Social</p>
                    <SocialMediaLinks />
                </div>
            </div>
        </footer>
    );
}
