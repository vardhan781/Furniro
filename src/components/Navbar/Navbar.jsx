import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { StoreContext } from "../../context/StoreContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cartItems } = useContext(StoreContext);

  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <p>Furniro</p>
        </div>
        <div className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/shop")}>Shop</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </div>
        <div className="nav-icons">
          <img
            onClick={() => navigate("/login")}
            src={assets.account}
            alt="Account"
          />
          <img
            onClick={() => setSearch(true)}
            src={assets.search}
            alt="Search"
          />
          <img src={assets.heart} alt="Wishlist" />
          <div className="nav-cart-wrap">
            <img
              onClick={() => navigate("/cart")}
              src={assets.cart}
              alt="Cart"
            />
            {Object.keys(cartItems).length > 0 && (
              <span className="nav-cart-line"></span>
            )}
          </div>
        </div>

        {/* Menu icon for sidebar toggle */}
        <div className="menu-icon" onClick={() => setSidebarOpen(true)}>
          <img src={assets.menu} alt="Menu" />
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <p>Menu</p>
          <span className="close-btn" onClick={() => setSidebarOpen(false)}>
            ×
          </span>
        </div>
        <ul className="sidebar-links">
          <li
            onClick={() => {
              navigate("/");
              setSidebarOpen(false);
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/shop");
              setSidebarOpen(false);
            }}
          >
            Shop
          </li>
          <li
            onClick={() => {
              navigate("/contact");
              setSidebarOpen(false);
            }}
          >
            Contact
          </li>
          <li
            onClick={() => {
              navigate("/login");
              setSidebarOpen(false);
            }}
          >
            Login
          </li>
          <li
            onClick={() => {
              navigate("/cart");
              setSidebarOpen(false);
            }}
          >
            Cart
          </li>
        </ul>
      </div>

      {/* SearchBar only on /shop */}
      {location.pathname === "/shop" && search && (
        <SearchBar setSearch={setSearch} />
      )}
    </>
  );
};

export default Navbar;
