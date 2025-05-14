import React from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";
import Assurance from "../../components/Assurance/Assurance";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="shop-header">
        <img className="shop-cover" src={assets.shop_cover} alt="" />
        <div className="shop-nav">
          <p className="shop-nav-head">Contact</p>
          <div className="shop-path">
            <p onClick={() => navigate("/")}>Home</p>
            <img src={assets.right_arrow} />
            <p className="shop-blurred-path">Contact</p>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <p className="contact-head">Get In Touch With Us</p>
        <p className="contact-sub-head">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us
          <br />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
        <div className="contact-detail-and-form">
          <div className="contact-detail">
            <div className="contact-hotline">
              <img src={assets.location} alt="" />
              <div className="hotline-detail">
                <p className="head-hot">Address</p>
                <p className="head-cold">
                  236 5th SE Avenue, New
                  <br />
                  York NY10000, United
                  <br />
                  States
                </p>
              </div>
            </div>
            <div className="contact-hotline">
              <img src={assets.phone} alt="" />
              <div className="hotline-detail">
                <p className="head-hot">Phone</p>
                <p className="head-cold">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="contact-hotline">
              <img src={assets.clock} alt="" />
              <div className="hotline-detail">
                <p className="head-hot">Working Time</p>
                <p className="head-cold">
                  Monday-Friday: 9:00 -
                  <br /> 22:00
                  <br />
                  Saturday-Sunday: 9:00 -<br />
                  21:00
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <p className="con-title">Your Name</p>
            <input type="text" className="con-input" placeholder="Abc" />
            <p className="con-title">Email Address</p>
            <input
              type="email"
              className="con-input"
              placeholder="Abc@gmailcom"
            />
            <p className="con-title">Subject</p>
            <input
              type="text"
              className="con-input"
              placeholder="This is optional"
            />
            <p className="con-title">Message</p>
            <textarea
              type="text"
              rows={3}
              className="con-input"
              placeholder="Hi! i'd like to ask about"
            />
            <button className="contact-submit">Submit</button>
          </div>
        </div>
      </div>
      <Assurance />
    </div>
  );
};

export default Contact;
