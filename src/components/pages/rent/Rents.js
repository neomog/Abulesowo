import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../layout/Header";
import Property from "./Rent";
// import SearchProperties from "./SearchRent";
import search from "./search.png";
import next from "./next.png";
import prev from "./prev.png";
import { Link } from "react-router-dom";
// import data from "./pics/db";

import Spinner from "../../layout/Spinner";

import { useAlert } from "react-alert";

function Rents() {
  const [loading, setLoading] = useState(false);
  const [rent, setRent] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  // const [searchProperty, setSearchProperty] = useState("");

  const alert = useAlert();

  const action = "06";

  useEffect(() => {
    setLoading(!loading);
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
          setRent(res.data);
          setLoading(false);
          // console.log(res.data);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchaction = "10";

  const handleSearch = (e) => {
    e.preventDefault();
    if (rent.length > 0) {
      const data = {
        action: searchaction,
        apptoken: "ZC20AD91QR",
        keyword: searchLocation,
      };
      // console.log(data);

      axios
        .get("http://api.abulesowo.ng", {
          params: data,
        })
        .then((res) => {
          // setRent(res.data);
          setSearchLocation("");
          alert.success(res.data.message);

          // console.log(res.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert.show("please check back later");
    }
  };

  return (
    <div className="property-container">
      <Header />
      <div className="mainContainer search-form">
        <form className="search-component">
          <input
            type="text"
            name="location"
            value={searchLocation}
            placeholder="Enter a Location"
            onChange={(e) => setSearchLocation(e.target.value)}
          />

          {/* <input
            type="text"
            name="property"
            value={searchProperty}
            placeholder="Property type"
            onChange={(e) => setSearchProperty(e.target.value)}
          /> */}

          <button onClick={handleSearch}>
            Search
            <img src={search} alt="" />
          </button>
        </form>
        <div className="view-container">
          <div className="left">
            <p className="redText boldText">Houses for rent</p>
          </div>

          <div className="right">
            <Link href="#" className="redText">
              View all houses for rent <img src={next} alt="" />
            </Link>
          </div>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <section className="mainContainer property-style">
          {rent.map((item) => (
            <Property item={item} />
          ))}
        </section>
      )}

      <div className="row rent">
        <div className="cols">
          <Link href="/property">
            <img src={prev} alt="prev" />
          </Link>

          <Link href="/property">
            <img src={next} alt="next" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Rents;
