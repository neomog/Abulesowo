import React from "react";
import location from "./section5/location.png";
import phone from "./section5/phone.png";
import message from "./section5/message.png";
import { Link } from "react-router-dom";

function Section5() {
  return (
    <div className="section5">
      <section className="section5Row  mainContainer">
        <div className="sec2one">
          <p>Ready to get started?</p>
          <Link to="/contact">
            <button>Get started</button>
          </Link>
        </div>
        <div className="sec5two">
          <div>
            <li className="redText">Services</li>
            <Link to="/properties" className="text-link">
              <p>Buy houses</p>
            </Link>
            <Link to="/lands" className="text-link">
              <p>Buy land</p>
            </Link>
            <Link to="/consult-us" className="text-link">
              <p>Consulting services</p>
            </Link>
          </div>
          <div>
            <li className="redText">About</li>
            <Link to="/" className="text-link">
              <p>Our story</p>
            </Link>
            <Link to="/" className="text-link">
              <p>Benefits</p>
            </Link>
            <Link to="/" className="text-link">
              <p>Privacy policy</p>
            </Link>
          </div>
        </div>

        <div className="sec5three">
          <li className="redText">Contact Us</li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={location} alt="location" />
            <p className="section5-contact-text">
              26, Ladoke Akintola, Bodija.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={phone} alt="phone" />
            <p className="section5-contact-text">+234 809 125 6000</p>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={message} alt="message" />
            <Link
              className="section5-contact-text text-link"
              to="info@Abulesowo.ng"
            >
              info@Abulesowo.ng
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section5;
