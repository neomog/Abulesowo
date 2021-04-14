import React, { useState, useRef } from "react";
import { useAlert } from "react-alert";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
// import Alert from "../alert/Alert";
import Header from "./Header";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Admin = (adminDetails) => {
  const alert = useAlert();

  // const apptoken = "ZC20AD91QR";

  // const [userInput, setUserInput] = useState({
  //   type: "",
  //   title: "",
  //   cost: "",
  //   location: "",
  // });

  const fileInputField = useRef(null);

  const [propstype, setPropsType] = useState("");
  const [propsname, setPropsName] = useState("");
  const [propslocation, setPropsLocation] = useState("");
  const [propsprice, setPropsPrice] = useState("");
  const [propsdesc, setPropsDesc] = useState("");
  const [file, setFile] = useState({});

  // const [adminDetails, setAdminDetails] = useState(
  //   JSON.parse(localStorage.getItem("adminDetails"))
  // );
  // console.log(adminDetails.adminDetails.admintoken);
  // const [fileName, setFileName] = useState("Upload a file");

  // const onChange = (e) => {
  //   const value = e.target.value;
  //   setUserInput({ ...userInput, [e.target.name]: value });
  // };
  // const onFileChange = (e) => {
  //   setFile(e.target.files[0]);
  //   // setFileName(e.target.files[0].name);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    // const { type, title, cost, location } = userInput;
    // const formData = new FormData(e.target.files);

    // const files = Array.from(file);
    // files.forEach((file, i) => {
    //   formData.append(i, file);
    // });
    // for (var [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    // formData.append("file", file);
    // formData.append("propsname", userInput.type);
    // formData.append("propsdesc", userInput.title);
    // formData.append("propsprice", userInput.cost);
    // formData.append("propslocation", userInput.location);
    // formData.append("apptoken", apptoken);
    // // Display the values
    // for (var value of formData.values()) {
    //   console.log(value);
    // }

    // const { type, title, cost, location } = userInput;

    if (propsname && propslocation && propsprice && propstype && file) {
      const data = {
        apptoken: "ZC20AD91QR",
        admintoken: "6VTOWCEC51",
        action: "03",
        propsname,
        propslocation,
        propsprice,
        propstype,
        propsdesc,
        file,
      };

      console.log(data);

      axios
        .get("http://api.abulesowo.ng/", {
          params: data,
        })
        .then((res) => {
          console.log(res.data);
          setPropsType("");
          setPropsName("");
          setPropsLocation("");
          setPropsPrice("");
          setPropsDesc("");
          setFile({});
          alert.show(res.data.message);
        })
        .catch((error) => {
          console.log(error);
          console.log("error message");
        });
    }
  };

  return (
    <div>
      {/* <header>
        <div className="header">
          <div>
            <span>
              <strong>Abulesowo</strong>
            </span>
          </div>

          <nav style={mainNav}>
            <Link>
              <Link to="/admin" className="active">
                Dashboard
              </Link>
            </Link>
            <Link to="/create">Add property</Link>
            <Link to="/login">Logout</Link>
          </nav>
        </div>
      </header> */}

      <Header />
      <div style={{ width: "80%", margin: "auto" }}>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Enter title"
              value={propsname}
              onChange={(e) => setPropsName(e.target.value)}
            />
          </Form.Group>

          {/* <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type="number" name="id" placeholder="Enter id" />
          </Form.Group> */}

          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={propstype}
              onChange={(e) => setPropsType(e.target.value)}
            >
              <option>Choose Type</option>
              <option>Land</option>
              <option>Rent</option>
              <option>House</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>File</Form.Label>
            <Form.File
              id="exampleFormControlFile1"
              name="file"
              accept="image/png"
              ref={fileInputField}
              onChange={(e) => {
                var file = e.target.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setFile(reader.result);
                };
              }}
            />
            <img src={file} alt="" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Cost</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter cost"
              value={propsprice}
              onChange={(e) => setPropsPrice(e.target.value)}
              name="cost"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              value={propsdesc}
              onChange={(e) => setPropsDesc(e.target.value)}
              name="description"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              value={propslocation}
              onChange={(e) => setPropsLocation(e.target.value)}
              name="location"
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Available" />
          </Form.Group>
          <Button onClick={onSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

const mainNav = {
  textDecoration: "none",
};

export default Admin;
