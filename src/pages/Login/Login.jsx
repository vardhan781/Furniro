import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [state, setState] = useState("Login");
  const navigate = useNavigate();
  return (
    <div>
      <div className="shop-header">
        <img className="shop-cover" src={assets.shop_cover} alt="" />
        <div className="shop-nav">
          <p className="shop-nav-head">{state}</p>
          <div className="shop-path">
            <p onClick={() => navigate("/")}>Home</p>
            <img src={assets.right_arrow} />
            <p className="shop-blurred-path">{state}</p>
          </div>
        </div>
      </div>

      <div className="login-contain">
        {state === "Sign Up" ? (
          <div className="sign-in-contain">
            <p className="login-head">Name</p>
            <input type="text" className="login-inp" required />
          </div>
        ) : (
          ""
        )}
        <div className="sign-in-contain">
          <p className="login-head">Email</p>
          <input type="email" className="login-inp" required />
        </div>
        <div className="sign-in-contain">
          <p className="login-head">Password</p>
          <input type="password" className="login-inp" required />
        </div>

        <div className="login-last">
          <button className="login-btn">
            {state === "Login" ? "Login" : "Sign Up"}
          </button>
          {state === "Login" ? (
            <p>
              Not have an account ?{" "}
              <span onClick={() => setState("Sign Up")}>Create Account</span>
            </p>
          ) : (
            <p>
              Already have an account ?{" "}
              <span onClick={() => setState("Login")}>Login Here</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
