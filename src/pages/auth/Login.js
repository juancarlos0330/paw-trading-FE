import React from "react";

// import assets
import LogoImg from "../../assets/image/signin_logo.png";
import google from "../../assets/image/google_icon.png";
import facebook from "../../assets/image/facebook_icon.png";

// import style
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-section">
        <div className="logo-section">
          <img src={LogoImg} className="logo-img" alt="logo" />
        </div>
        <div className="main-section">
          <h2 className="title">Login</h2>
          <p className="sub-title">Sign in to continue using Dashboard</p>
          <div className="input-section">
            <div className="col-field">
              <label className="label">Email or Username</label>
              <input className="input-text" type="text" placeholder="" />
            </div>
            <div className="col-field">
              <label className="label">Password</label>
              <input className="input-text" type="password" placeholder="" />
            </div>
            <div className="col-sub-field">
              <div className="checkbox-section">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember me</label>
              </div>
              <a className="forgot-password" href="/forgot-password">
                Forgot password?
              </a>
            </div>
            <a href="/overview/chain" className="login-btn">
              Login
            </a>
            <div className="spilt-line">
              <span>or</span>
            </div>
            <div className="social-login-section">
              <button type="button" className="google-btn">
                <img src={google} alt="google" /> Google Login
              </button>
              <button type="button" className="facebook-btn">
                <img src={facebook} alt="facebook" /> Facebook Login
              </button>
            </div>
            <div className="register-yet-section">
              Don't have an account?{" "}
              <a href="/register" className="register-btn">
                Register
              </a>{" "}
              Here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
