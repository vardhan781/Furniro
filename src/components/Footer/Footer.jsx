import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      <div className="footer-up">
        <div className="footer-main">
          <p className="footer-logo">Furniro.</p>
          <p className="footer-loc">
            400 University Drive Suite 200 Coral
            <br />
            Gables,
            <br />
            FL 33134 USA
          </p>
        </div>
        <div className="footer-links">
          <p className="footer-link-head">Links</p>
          <ul className="footer-link-loc">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/shop")}>Shop</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>
        <div className="footer-links">
          <p className="footer-link-head">Help</p>
          <ul className="footer-link-loc">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <p className="newsletter-head">Newsletter</p>
          <div className="news-box-footer">
            <input type="email" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <p className="copy-footer">
        &copy; 2025 VardhanSinh. All rights reverved.
      </p>
    </div>
  );
};

export default Footer;
