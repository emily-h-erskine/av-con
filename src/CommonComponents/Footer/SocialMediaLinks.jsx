import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faTiktok
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaLinks() {
  return (
    <div class="social-container">
      <a href="https://www.facebook.com/profile.php?id=61552633058659&mibextid=ZbWKwL"
        className="facebook social"  style={{padding: '2%'}}>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com/"
        className="instagram social"  style={{padding: '2%'}}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.tictok.com/"
        className="tictok social"  style={{padding: '2%'}}>
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social"  style={{padding: '2%'}}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      
    </div>
  );
}