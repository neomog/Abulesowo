import React, { useState } from "react";
// import Header from "../Header";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const SignIn = () => {
  let history = useHistory();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // const [adminDetails, setAdminDetails] = useState(
  //   JSON.parse(localStorage.getItem("admindetails"))
  // );

  const apptoken = "ZC20AD91QR";

  const { email, password } = login;

  const onChange = (e) => {
    const value = e.target.value;
    setLogin({ ...login, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(login);
    if (email && password) {
      const data = {
        apptoken,
        action: "02",
        adminmail: email,
        password: password,
      };
      axios
        .get("http://api.abulesowo.ng/", {
          params: data,
        })
        .then((res) => {
          if (res.data.response === "02") {
            console.log(res.data);
            localStorage.setItem("admindetails", JSON.stringify(res.data));
            // localStorage.setItem("usertoken", res.data.usertoken);
            history.push(`/admin-dashboard`);
          } else {
            // console.log(res.data.message);
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
    <div>
      <header>
        <div className="header">
          <div>
            <span>
              <strong>Abulesowo</strong>
            </span>
          </div>

          <nav className={mainNav}>
            <Link to="/admin-dashboard">
              <a className="active">Dashboard</a>
            </Link>
            <Link to="/admin">Add property</Link>
            <Link to="/login">Logout</Link>
          </nav>
        </div>
      </header>
      <div style={{ paddingTop: "150px" }}>
        <Form style={{ width: "50%", margin: "auto" }}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
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

const mainNav = {
  textDecoration: "none",
};

export default SignIn;
