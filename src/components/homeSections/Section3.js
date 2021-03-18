import React from 'react';
import one from "./section3/one.png";
import two from "./section3/two.png";
import three from "./section3/three.png";
import four from "./section3/four.png";
import {Link} from "react-router-dom";

function Section3() {
    return (
        <div className="section3">
            <section className="thirdSection">
                <div>
                    <p className="boldText">Here is a little about what we do</p>
                </div>

                <div className="section3-column">
                    <div>
                        <img src={one} alt="one" />
                        <p className="boldText">Buy a home</p>
                        <p>with over 1 million houses for sale, all available on Abulesowo website</p>
                        <Link to="/properties"><button>Search Homes</button></Link>
                    </div>

                    <div>
                        <img src={two} alt="two" />
                        <p className="boldText">Consulting service</p>
                        <p>with over 1 million houses for sale, including houses you won’t find anywhere else</p>
                        <Link to="/consult-us"><button>Talk to us</button></Link>
                        
                    </div>

                    <div>
                        <img src={three} alt="three" />
                        <p className="boldText">Buy a land</p>
                        <p>with over 1 million houses for sale, including houses you won’t find anywhere else</p>
                        <Link to="/lands" ><button>Search lands</button></Link>
                    </div>

                    <div>
                        <img src={four} alt="four" />
                        <p className="boldText">Rent a home</p>
                        <p>Abulesowo can help you easily find a home apartment for rent that you’ii love</p>
                        <Link to="/rents" ><button>Find rentals</button></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section3
