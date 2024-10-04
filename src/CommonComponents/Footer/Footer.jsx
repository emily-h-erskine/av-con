import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
// import FooterBanner from "./footerBanner.jpeg";
import "../../index.css";

export default function Footer() {
    return (
        // NEW FOOTER - PROPOSAL ACCEPTED 07/09/2024
        <footer className="footer mt-3 ml-3 mr-3">
            <div className="mb-3 footer-col-1 footer-divider position">
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

            <div className="flex-container site-map mb-3 mt-3">
                <div className="flex-col flex-1 pb-3 space-between">
                    <p className="mb-2 uppercase footer-heading">Events</p>
                    <div className="flex-col">
                        <a href="./Event" className="footer-link">
                            AvCon 2024 Info
                        </a>
                        <a href="./BookTickets" className="footer-link">
                            View the Event
                        </a>
                        <a
                            href="./ExhibitorRegistration"
                            className="footer-link">
                            Exhibitor Registration
                        </a>
                    </div>
                </div>

                <div className="flex-col flex-1 pb-3 mr-1">
                    <p className="mb-2 uppercase footer-heading">Company</p>
                    <div className="flex-col ">
                        <a href="./About" className="footer-link">
                            About Us
                        </a>
                        <a href="./SponsorsPartners" className="footer-link">
                            Our Partners
                        </a>
                        <a href="./SponsorsPartners" className="footer-link">
                            Our Sponsors
                        </a>
                        <a
                            href="./AviationPathwayPortal"
                            className="footer-link">
                            Aviation Pathway Portal
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
