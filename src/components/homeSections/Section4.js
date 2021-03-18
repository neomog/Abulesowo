import React from 'react';
import one from "./section4/one.png";

function Section4() {
    return (
        <div  className="section4 mainContainer">
            <section className="row">
                <div className="column">
                    <img src={one} alt="one" />
                </div>

                <div className="column">
                    <p>How <span className="redText boldText">Abulesowo</span> works</p>
                    <p>Abulesowo helps you easily find a home or apartment for rent, Sell and buy Land</p>

                    <ol>
                        <li className="bullet"><span className="bullet-style">01</span>
                        <div>
                            <p className="boldText">Find a Home/Apartment you want</p>
                        <p>Abulesowo helps you easily find a home or apartmen you love</p>
                        </div>
                        </li>

                        
                        <li className="bullet"><span className="bullet-style">02</span>
                        <div>
                            <p className="boldText">Request to visit Location</p>
                        <p>Abulesowo helps you easily find a home or apartmen you love</p>
                        </div>
                        
                        </li>

                        <li className="bullet"><span className="bullet-style">03</span>
                        <div>
                            <p className="boldText">Pay</p>
                            <p>After being satisfied with the Properties you wish to Purchase then You get your official document after payment.</p>
                        </div>
                        
                        </li>
                    </ol>
                </div>
            </section>
        </div>
    )
}

export default Section4
