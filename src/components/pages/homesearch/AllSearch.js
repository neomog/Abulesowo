import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../layout/Header";
import SearchItem from "./SearchItem";
// import SearchLands from "./SearchLands";
import search from "./search.png";
import next from "./next.png";
import prev from "./prev.png";
// import data from "./pics/db.json";
import { Link } from "react-router-dom";
// import data from "./pics/db";

import Spinner from "../../layout/Spinner";

import { useAlert } from "react-alert";

import Section5 from "../../homeSections/Section5";
import Section6 from "../../homeSections/Section6";
import Footer from "../../layout/Footer";

const AllSearch = () => {
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const alert = useAlert();
  const action = "06";
  const [msg, setmsg] = useState("");
  const [count, setCount] = useState(0);

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
          // if (res.data.m)
          if (res.data.response === "00") {
            setmsg(res.data.message);
            setmsg("No item found");
            setLoading(false);
          } else {
            setProperty(res.data);
            setSearchLocation("");
          }
          setProperty(res.data);
          setLoading(false);
          // console.log(res.data);
        })
        .catch((error) => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      // setmsg("Network error please refresh");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const searchaction = "10";

  const handleSearch = (e) => {
    e.preventDefault();
    if (property.length > 0) {
      const data = {
        action: searchaction,
        apptoken: "ZC20AD91QR",
        keyword: searchLocation,
      };
      console.log(data);

      axios
        .get("http://api.abulesowo.ng", {
          params: data,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.response === "00") {
            setmsg("No item found");
            setProperty([]);
            setLoading(false);
          } else {
            setProperty(res.data);
            setSearchLocation("");
            setLoading(false);
            setmsg("");
          }
        })
        .catch((error) => {
          alert.show(error);
        });
    } else {
      setSearchLocation("");
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
            <p className="redText boldText">Properties for sale</p>
          </div>

          <div className="right">
            <Link to="/lands" className="redText">
              View all properties for sale <img src={next} alt=" " />
            </Link>
          </div>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <section className="mainContainer property-style">
          {property.map((item) => (
            <SearchItem item={item} />
          ))}
        </section>
      )}
      <div style={{ textAlign: "center", fontSize: "20px" }}>{msg}</div>

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
      <div style={{ border: "1px solid #dc3545", marginTop: "30px" }}>
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    </div>
  );
};

export default AllSearch;
