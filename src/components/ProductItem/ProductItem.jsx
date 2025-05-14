import React from "react";
import "./ProductItem.css";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    window.scrollTo(0, 0);
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="item-contain">
      <div onClick={handleViewClick} className="item-img-contain">
        <img className="item-img" src={product.img} />
        <div className="item-hover-overlay">
          <button className="item-hover-btn">Click</button>
        </div>
      </div>
      <p className="item-name">{product.name}</p>
      <p className="item-sub-name">{product.subName}</p>
      <p className="item-price">$ {product.price}</p>
      {product.new && <span className="new-badge">New</span>}
    </div>
  );
};

export default ProductItem;
