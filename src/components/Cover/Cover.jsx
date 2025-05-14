import React from "react";
import "./Cover.css";
import { assets } from "../../assets/assets";

const Cover = () => {
  return (
    <div className="cover-contain">
      <img src={assets.cover} />
      <div className="cover-discover">
        <p className="cover-new-arrival">New Arrival</p>
        <p className="cover-head">
          Discover Our
          <br />
          New Collection
        </p>
        <p className="cover-lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="cover-buy">BUY NOW</button>
      </div>
    </div>
  );
};

export default Cover;
