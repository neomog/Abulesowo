import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../layout/Header";
import Property from "./Property";
// import SearchProperties from "./SearchProperties";
import search from "./search.png";
import next from "./next.png";
import prev from "./prev.png";
// import data from "./pics/db";
import Spinner from "../../layout/Spinner";
import Section5 from "../../homeSections/Section5";
import Section6 from "../../homeSections/Section6";
import Footer from "../../layout/Footer";

import { Link } from "react-router-dom";

import { useAlert } from "react-alert";

const Properties = () => {
  const [property, setProperty] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  // const [searchProperty, setSearchProperty] = useState("");
  const [loading, setLoading] = useState(false);

  const alert = useAlert();

  const action = "06";
  const [msg, setmsg] = useState("");
  const [count, setcount] = useState(0);

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
          console.log(res.data);
          if (res.data.response === "00") {
            setmsg(res.data.message);
            setmsg("no data found");
            setLoading(false);
          } else {
            setProperty(res.data);
            setLoading(false);
            setmsg("No item found");
            setSearchLocation("");
          }
        })
        .catch((error) => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  // const searchaction = "10";

  const handleSearch = (e) => {
    e.preventDefault();

    const data = {
      action: "10",
      apptoken: "ZC20AD91QR",
      keyword: searchLocation,
    };
    // console.log(data);
    axios
      .get("http://api.abulesowo.ng", {
        params: data,
      })
      .then((res) => {
        // setProperty(res.data);
        setSearchLocation("");

        alert.success(res.data.message);
      })
      .catch((error) => {
        setLoading(false);
        setSearchLocation("");
        console.log(error);
      });
  };

  return (
    <>
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
              {/* <img src={search} alt="" /> */}
            </button>
          </form>
          <br />
          <div className="view-container">
            <div className="left">
              <p className="redText boldText">Houses for sale</p>
            </div>

            <div className="right">
              <Link to="/houses" className="redText view-all">
                View all houses for sale <img src={next} alt="" />
              </Link>
            </div>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <section className="mainContainer property-style">
            {property.map((item) => (
              <Property item={item} />
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
    </>
  );
};

export default Properties;
