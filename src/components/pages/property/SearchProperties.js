import React, { useState } from "react";
import search from "./search.png";
import axios from "axios";

const SearchProperties = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchProperty, setSearchProperty] = useState("");
  // const onChange = (e) => {
  //   setSearchLocation(e.target.value);
  //   setSearchProperty(e.target.value);
  // };

  const action = "10";

  const handleSearch = (e) => {
    e.preventDefault();
    const data = {
      action: "10",
      apptoken: "ZC20AD91QR",
      keyword: searchLocation,
    };
    console.log(data);
    if (action === "10") {
      axios
        .get("http://api.abulesowo.ng", {
          params: data,
        })
        .then((res) => {
          console.log(res.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("my error");
    }
  };

  return (
    <form className="search-component">
      <input
        type="text"
        name="location"
        value={searchLocation}
        placeholder="Enter a Location"
        onChange={(e) => setSearchLocation(e.target.value)}
      />

      <input
        type="text"
        name="property"
        value={searchProperty}
        placeholder="Property type"
        onChange={(e) => setSearchProperty(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
        <img src={search} alt="" />
      </button>
    </form>
  );
};

export default SearchProperties;
