import React from "react";

//Images
import Logo from "../../assets/logo.png";
import PlayStore from "../../assets/app_store.svg";
import AppStore from "../../assets/play_store.svg";

//CSS
import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div
          className="footer-logo"
          style={{
            marginBottom: "30px",
          }}
        >
          <img src={Logo} alt="logo" width="96px" />
        </div>
        <div className="footer-links">
          <div className="about">
            <ul className="about-btns">
              <li>
                <a
                  href="#"
                  className="about-us"
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    textTransform: "uppercase",
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a href="#" className="about-us-btn find-a-stella">
                  Find a Stella
                </a>
              </li>
              <li>
                <a href="#" className="about-us-btn who-we-are">
                  Who we are
                </a>
              </li>
              <li>
                <a href="#" className="about-us-btn footer-help-center">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="about-us-btn lease-to-stella-stays">
                  Lease to Stella Stays
                </a>
              </li>
              <li>
                <a href="#" className="about-us-btn blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="cities">
            <ul className="about-btns">
              <li>
                <a
                  href="#"
                  className="about-us"
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    textTransform: "uppercase",
                  }}
                >
                  Cities
                </a>
              </li>
              <li>
                <a href="#" className="about-us-btn dubai">
                  Dubai
                </a>
              </li>
              <li>
                <a href="#" className="about-us-btn montreal">
                  Montreal
                </a>
              </li>
              <li>
                <a href="#" className="about-us-btn">
                  Manama
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-us">
            <ul className="about-btns">
              <li>
                <a
                  href="#"
                  className="about-us"
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    textTransform: "uppercase",
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="about-us-btn whatsapp">
                  Whatsapp
                </a>
              </li>
              <li>
                <a href="#" className="about-us-btn email">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="download">
            <ul className="about-btns">
              <li>
                <a
                  href="#"
                  className="about-us"
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    textTransform: "uppercase",
                  }}
                >
                  Download
                </a>
              </li>
            </ul>
            <div className="download-btns flex">
              <img src={AppStore} alt="star" width="50%" />
              <img src={PlayStore} alt="star" width="50%" className="p-2" />
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <span>Copyright © 2021 StellaStays Inc. All rights reserved.</span>
          <span>Terms and conditions · Privacy policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
