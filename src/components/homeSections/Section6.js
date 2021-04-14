import React from "react";
import facebook from "./section6/facebook.png";
import twitter from "./section6/twitter.png";
import instagram from "./section6/instagram.png";
import { Link } from "react-router-dom";

function Section6() {
  return (
    <div className="section6 full">
      <section className="six mainContainer">
        <div>
          <Link href="#">Terms & Conditions</Link>{" "}
          <Link href="#">Privacy Policy</Link>
        </div>

        <div className="end">
          <Link className="section6-img" to="#">
            <img className="section6-img" src={facebook} alt="facebook" />
          </Link>{" "}
          <Link to="#">
            <img src={twitter} alt="twitter" />
          </Link>
          <Link to="#">
            <img src={instagram} alt="instagram" className="icon3" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Section6;
