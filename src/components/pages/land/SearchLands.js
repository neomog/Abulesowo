import React, { useState } from "react";
import search from "./search.png";

const SearchLands = () => {
  const [location, setLocation] = useState("");
  const [property, setProperty] = useState("");

  // const handleChange = (e) => {
  //   const [value] = e.target;
  //   setLocation({ [name]: value });
  //   setProperty({ [name]: value });
  // };

  return (
    <form className="search-component">
      <input
        type="text"
        name="location"
        value={location}
        placeholder="Enter a Location"
        onchange={(e) => {
          setLocation(e.target.value);
        }}
      />

      <input
        type="text"
        name="property"
        value={property}
        placeholder="Property type"
        onchange={(e) => {
          setProperty(e.target.value);
        }}
      />

      <button>
        Search
        <img src={search} alt="" />
      </button>
    </form>
  );
};

export default SearchLands;
