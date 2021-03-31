import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <div style={{ paddingTop: "100px" }}>
        <Form style={{ width: "50%", margin: "auto" }}>
          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              name="name"
              value={register.name}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={register.email}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={register.password}
              onChange={onChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            Register
          </Button>
          <Link to="/login">Already have an account? click Here to Login</Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
