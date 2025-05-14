import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { assets, products } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import Assurance from "../../components/Assurance/Assurance";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();
  const cartProductList = products.filter((product) => cartItems[product.id]);

  const getTotal = () => {
    return cartProductList
      .reduce((total, product) => {
        const quantity = cartItems[product.id];
        return total + product.price * quantity;
      }, 0)
      .toFixed(2);
  };
  return (
    <div>
      <div className="shop-header">
        <img className="shop-cover" src={assets.shop_cover} alt="" />
        <div className="shop-nav">
          <p className="shop-nav-head">Cart</p>
          <div className="shop-path">
            <p onClick={() => navigate("/")}>Home</p>
            <img src={assets.right_arrow} />
            <p className="shop-blurred-path">Cart</p>
          </div>
        </div>
      </div>
      {Object.keys(cartItems).length === 0 ? (
        <div className="no-cart-pros">Your Cart Is Empty</div>
      ) : (
        <div className="cart-container">
          <div className="cart-left-det">
            <div className="cart-items-head">
              <p>Image</p>
              <p>Name</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>SubTotal</p>
              <p>Action</p>
            </div>
            <div className="cart-items-dis">
              {cartProductList.map((product) => {
                const quantity = cartItems[product.id];
                const subtotal = (product.price * quantity).toFixed(2);
                return (
                  <div key={product.id} className="cart-single-item">
                    <img src={product.img} alt="" className="cart-img" />
                    <p className="cart-name">{product.name}</p>
                    <p className="cart-price">$ {product.price}</p>
                    <p className="cart-quantity">{quantity}</p>
                    <p className="cart-subtotal">$ {subtotal}</p>
                    <img
                      onClick={() => removeFromCart(product.id)}
                      src={assets.trash}
                      className="trash-icon"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cart-right-det">
            <p className="cart-right-head">Cart Totals</p>
            <div className="get-cart-total">
              <p className="get-total-head">Total : </p>
              <p className="get-total-price">$ {getTotal()}</p>
            </div>
            <button>Check Out</button>
          </div>
        </div>
      )}
      <Assurance />
    </div>
  );
};

export default Cart;
