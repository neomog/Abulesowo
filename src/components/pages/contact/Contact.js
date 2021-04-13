import React, { useState } from "react";
import Header from "../../layout/Header";
import location from "../contactIcons/location.png";
import message from "../contactIcons/message.png";
import phone from "../contactIcons/phone.png";
import whatsapp from "../contactIcons/whatsapp.png";
import "./form.css";
import axios from "axios";
import { useAlert } from "react-alert";

import Section5 from "../../homeSections/Section5";
import Section6 from "../../homeSections/Section6";
import Footer from "../../layout/Footer";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [username, setUserName] = useState("");
  const [userlocation, setUserLocation] = useState("");
  const [usermail, setUserMail] = useState("");

  const alert = useAlert();

  const close = () => {
    setShow(false);
    console.log("hey");
  };

  //   const handleChange = (e) => {
  //     const value = e.target.value;

  //     setContactInput({ ...contactInput, [e.target.name]: value });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && userlocation && usermail) {
      const data = {
        apptoken: "ZC20AD91QR",
        action: "08",
        username,
        userlocation,
        usermail,
      };

      axios
        .get("http://api.abulesowo.ng", {
          params: data,
        })
        .then((res) => {
          if (res.data.response === "08") {
            alert.success("Message Sent Successfully");
            setUserName("");
            setUserLocation("");
            setUserMail("");

            close(show);
            // setInfo(res.data.message);
            // console.log(res.data.message);
          } else {
            // alert.error(res.data.message);
            // setInfo(res.data.message);
            // console.log(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
          console.log("error");
        });
    }
  };

  return (
    <div>
      <div>
        <Header />
        <div style={contactHero}>
          <p>Get in Touch</p>
          <p>
            Fill up the form and our team will get back to you within 24 hours
          </p>
        </div>
        <div className="mainContainer contact">
          <form className="flex-one" onSubmit={handleSubmit}>
            <p className="redText boldText">Contact form</p>
            <label for="name">Your name</label>
            <input
              type="text"
              name="name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />

            <label for="mail">Your Location</label>
            <input
              type="text"
              name="location"
              value={userlocation}
              onChange={(e) => setUserLocation(e.target.value)}
            />

            {/* <label for="text">Message</label>
            <textarea
              className="textarea"
              name="message"
              value={contactInput.message}
              onChange={handleChange}
            /> */}
            <label for="mail">Your Email address</label>
            <input
              type="mail"
              name="mail"
              value={usermail}
              onChange={(e) => setUserMail(e.target.value)}
            />

            <input type="submit" value="Send Message" onClick={handleSubmit} />
          </form>

          <div className="flex-two">
            <div className="flex1">
              <div className="flex-item1">
                <img src={location} alt="location" />
              </div>

              <div className="flex-item2">
                <p>26, Ladoke Akintola, Bodija.</p>
              </div>
            </div>

            <div className="flex2">
              <div className="flex-item1">
                <img src={phone} alt="phone" />
              </div>

              <div className="flex-item2">
                <p>+234 80 912 56000</p>
              </div>
            </div>

            <div className="flex3">
              <div className="flex-item1">
                <img src={message} alt="message" />
              </div>
              <div className="flex-item2">
                <p>info@Abulesowo.ng</p>
              </div>
            </div>

            <div className="flex4">
              <div className="flex-item1">
                <img src={whatsapp} alt="whatsapp" />
              </div>

              <div className="flex-item2">
                <p>Chat with us on whatsapp</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ border: "1px solid #dc3545", marginTop: "30px" }}>
          <Section5 />
          <Section6 />
          <Footer />
        </div>
      </div>
    </div>
  );
};
const contactHero = {
  backgroundColor: "#dc3545",
  color: "#fff",
  textAlign: "center",
  padding: "20px",
  fontSize: "20px",
};

export default Contact;
