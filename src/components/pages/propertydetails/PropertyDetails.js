import React, { useState } from "react";
import Header from "../../layout/Header";
import one from "./one.png";
import two from "./two.png";
import three from "./three.png";
import four from "./four.png";
import five from "./five.png";
import { Link } from "react-router-dom";
// import ModalApp from "../requestform/Modal";

import { useAlert } from "react-alert";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Details = () => {
  const [afterSend, setAfterSend] = useState(false);
  const [username, setUserName] = useState("");
  const [userlocation, setUserLocation] = useState("");
  const [usermail, setUserMail] = useState("");
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };
  const close = () => {
    setShow(false);
    // console.log("hey");
  };

  const alert = useAlert();

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
            alert.success(res.data.message);
            setUserName("");
            setUserLocation("");
            setUserMail("");
            setAfterSend(!afterSend);
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
      <div>
        <Header />
        <div className="mainContainer">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridGap: "3rem",
              paddingTop: "20px",
            }}
          >
            <div>
              <img src={one} alt="one" />
            </div>

            <div>
              <p className="redText">Property Information</p>
              <p>
                <span className="boldText">Name:</span> 4 bedroom flat
              </p>
              <p>
                <span className="boldText">Type:</span> Rent
              </p>
              <p>
                <span className="boldText">Price:</span> #1,500,000.00
              </p>
              <p>
                <span className="boldText">Location:</span> Odusanya Street,
                Bodija, Oyo State.
              </p>
              <p>
                <span className="boldText">Amenities:</span> Terrace | Rooms
                Ensuite | Parking Space | Balcony | Tiles | Gated Environment |
                Security Personnel At Gate | Fence | Security Lights |
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridGap: "3rem",
              paddingTop: "20px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridGap: "1rem",
              }}
            >
              <img src={two} alt="two" />
              <img src={three} alt="three" />
              <img src={four} alt="four" />
              <img src={five} alt="five" />
            </div>

            <div>
              <Link onClick={openModal}>
                <button className="details-btn1">Visit location</button>
              </Link>
              <Link>
                <button className="details-btn2">Request via email</button>
              </Link>
              <p className="boldText">About this Apartment</p>
              <p>
                Readily available and comfortable to accommodate you. Located in
                an easily accessible area within the beautiful metropolis of
                Ibadan.
              </p>
              <p className="boldText">More Details</p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div>
                  <p>Property Type: House</p>
                  <p>Bedroom: 4 bedrooms</p>
                  <p>Bathroom: 3 bathrooms</p>
                  <p>Toilets: 2 toilets</p>
                </div>

                <div>
                  <p>Year built :2016</p>
                  <p>market status: Available</p>
                  <p>Date Added: Feb 2021</p>
                  <p>last updated: 4 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      {/* <ModalApp show={show} close={close} /> */}
    </div>
  );
};

export default Details;
