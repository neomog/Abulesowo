import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../components/layout/Header";

import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
  const [userInput, setUserInput] = useState({
    type: "",
    file: "",
    title: "",
    cost: "",
    location: "",
    status: true,
  });

  const onChange = (e) => {
    const value = e.target.value;
    setUserInput({ ...userInput, [e.target.name]: value });
  };

  return (
    <div>
      <Header />
      <div style={{ width: "80%", margin: "auto" }}>
        <Form>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type="number" name="id" placeholder="Enter id" />
            {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="select"
              name="type"
              value={userInput.type}
              onChange={onChange}
            >
              <option>Choose Type</option>
              <option>Land</option>
              <option>Rent</option>
              <option>Property</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              value={userInput.file}
              name="file"
              onChange={onChange}
              label="Example file input"
            />
            <img src={userInput.file} alt="" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Normal text"
              placeholder="Enter title"
              value={userInput.title}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Cost</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter cost"
              value={userInput.cost}
              onChange={onChange}
              name="cost"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              value={userInput.location}
              onChange={onChange}
              name="location"
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              value={userInput.status}
              onChange={() => {
                setUserInput(!userInput);
              }}
              label="Available"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Admin;
