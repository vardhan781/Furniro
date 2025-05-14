import React from "react";
import "./Range.css";
import { assets } from "../../assets/assets";

const Range = () => {
  return (
    <div className="range-contain">
      <p className="range-title">Browse The Range</p>
      <p className="range-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="explore-range">
        <div className="explore-inside">
          <img src={assets.dining} />
          <p>Dining</p>
        </div>
        <div className="explore-inside">
          <img src={assets.living} />
          <p>Living</p>
        </div>
        <div className="explore-inside">
          <img src={assets.bedroom} />
          <p>Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default Range;
