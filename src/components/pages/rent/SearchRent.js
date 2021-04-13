import React, { useState } from "react";
import search from "./search.png";

const SearchProperties = () => {
  const [location, setLocation] = useState("");
  const [property, setProperty] = useState("");
  return (
    <form className="search-component">
      <input
        type="text"
        name="location"
        value={location}
        placeholder="Enter a Location"
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        type="text"
        name="property"
        value={property}
        placeholder="Property type"
        onChange={(e) => setProperty(e.target.value)}
      />

      <button>
        Search
        <img src={search} alt="" />
      </button>
    </form>
  );
};

export default SearchProperties;
