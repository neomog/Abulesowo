import React, { useState } from 'react';
import Header from "../../layout/Header";
import location from "../contactIcons/location.png";
import message from "../contactIcons/message.png";
import phone from "../contactIcons/phone.png";
import whatsapp from "../contactIcons/whatsapp.png";
import "./form.css";

const Contact = () => {
    const [contactInput, setContactInput] = useState({
        name: "",
        mail: "",
        message: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;

        setContactInput({ ...contactInput, [e.target.name]: value });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contactInput);
        setContactInput("");
    }


    return (
        <div>
            <div>
                <Header />
                <div style={contactHero}>
                        <p>Get in Touch</p>
                        <p>Fill up the form and our team will get back to you within 24 hours</p>
                </div>
                <div className="mainContainer contact">
                    <form className="flex-one" onSubmit={handleSubmit}>
                        <p className="redText boldText">Contact form</p>
                        <label for="name">Your name</label>
                        <input type="text" name="name" value={contactInput.name} onChange={handleChange} />

                        <label for="mail">Your Email address</label>
                        <input type="mail" name="mail" value={contactInput.mail} onChange={handleChange}  />

                        <label for="text">Message</label>
                        <textarea className="textarea" name="message" value={contactInput.message} onChange={handleChange}  />

                        <input type="submit" value="Send Message" />
                    </form>

                    <div className="flex-two">
                        <div className="flex1">
                            <div className="flex-item1">
                                <img src={location} alt="location"  />
                            </div>
                            
                            <div  className="flex-item2">
                                <p>26, Ladoke Akintola, Bodija.</p>
                            </div>
                            
                        </div>

                        <div className="flex2">
                            <div className="flex-item1">
                                <img src={phone} alt="phone" />
                            </div>
                            
                            <div  className="flex-item2">
                                <p>+234 80 912 56000</p>
                            </div>
                            
                            
                        </div>

                        <div className="flex3">
                            <div className="flex-item1">
                                <img src={message} alt="message" />
                            </div>
                            <div className="flex-item2">
                                <p>info@Abulesowo.ng</p>
                            </div>
                            
                            
                        </div>

                        <div className="flex4">
                            <div className="flex-item1">
                                <img src={whatsapp} alt="whatsapp"  />
                            </div>
                            
                            <div  className="flex-item2">
                                <p>Chat with us on whatsapp</p>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
    
    
}
const contactHero = {
    backgroundColor: "#dc3545",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    fontSize: "20px"
}

export default Contact
