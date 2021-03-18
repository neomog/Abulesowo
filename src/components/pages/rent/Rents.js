
import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import Header from "../../layout/Header";
import Property from "./Rent";
import SearchProperties from "./SearchRent";
import next from "./next.png";
import prev from "./prev.png"
import { Link } from "react-router-dom";
import data from "./pics/db";

function Rents() {
  
  const [rent, setRent] = useState([]);
  
  useEffect(() => {
    setRent(data);
    console.log(data)
  })


    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/posts");


    // })
            
    return (
        <div className="property-container">
            <Header />
            <div className="mainContainer search-form">
                <SearchProperties />
                <div className="view-container">
                  <div className="left">
                    <p className="redText boldText">Properties for sale</p>
                  </div>

                  <div className="right">
                    <a href="#" className="redText">View all Properties for sale <img src={next}/></a>
                  </div>
                  
                </div>
            </div>
            <section  
            className="mainContainer property-style">
                {rent.map(item => (
                   <Property item={item}/>
                ))}
            </section>

            <div className="row rent">
              <div className="cols">
                <a href="/property"><img src={prev} alt="prev" /></a>

                <a href="/property"><img src={next} alt="next" /></a>
              </div>
                      
                    
            </div>
        </div>
    )
}

export default Rents
