import React from "react";
import "../css/footer.css";

export const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3 log">
            <div className="footer-logo">
              <img src="./images/22.png" />
            </div>
            <br />
            <div className="social-icon">
              <img src="/images/instagram-logo.png" />
              <img src="./images/linkedin-logo.png" />
              <a
                href="mailto:keshavvsonii01@gmail.com?subject=Hello"
                target="_blank"
              >
                <img src="./images/gmailicon.png" alt="Gmail Icon" />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-content">
              <h6>BRANDING</h6>
              <p>Logo Creation</p>
              <p>Market Collateral</p>
              <p>SEO Gold Coast</p>
            </div>
            <div className="footer-content">
              <h6>WEB DESIGN</h6>
              <p>Custom Website Design</p>
              <p>Account Monitoring</p>
              <p>Reporting</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-content">
              <h6>DIGITAL ADS</h6>
              <p>Facebook Display</p>
              <p>Google Display</p>
              <p>Google Search</p>
            </div>
            <div className="footer-content">
              <h6>SOCIAL MARKETING</h6>
              <p>Cotent Creation & Posting</p>
              <p>Monitoring</p>
              <p>Reporting</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-content">
              <h6>CONTACT</h6>
              <p>+9 7817839858</p>
              <p>Harshverma.agc@gmail.com</p>
              <p>Mon - Sun : 8:30 - 7:00</p>
              <p>Contact Us</p>
            </div>
            <div className="footer-content">
              <h6>AGENCY OFFICE</h6>
              <p>Tajganj, Agra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


