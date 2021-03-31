import React, { useState } from "react";
import Header from "../../components/layout/Header";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const value = e.target.value;
    setLogin({ ...login, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ login });
  };

  return (
    <div>
      <Header />
      <div style={{ paddingTop: "150px" }}>
        <Form style={{ width: "50%", margin: "auto" }}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={onChange}
              value={login.email}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              value={login.password}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
