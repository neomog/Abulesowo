import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Section5 from "./homeSections/Section5";
import Section6 from "./homeSections/Section6";

const About = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          width: "85%",
          margin: "auto",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <h4>About Us</h4>
        <h3>We provide the best property for you!</h3>
        <p
          style={{
            width: "60%",
            margin: "auto",
            fontSize: "18px",
            lineHeight: "2rem",
          }}
        >
          Abulesowo, One of The Largest Real Estate Investment Firm in Nigeria.
          One of top real estate companies in Nigeria. Real estate investment
          firm positioned to deliver a cutting edge and competitive real estate
          solutions to our valued clients. We engage in real estate development,
          Selling of lands and properties.We offer good and flexible payment
          plans on all our product and services. Our proven track record will
          ensure you receive value for money in the services we provide. We at
          LANDMARK Corporate Realty Ltd ® handle all services with a very high
          level of professionalism as client satisfaction is our topmost
          priority and at no extra cost or hidden charges.
        </p>
      </div>

      <div style={{ border: "1px solid #dc3545", marginTop: "30px" }}>
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    </div>
  );
};

export default About;
