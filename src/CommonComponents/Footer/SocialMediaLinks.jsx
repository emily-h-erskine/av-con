import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faFacebook,
//     faInstagram,
//     faTiktok,
//     faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaLinks() {
    return (
        <div className="flex-contaier flex-1 mb-2">
            <div className="flex-col" style={{ width: "100%" }}>
                <a
                    // className="ml-2 mr-2"
                    className="footer-link"
                    href="https://www.facebook.com/profile.php?id=61552633058659"
                    style={{ padding: "2%" }}>
                    {/* <FontAwesomeIcon icon={faFacebook} size="3x" /> */}
                    Facebook
                </a>
                <a
                    // className="ml-2 mr-2"
                    className="footer-link"
                    href="https://instagram.com/avcon_ie?igshid=eTNvcHN4MHdkZHJr"
                    style={{ padding: "2%" }}>
                    {/* <FontAwesomeIcon icon={faInstagram} size="3x" /> */}
                    Instagram
                </a>
                <a
                    // className="ml-2 mr-2"
                    className="footer-link"
                    href="https://www.tictok.com/"
                    // https://www.tiktok.com/@tyhub_ie/video/7396372068608101664
                    style={{ padding: "2%" }}>
                    {/* <FontAwesomeIcon icon={faTiktok} size="3x" /> */}
                    TikTok
                </a>
                <a
                    // className="ml-2 mr-2"
                    className="footer-link"
                    href="https://www.linkedin.com/in/tyhub?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    style={{ padding: "2%" }}>
                    {/* <FontAwesomeIcon icon={faLinkedinIn} size="3x" /> */}
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
