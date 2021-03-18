import React, { useState } from "react";
import Header from "../../layout/Header";
import one from "./one.png";
import two from "./two.png";
import three from "./three.png";
import four from "./four.png";
import five from "./five.png";
import { Link } from "react-router-dom";
import ModalApp from '../requestform/Modal';

    

const Details = () => {
    const [show, setShow] = useState(false); 

    const openModal = () => {
        setShow(true)
    }
    const close = () => {
        setShow(false)
        console.log('hey')
    }
    
    return (
        <div>
            <div>
                <Header />
            <div className="mainContainer">
                <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "3rem", paddingTop: "20px"}}>
                    <div>
                        <img src={one} alt="one" />
                    </div>

                    <div>
                        <p className="redText">Property Information</p>
                        <p><span className="boldText">Name:</span>  4 bedroom flat</p>
                        <p><span className="boldText">Type:</span>  Rent</p>
                        <p><span className="boldText">Price:</span>  #1,500,000.00</p>
                        <p><span className="boldText">Location:</span> Odusanya Street, Bodija, Oyo State.</p>
                        <p><span className="boldText">Amenities:</span> Terrace | Rooms Ensuite | Parking Space | Balcony | Tiles | Gated Environment | Security Personnel At Gate | Fence | Security Lights |</p>
                        
                    </div>
                </div>

                <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "3rem", paddingTop: "20px"}}>
                    <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "1rem"}}>
                        <img src={two} alt="two" />
                        <img src={three} alt="three" />
                        <img src={four} alt="four" />
                        <img src={five} alt="five" />
                    </div>

                    <div>
                        <Link onClick={openModal}><button className="details-btn1">Visit location</button></Link>
                        <Link><button className="details-btn2">Request via email</button></Link>
                        <p className="boldText">About this Apartment</p>
                        <p>Readily available and comfortable to accommodate you. Located in an easily accessible area within the beautiful metropolis of Ibadan.</p>
                        <p className="boldText">More Details</p>

                        <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <div>
                                <p>Property Type: House</p>
                                <p>Bedroom: 4 bedrooms</p>
                                <p>Bathroom: 3 bathrooms</p>
                                <p>Toilets: 2 toilets</p>
                            </div>

                            <div>
                                <p>Year built :2016</p>
                                <p>market status: Available</p>
                                <p>Date Added: Feb 2021</p>
                                <p>last updated: 4 hours ago</p>
                            </div>
                        </div>
                        
                        
                        
                        
                        
                    </div>
                </div>
            </div>
            </div>

            <ModalApp show={show} close={close} />
        </div>
    )
}

export default Details