import React from "react";
import "./Shop.css";
import { assets, products } from "../../assets/assets";
import ProductItem from "../../components/ProductItem/ProductItem";
import Assurance from "../../components/Assurance/Assurance";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  return (
    <div className="shop-container">
      <div className="shop-header">
        <img className="shop-cover" src={assets.shop_cover} alt="" />
        <div className="shop-nav">
          <p className="shop-nav-head">Shop</p>
          <div className="shop-path">
            <p onClick={() => navigate("/")}>Home</p>
            <img src={assets.right_arrow} />
            <p className="shop-blurred-path">Shop</p>
          </div>
        </div>
        <div className="shop-showcase">
          <img src={assets.filter} alt="" />
          <p>Filter</p>
          <img src={assets.grid} alt="" />
          <img src={assets.list} alt="" />
          <p className="shop-reverend">|</p>
          <p>Showing 10 Results</p>
        </div>
      </div>
      <div className="shop-products">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Assurance />
    </div>
  );
};

export default Shop;
