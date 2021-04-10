import React, { useState } from "react";
import search from "./search.png";

const SearchLands = () => {
  const [location, setLocation] = useState("");
  const [property, setProperty] = useState("");
  const [price, setPrice] = useState("");

  return (
    <form className="search-component">
      <input
        type="text"
        name="location"
        value={location}
        placeholder="Enter a Location"
      />

      <input
        type="text"
        name="property"
        value={property}
        placeholder="Property type"
      />

      <input
        type="text"
        name="price"
        value={price}
        placeholder="Enter max price"
      />

      <button>
        Search
        <img src={search} />
      </button>
    </form>
  );
};

export default SearchLands;
