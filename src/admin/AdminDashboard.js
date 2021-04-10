import React, { useState, useEffect } from "react";
// import Header from "../components/layout/Header";
import one from "./prop1.png";
import { Link } from "react-router-dom";

import { useAlert } from "react-alert";

// import data from "./pics/db";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Select,
  Check,
} from "reactstrap";
import { Table, Button } from "react-bootstrap";

import axios from "axios";

const AdminDashboard = (props, adminDetails) => {
  const alert = useAlert();
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [propsDetail, setPropsDetail] = useState(
    JSON.parse(localStorage.getItem("propsdetail"))
  );
  // console.log(propsDetail.propstoken);

  const [propsList, setPropsList] = useState([]);
  const action = "06";
  // const apptoken = "ZC20AD91QR";

  const [afterDel, setAfterDel] = useState(false);

  useEffect(() => {
    // setPropsList(data);
    if (action) {
      const data = {
        action: "06",
        apptoken: "ZC20AD91QR",
      };

      axios
        .get("http://api.abulesowo.ng", {
          params: data,
        })
        .then((req) => {
          console.log(req.data);
          setPropsList(req.data);

          localStorage.setItem("propsdetails", JSON.stringify(req.data));
        })
        .catch((error) => {
          console.log(error);
          console.log("Check your network and try again.");
        });
    }
  }, [afterDel]);

  // const toggle = () => setHodal(!hmodal);

  // const [userInput, setUserInput] = useState({
  //   type: "",
  //   title: "",
  //   cost: "",
  //   location: "",
  //   status: true,
  // });

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Upload a file");

  // const onChange = (e) => {
  //   const value = e.target.value;
  //   // setUserInput({ ...userInput, [e.target.name]: value });
  // };

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleDelete = (e, propstoken) => {
    // var array = propsList;
    // var index = array.indexOf(e.target.value);
    // delete array[index];
    // console.log(index);
    e.preventDefault();
    const data = {
      apptoken: "ZC20AD91QR",
      action: "04",
      propstoken: propstoken,
    };
    axios
      .get("http://api.abulesowo.ng", {
        params: data,
      })
      .then((res) => {
        console.log(res.data);
        alert.show(res.data.message);
        setAfterDel(!afterDel);
      })
      .catch((error) => {
        console.log(error);
        console.log("Check your network and try again.");
      });
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState(null);
  const [type, setType] = useState("");
  const [hmodal, setHmodal] = useState(false);
  const [propstoken, setPropsToken] = useState("");

  const toggle = () => setHmodal(!hmodal);

  const handleEditModal = (name, description, location, price, propsToken) => {
    setName(name);
    setDescription(description);
    setLocation(location);
    setPrice(price);
    setHmodal(!hmodal);
    setPropsToken(propsToken);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (name || location || price || type || description) {
      const data = {
        apptoken: "ZC20AD91QR",
        action: "05",
        admintoken: "6VTOWCEC51",
        propstoken: propstoken,
        propsname: name,
        propsdesc: description,
        propslocation: location,
        propsprice: price,
        propstype: type,
      };
      console.log(data);
      axios
        .get("http://api.abulesowo.ng", {
          params: data,
        })
        .then((res) => {
          setHmodal(!hmodal);
          setAfterDel(!afterDel);
          alert.show(res.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // const handleEdit = () => {
  //   axios
  //     .get("http://api.abulesowo.ng", {
  //       params: data,
  //     })
  //     .then((res) => {
  //       console.log(res.message);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log("Check your network and try again.");
  //     });
  // };

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
      <div style={{ width: "80%", margin: "auto" }}>
        <div>
          <h4>Manage Property</h4>
        </div>
        <Button>
          <Link to="/admin">Add new property</Link>
        </Button>

        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>

          {propsList.map((item, index) => {
            const {
              propstype,
              propsdesc,
              propslocation,
              propsprice,
              propstoken,
              propsname,
              file,
            } = item;

            return (
              <tbody key={index}>
                <tr>
                  <td>{`${index + 1}`}</td>
                  <td>
                    <img src={file} alt="one" />
                  </td>
                  <td>
                    {propsname}
                    <br />
                    {propsdesc}
                    <br />
                    {propsprice}
                    <br />
                    {propslocation}
                    <br />
                    {propstype}
                  </td>
                  <td>
                    <Button
                      onClick={() =>
                        handleEditModal(
                          propsname,
                          propsdesc,
                          propslocation,
                          propsprice,
                          propstoken,
                          propstype
                        )
                      }
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      style={{ backgroundColor: "red", border: "none" }}
                      onClick={(e) => handleDelete(e, propstoken)}
                      id={item.propsid}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
      <Modal isOpen={hmodal} toggle={handleEditModal} className={className}>
        <ModalHeader toggle={handleEditModal}>Modal title</ModalHeader>
        <ModalBody>
          <label>Title</label>
          <Input
            name="title"
            type="text"
            placeholder="Normal text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="select"
            as="select"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Choose Type</option>
            <option>Land</option>
            <option>Rent</option>
            <option>House</option>
          </Input>

          {/* <Input
            id="exampleFormControlFile1"
            type="file"
            onChange={onFileChange}
          />
          <img src={file} alt="" /> */}

          <label>Title</label>
          <Input
            name="title"
            type="text"
            placeholder="Normal text"
            placeholder="Enter title"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Cost</label>
          <Input
            type="number"
            placeholder="Enter cost"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            name="cost"
          />

          <Input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            name="location"
          />

          <Button variant="primary" type="submit" onClick={handleEditSubmit}>
            Submit
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mainNav = {
  textDecoration: "none",
};

export default AdminDashboard;
