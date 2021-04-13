import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../layout/Header";
import Land from "./Land";
// import SearchLands from "./SearchLands";
import search from "./search.png";
import next from "./next.png";
import prev from "./prev.png";
// import data from "./pics/db.json";
import { Link } from "react-router-dom";
// import data from "./pics/db";

import Spinner from "../../layout/Spinner";

import { useAlert } from "react-alert";

const Lands = () => {
  const [loading, setLoading] = useState(false);
  const [land, setLand] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
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
          // if (res.data.m)
          setLand(res.data);
          setLoading(false);
          // console.log(res.data);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchaction = "10";

  const handleSearch = (e) => {
    e.preventDefault();
    if (land.length > 0) {
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
          // setLand(res.data);
          setSearchLocation("");
          alert.success(res.data.message);

          console.log(res.data.message);
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
            <p className="redText boldText">Lands for sale</p>
          </div>

          <div className="right">
            <Link to="/lands" className="redText">
              View all lands for sale <img src={next} alt=" " />
            </Link>
          </div>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <section className="mainContainer property-style">
          {land.map((item) => (
            <Land item={item} />
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
};

// const data = [
//   {
//     "userId": 1,
//     "id": 1,
//     "image": require("./land1.png"),
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//     "link": "More details"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "image": require("./land2.png"),
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//     "link": "More details"
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "image": require("./land3.png"),
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//     "link": "More details"
//   },
//   {
//     "userId": 1,
//     "id": 4,
//     "image": require("./land4.png"),
//     "title": "eum et est occaecati",
//     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//   },
//   {
//     "userId": 1,
//     "id": 5,
//     "image": require("./land5.png"),
//     "title": "nesciunt quas odio",
//     "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
//   },
//   {
//     "userId": 1,
//     "id": 6,
//     "image": require("./land6.png"),
//     "title": "dolorem eum magni eos aperiam quia",
//     "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
//   }
// ]

// export default data;
export default Lands;
