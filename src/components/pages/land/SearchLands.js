import React from "react";
import search from "./search.png";

const SearchLands = () => {
    return (
        <form  className="search-component">
            <input type="text" name="location" placeholder="Enter a Location" />

            <input type="text" name="property" placeholder="Property type" />

            <input type="text" name="price" placeholder="Enter max price" />
            
            <button>Search<img src={search}/></button>
        </form>

    )
}

export default SearchLands