import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../layout/Header";
import Property from "./Property";
import SearchProperties from "./SearchProperties";
import next from "./next.png";
import prev from "./prev.png";
// import data from "./pics/db";

import { Link } from "react-router-dom";

function Properties() {
  const [property, setProperty] = useState([]);

  const action = "06";

  useEffect(() => {
    if (action) {
      const data = {
        action: "06",
        apptoken: "ZC20AD91QR",
      };

      axios
        .get("http://api.abulesowo.ng", {
          params: data,
        })
        .then((res) => {
          setProperty(res.data);
          // console.log(res.data);
        });
    }
  });

  // console.log(data);

  return (
    <div className="property-container">
      <Header />
      <div className="mainContainer search-form">
        <SearchProperties />
        <br />
        <div className="view-container">
          <div className="left">
            <p className="redText boldText">Houses for sale</p>
          </div>

          <div className="right">
            <a href="#" className="redText">
              View all houses for sale <img src={next} />
            </a>
          </div>
        </div>
      </div>
      <section className="mainContainer property-style">
        {property.map((item) => (
          <Property item={item} />
        ))}
      </section>
      <div className="row rent">
        <div className="cols">
          <a href="/property">
            <img src={prev} alt="prev" />
          </a>

          <a href="/property">
            <img src={next} alt="next" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Properties;
