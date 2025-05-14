import React, { useContext } from "react";
import "./OurProducts.css";
import { StoreContext } from "../../context/StoreContext";
import ProductItem from "../ProductItem/ProductItem";
const OurProducts = () => {
  const { products } = useContext(StoreContext);
  return (
    <div className="our-pro-contain">
      <p className="our-pro-header">Our Products</p>
      <div className="our-pro-grid">
        {products.slice(0, 4).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <button className="our-pro-more">Show More</button>
    </div>
  );
};

export default OurProducts;
