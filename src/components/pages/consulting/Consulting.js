import React, { useState } from 'react';
import { Link } from "react-router-dom";
 
import "./consult.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "bootstrap/dist/css/bootstrap.min.css";

import one from "./eclipse1.png";
import two from "./eclipse2.png";



function Consulting() {

    // const [validated, setValidated] = useState(false);
    const [userInput, setUserInput] = useState({
        name: "",
        number: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUserInput({...userInput, [e.target.name]: value})
    }

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     }

    //     setValidated(true);
    // };

    
    return (
        <div style={styles.consultContainer}>
            <img alt="eclipse1" src={one} style={styles.eclipse1} />
            <Form centered style={{ width: "400px", margin: "auto", padding: "15px", background: "#fff", borderRadius: "10px" }}>
                <Link style={{ color: " #dc3545", fontStyle: "strong" }} to="/">Back Home</Link>
                <br />
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control type="text" name="name" value={userInput.name} onChange={handleChange} />
                
                <Form.Label htmlFor="number">Phone number</Form.Label>
                <Form.Control type="number" name="number" value={userInput.number} onChange={handleChange} />
                
                <Form.Label htmlFor="email">Gmail</Form.Label>
                <Form.Control type="email" name="email" value={userInput.email} onChange={handleChange} />
                
                <Form.Label htmlFor="text">Message</Form.Label>
                <Form.Control style={{marginBottom: "10px"}} rows="4" name="message" as="textarea" value={userInput.message} onChange={handleChange} />
                
                <Button style={{ backgroundColor: " green", border: "#dc3545", width: "100%" }}>Submit</Button>
                <Button >Go Home</Button>
                {/* <Form.Text id="passwordHelpBlock" muted>
                    </Form.Text> */}
            </Form>
            <img alt="eclipse1" src={two} style={styles.eclipse2}/>
        </div>
    )
}

const styles = {

    consultContainer: {
        width: "100%",
        height: "100vh",
  
        backgroundColor: "rgb(57, 57, 57, 0.5)",
        overflow: "hidden"
    },
    
    eclipse2: {
        width: "7%",
        float: "right"
    },

    eclipse1: {
        width: "7%",
    }

};


export default Consulting
