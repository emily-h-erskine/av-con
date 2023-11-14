import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTiktok,
    faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaLinks() {
  return (
    <div class="social-container">
      <a href="https://www.facebook.com/profile.php?id=61552633058659"
        className="facebook social"  style={{padding: '2%'}}>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://instagram.com/avcon_ie?igshid=eTNvcHN4MHdkZHJr"
        className="instagram social"  style={{padding: '2%'}}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.tictok.com/"
        className="tictok social"  style={{padding: '2%'}}>
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/tyhub?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="LinkedIn social"  style={{padding: '2%'}}>
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      
    </div>
  );
}