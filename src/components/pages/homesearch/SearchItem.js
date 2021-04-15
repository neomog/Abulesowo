import React from "react";
import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <>
      {item.propstype ? (
        <div>
          <Card style={{ width: "18rem" }} className="property-item">
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "21.11px",
                }}
              >
                {item.propsname}
              </Card.Title>
              <Card.Text
                className="redText"
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "18.77px",
                }}
              >
                {item.propsprice}
              </Card.Text>
              <Card.Text
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "18.77px",
                }}
              >
                {item.propslocation}
              </Card.Text>
            </Card.Body>
            <br />
            <br /> <br />
            <br />
            <Card.Body>
              <Card.Link
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "18.77px",
                  color: "#dc354",
                }}
              >
                <Link to="/land-details" className="cardLink">
                  More details
                </Link>
              </Card.Link>
              {/* <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchItem;
