import React, { useContext } from "react";
import "./Product.css";
import { assets, products } from "../../assets/assets";
import { useNavigate, useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import { StoreContext } from "../../context/StoreContext";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useContext(StoreContext);
  const product = products.find((item) => item.id.toString() === id);

  const randomProducts = shuffleArray(products).slice(0, 4);

  return (
    <div className="product-container">
      <div className="product-upper-contain">
        <p onClick={() => navigate("/")} className="product-nav-name">
          Home
        </p>
        <img src={assets.right_arrow} alt="" />
        <p onClick={() => navigate("/shop")} className="product-nav-name">
          Shop
        </p>
        <img src={assets.right_arrow} alt="" />
        <p className="product-nav-name">|</p>
        <p className="product-act-nav">{product.name}</p>
      </div>
      <div className="product-main-contain">
        <div className="product-img-container">
          <img src={product.img} />
        </div>
        <div className="product-other-details">
          <p className="product-name">{product.name}</p>
          <p className="product-price">$ {product.price}</p>
          <p className="product-desc">{product.description}</p>
          <p className="product-size">Size : {product.size}</p>
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product.id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="you-may-check">
        <p className="also-check">Also Check These</p>
        <div className="also-see-products">
          {randomProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
