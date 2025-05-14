import React from "react";
import { assets } from "../../assets/assets";
import "./Setup.css";

const Setup = () => {
  return (
    <div className="setup-container">
      <div>
        <p className="setup-one-head">Share your setup with</p>
        <p className="setup-two-head">#FuniroFurniture</p>
      </div>
      <div className="setup-parent">
        <div className="setup-1">
          <img src={assets.accent_chair} alt="" />
        </div>
        <div className="setup-2">
          <img src={assets.bar_stool} alt="" />
        </div>
        <div className="setup-3">
          <img src={assets.book_shelf} alt="" />
        </div>
        <div className="setup-4">
          <img src={assets.coffee_table} alt="" />
        </div>
        <div className="setup-5">
          <img src={assets.wooden_dining_table} alt="" />
        </div>
        <div className="setup-6">
          <img src={assets.mordern_sofa} alt="" />
        </div>
        <div className="setup-7">
          <img src={assets.night_stand} alt="" />
        </div>
        <div className="setup-8">
          <img src={assets.tv_console} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Setup;
