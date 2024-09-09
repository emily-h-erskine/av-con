import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
// import FooterBanner from "./footerBanner.jpeg";
import "../../index.css";

export default function Footer() {
    return (
        
        // NEW FOOTER - PROPOSAL ACCEPTED 07/09/2024
        <footer className="flex-container mt-4 pr-3 pl-3 ">
            <div
                style={{ borderRight: "1px solid var(--mid-grey" }}
                className="flex-col width-30 pb-3 pr-3">
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

            <div className="flex-container space-between width-70 pl-3">
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
