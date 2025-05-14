import React from "react";
import "./Assurance.css";
import { assets } from "../../assets/assets";

const Assurance = () => {
  return (
    <div className="as-contain">
      <div className="as-preview">
        <img src={assets.award} />
        <div className="as-text">
          <p className="as-main-text">High Quality</p>
          <p className="as-other-text">Crafted from top materials</p>
        </div>
      </div>
      <div className="as-preview">
        <img src={assets.verify} />
        <div className="as-text">
          <p className="as-main-text">Warranty Protection</p>
          <p className="as-other-text">Over 2 years</p>
        </div>
      </div>
      <div className="as-preview">
        <img src={assets.delivery} />
        <div className="as-text">
          <p className="as-main-text">Free Shipping</p>
          <p className="as-other-text">Order over 150 $</p>
        </div>
      </div>
      <div className="as-preview">
        <img src={assets.service} />
        <div className="as-text">
          <p className="as-main-text">24 / 7 Support</p>
          <p className="as-other-text">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Assurance;
