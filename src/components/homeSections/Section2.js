import React from 'react';
import one from "./section2/one.jpg";
import home from "./section2/home.png";
import location from "./section2/location.png";

function Section2() {
    return (
        <div className="section2 bg-light">
            <section className="row container bg-light">
                <div className="column section2Image">
                    <img  src={one} alt="one" />
                    <img src={home} alt="home" className="section2Icon1" />
                    <img src={location} alt="location" className="section2Icon2" />
                </div>

                <div className="column padding2">
                    <h4>About Us</h4>
                    <h3>We provide the best property for you!</h3>
                    <p>Abulesowo, One of The Largest Real Estate Investment Firm in Nigeria. One of top real estate companies in Nigeria. Real estate investment firm positioned to deliver a cutting edge and competitive real estate solutions to our valued clients. We engage in real estate development, Selling of lands and properties.We offer good and flexible payment plans on all our product and services. Our proven track record will ensure you receive value for money in the services we provide. We at LANDMARK Corporate Realty Ltd ® handle all services with a very high level of professionalism as client satisfaction is our topmost priority and at no extra cost or hidden charges.</p>
                    <br />
                    <input type="button" value="Learn more"/>
                </div>
            </section>
        </div>
    )
}

export default Section2
