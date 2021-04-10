import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useAlert } from "react-alert";

import "./consult.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

import one from "./eclipse1.png";
import two from "./eclipse2.png";

function Consulting() {
  const alert = useAlert();

  // const [validated, setValidated] = useState(false);
  const [userInput, setUserInput] = useState({
    username: "",
    userlocation: "",
    usermail: "",
    requestdetails: "",
  });

  const { username, userlocation, usermail, requestdetails } = userInput;

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput({ ...userInput, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userInput);

    if (username && userlocation && usermail && requestdetails) {
      const data = {
        action: "09",
        apptoken: "ZC20AD91QR",
        username,
        userlocation,
        usermail,
        requestdetails,
      };
      axios
        .get("http://api.abulesowo.ng", {
          params: data,
        })
        .then((res) => {
          console.log(res.data);
          alert.show(res.data.message);
          setUserInput({
            username: "",
            userlocation: "",
            usermail: "",
            requestdetails: "",
          });
          if (res.data.response === "09") {
            console.log(res.data.message);
          } else {
            console.log(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
          console.log("Check your network and try again.");
        });
    } else {
      console.log("empty fields, please complete the logine form..");
    }
  };

  return (
    <div style={styles.consultContainer}>
      <img alt="eclipse1" src={one} style={styles.eclipse1} />
      <Form
        centered
        style={{
          width: "400px",
          margin: "auto",
          padding: "15px",
          background: "#fff",
          borderRadius: "10px",
        }}
      >
        <Link style={{ color: " #dc3545", fontStyle: "strong" }} to="/">
          Back Home
        </Link>
        <br />
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={userInput.username}
            onChange={handleChange}
            placeholder="Enter your first and last name"
          />

          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="userlocation"
            value={userInput.userlocation}
            onChange={handleChange}
            placeholder="Kindly enter your location"
          />

          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="usermail"
            value={userInput.usermail}
            onChange={handleChange}
            placeholder="Kindly enter your email"
          />

          <Form.Label>Pick a suitable date</Form.Label>
          <Form.Control type="date" />

          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            roe="4"
            name="requestdetails"
            value={userInput.requestdetails}
            onChange={handleChange}
          />
        </Form.Group>
        <Button onClick={handleSubmit}>Send</Button>
      </Form>
      <img alt="eclipse1" src={two} style={styles.eclipse2} />
    </div>
  );
}

const styles = {
  consultContainer: {
    width: "100%",
    height: "100vh",

    backgroundColor: "rgb(57, 57, 57, 0.5)",
    overflow: "hidden",
  },

  eclipse2: {
    width: "7%",
    float: "right",
  },

  eclipse1: {
    width: "7%",
  },
};

export default Consulting;
