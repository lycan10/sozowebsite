import React from "react";
import { FaInstagram, FaXTwitter, FaFacebookF  } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

import logo from "../../assets/logo/sozo-footer-logo.png"

import love from "../../assets/footer/star.png"
import bible from "../../assets/footer/verse.png"
import QR from "../../assets/footer/qr-code.png"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-top-left-content">
              <h3>Discover Us</h3>
              <p>About</p>
              <p>Blog</p>
              <p>Gallery</p>
              <p>Contact Us</p>
            </div>
            <div className="footer-top-left-content">
              <h3>Legal</h3>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>

          </div>
          <div className="footer-top-right">
            <img className="footer-top-right-image-left"  src={love} alt="" />
            <img className="footer-top-right-image-middle" src={bible} alt="Bible-verse phil 4:5-7" />
            <img className="footer-top-right-image-right"  src={QR} alt="QR code" />
          </div>
        </div>
        <div className="footer-bottom">
            <img src={logo} alt="" />
        <p>© {new Date().getFullYear()} SBA Research. All Rights Reserved.</p>
        <div className="footer-bottom-socials">
        <FaInstagram className="footer-social" />
        <FaXTwitter className="footer-social" />
        <FaFacebookF className="footer-social" />
        <CiLinkedin className="footer-social" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
