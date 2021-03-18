import React from 'react'
import one from "./section1/one.png";
import two from "./section1/two.png";
import three from "./section1/three.png";
import four from "./section1/four.png";
import dots from "./section1/dots.png";
import search from "./section1/search.png";

function Section1() {
    return (
        <div className="section1 bg-danger">
            <section className="row container">
                <div className="col column padding">
                    <h4>Let's find a home that's perfect for you</h4>
                    <p>Search properties for rent or sale in Oyo state</p>
                    <span>
                        <input placeholder="Enter an Address, neighbourhood,city, Zip code" />
                        <i style={{position: "absolute", padding: "10px", backgroundColor: "#fff", width: '50px', marginTop: "3px", marginLeft: "-55px"}}>
                        <img src={search} alt="search"  />
                        </i>
                    </span>
                    
                </div>

                <div className="col padding2 section1imggrid">
                    <img src={one} alt="one" className="item1" />
                    <img src={dots} alt="dots" className="dots" />
                    <img src={two} alt="two" className="item2" />
                    <img src={three} alt="three" className="item3" />
                    <img src={four} alt="four" className="item4" />
                </div>
            </section>
        </div>
    )
}

export default Section1
