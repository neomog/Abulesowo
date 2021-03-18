import React, { useState } from "react"
// import Modal from 'react-bootstrap/Modal';
import "./form.css"

const RequestForm = ({id, modalOpen, onClose}) => {
    const [userInput, setUserInput] = useState({
        name: "",
        number: "",
        email: "",
        date: "",
        text: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setUserInput({ ...userInput, [name]: value })
    }

    const { name, number, email, date, text } = userInput

    return (
        <div className="modal-background">
            <div className="modal-container">    
                <form>
                    <div className="close-modal-btn"><button onClick={onClose}>x</button></div>
                    <div className="modal-title"><p>Request to visit a location</p></div>

                    <label for="name">name</label>
                    <input type="text" name="name" value={name} placeholder="Enter your first and last name" />

                    {/* <label for="name">name</label>
                    <input type="text" name="name" value="userInput.name" placeholder="Enter your first and last name" /> */}

                    <label for="number">Phone number</label>
                    <input type="number" name="number" value={number} onChange={handleChange} placeholder="Kindly enter your mobile number" />

                    <label for="email">Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} placeholder="Kindly enter your email" />

                    <label for="date">Pick a suitable date</label>
                    <input type="date" name="date" onChange={handleChange} value={date} />

                    <label for="message">Message</label>
                    <textarea className="textarea" name="message" onChange={handleChange} value={text} />
                    
                    <input type="submit" value="Submit" />
                </form>

                            
            </div>
        </div>
        
    )
}

export default RequestForm
