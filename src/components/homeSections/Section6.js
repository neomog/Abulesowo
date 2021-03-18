import React from 'react'
import facebook from "./section6/facebook.png";
import twitter from "./section6/twitter.png";
import instagram from "./section6/instagram.png";
import { Link } from "react-router-dom";

function Section6() {
    return (
        <div className="section6">
            <section className="six container">
                <div style={{float: "left"}}><a href="#">Terms & Conditions</a>     <a href="#">Privacy Policy</a></div>

                <div style={{float: "right"}}>
                    <Link className="section6-img" href="#"><img className="section6-img" src={facebook} alt="facebook" /></Link>     <Link href="#"><img src={twitter} alt="twitter" /></Link>
                    <Link href="#"><img src={instagram} alt="instagram"  className="icon3" /></Link>
                </div>
            </section>
        </div>
    )
}


export default Section6
