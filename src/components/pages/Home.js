import React, { Component } from 'react';
import Header from "../layout/Header";
import Section1 from "../homeSections/Section1";
import Section2 from "../homeSections/Section2";
import Section3 from "../homeSections/Section3";
import Section4 from "../homeSections/Section4";
import Section5 from "../homeSections/Section5";
import Section6 from "../homeSections/Section6";
import RequestForm from "./requestform/RequestForm";
import Footer from "../layout/Footer";

class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Footer />
                
 
            </div>
        )
    }
}

export default Home

