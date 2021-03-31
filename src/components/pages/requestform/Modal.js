import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function ModalApp({ show, close }) {

    
    return (
        <div>
            <Modal show={show} centered backdrop="static">
                <Modal.Dialog centered>
                    <Link variant="secondary" style={{textAlign: "right", fontSize: "20px", textDecoration: "none"}} onClick={close} >&times;</Link>
                <Modal.Header style={{border: "none"}}>
                    <Modal.Title>
                        Request to visit a location
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body style={{border: "none"}}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your first and last name" />

                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="number" placeholder="Kindly enter your mobile number" />

                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Kindly enter your email" />

                            <Form.Label>Pick a suitable date</Form.Label>
                            <Form.Control type="date" />

                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" roe="4" />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer style={{border: "none", padding: "none"}}>
                    {/* <Button variant="secondary" onClick={close} >Close</Button> */}
                    <Button variant="primary">Send</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </Modal>
        </div>
    )
}

export default ModalApp
