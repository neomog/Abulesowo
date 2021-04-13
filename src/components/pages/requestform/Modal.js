import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAlert } from "react-alert";

import axios from "axios";

const ModalApp = ({ show, close }) => {
  const alert = useAlert();
  const apptoken = "ZC20AD91QR";
  // const admintoken = "6VTOWCEC51";

  // const [userInput, setUserInput] = useState({
  //   username: "",
  //   userlocation: "",
  //   usermail: "",
  // });

  // const [afterSend, setAfterSend] = useState(false);
  const [username, setUserName] = useState("");
  const [userlocation, setUserLocation] = useState("");
  const [usermail, setUserMail] = useState("");
  // const [info, setInfo] = useState("");

  // const { username, userlocation, usermail } = userInput;

  // const empty = setUserInput({});

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setUserInput({ ...userInput, [e.target.name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && userlocation && usermail) {
      const data = {
        apptoken,
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
            alert.success(res.data.message);
            setUserName("");
            setUserLocation("");
            setUserMail("");
            close();
            // setInfo(res.data.message);
            // console.log(res.data.message);
          } else {
            alert.error(res.data.message);
            // setInfo(res.data.message);
            console.log(res.data.message);
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
      <Modal show={show} centered backdrop="static">
        <Modal.Dialog centered>
          <Link
            variant="secondary"
            style={{
              textAlign: "right",
              fontSize: "20px",
              textDecoration: "none",
            }}
            onClick={close}
          >
            &times;
          </Link>
          <Modal.Header style={{ border: "none" }}>
            <Modal.Title>Request to visit a location</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ border: "none" }}>
            {/* <p>{info}</p> */}
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                placeholder="Enter your first and last name"
              />

              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="userlocation"
                value={userlocation}
                onChange={(e) => {
                  setUserLocation(e.target.value);
                }}
                placeholder="Kindly enter your location"
              />

              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="usermail"
                value={usermail}
                onChange={(e) => {
                  setUserMail(e.target.value);
                }}
                placeholder="Kindly enter your email"
              />

              {/* <Form.Label>Pick a suitable date</Form.Label>
              <Form.Control type="date" />

              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                roe="4"
                name="requestdetails"
                value={userInput.requestdetails}
                onChange={handleChange}
              /> */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer style={{ border: "none", padding: "none" }}>
            {/* <Button variant="secondary" onClick={close} >Close</Button> */}
            <Button variant="primary" onClick={(e) => handleSubmit(e)}>
              Send
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default ModalApp;
