import React, { useState } from 'react'
import RequestForm from "../pages/requestform/RequestForm";

import {Link} from "react-router-dom";
import ModalApp from '../pages/requestform/Modal';
const Header = () => {
    const [show, setShow] = useState(false); 

    const openModal = () => {
        setShow(true)
    }
    const close = () => {
        setShow(false)
        console.log('hey')
  }
        return (
            <header>
                <div className="header">
                    <div>
                        <span><strong>Abulesowo</strong></span>
                    </div>

                    <nav className={mainNav}>
                        <Link to="/"><a className="active">Home</a></Link>
                        <a href="#">About</a>
                        <Link  onClick={openModal}>Request</Link>
                        <a href="#">Our Blog</a>
                        <Link to="/contact">Contact Us</Link>
                    </nav>
                </div>

                <ModalApp show={show} close={close} />
            </header>
        )
    }



const mainNav = {
    textDecoration: "none"
}

export default Header
