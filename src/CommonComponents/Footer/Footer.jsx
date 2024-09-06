import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import FooterBanner from "./footerBanner.jpeg";
import "../../index.css";

export default function Footer() {
    return (
        <div>
            <div className="flex-col-center mt-4" style={{ padding: "0 5%" }}>
                <a
                    href="./BookTickets"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src={FooterBanner}
                        alt="AvCon 2024 URL, admission details and email address with a aearoplane spec diagram background"
                        style={{
                            width: "100%",
                            mixBlendMode: "luminosity",
                            display: "block",
                        }}
                    />
                </a>
            </div>
            <div
                className="flex-col-center"
                style={{
                    padding: "0% 10% 2% 5%",
                }}>
                <p
                    className="my-2 "
                    style={{ textAlign: "center", padding: "0% 5%" }}>
                    AvCon 2024 - Charting Aviation's Tomorrow. Set for November
                    7th, 2024, at Casement Aerodrome, Baldonnel, Co. Dublin, the
                    home of the Irish Air Corps. Registration is currently
                    underway for both{" "}
                    <a href="./ExhibitorRegistration">Exhibitors </a> and{" "}
                    <a href="./BookTickets">Schools</a>. Kindly be aware that
                    registration for this event is designated for school and
                    tertiary education group bookings exclusively; individual
                    registrations are not applicable at this time. Any
                    individual inquiries should be directed to hello@avcon.ie.
                </p>
                <div className="flex-col-center">
                    <SocialMediaLinks />
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
            </div>
        </div>
    );
}
