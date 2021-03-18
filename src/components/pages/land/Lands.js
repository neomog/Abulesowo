
import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import Header from "../../layout/Header";
import Land from "./Land";
import SearchLands from "./SearchLands";
import next from "./next.png";
import prev from "./prev.png";
// import data from "./pics/db.json";
import { Link } from "react-router-dom";
import data from "./pics/db";


const Lands = () => {

  const [land, setLand] = useState([]);
    

  useEffect(() => {
      
    setLand(data);
    console.log(data)

    })
            
    return (
        <div className="property-container">
            <Header />
            <div className="mainContainer search-form">
                <SearchLands />
                <div className="view-container">
                  <div className="left">
                    <p className="redText boldText">Properties for sale</p>
                  </div>

                  <div className="right">
                    <a href="#" className="redText">View all Properties for sale <img src={next}/></a>
                  </div>
                  
                </div>
            </div>
            <section  
            className="mainContainer property-style">
                {land.map(item => (
                   <Land item={item}/>
                ))}
        </section>
        
        <div className="row rent">
              <div className="cols">
                <a href="/property"><img src={prev} alt="prev" /></a>

                <a href="/property"><img src={next} alt="next" /></a>
              </div>
                      
                    
            </div>
        </div>
    )
}


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
export default Lands