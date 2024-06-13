import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

const SearchOffcanvas = ({ showSearch, handleCloseSearch }) => {
  const filterDisplay = useSelector((state) => state.SearchData.items);
  const [counts, setCounts] = useState(Array(filterDisplay.length).fill(0));

  const decrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] = Math.max(0, counts[index] - 1);
    setCounts(newCounts);
  };

  const increment = (index) => {
    const newCounts = [...counts];
    newCounts[index] = counts[index] + 1;
    setCounts(newCounts);
  };

  const addToCartHandler = (item, count) => {
    const itemWithCount = {
      ...item,
      Amount: count,
    };
    // Example action: Logging item details and count
    console.log("Adding to cart:", itemWithCount);
    // You can perform other actions here, such as dispatching to Redux store, etc.
  };

  return (
    <Offcanvas show={showSearch} onHide={handleCloseSearch}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search Results</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {filterDisplay.map((item, index) => (
          <Card
            key={item.Id}
            bg="dark"
            text="white"
            style={{ width: "18rem", marginBottom: "20px" }}
          >
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>Price: ₹{item.Price}</Card.Text>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <Button variant="secondary" onClick={() => decrement(index)}>
                  -
                </Button>
                <Badge pill bg="light" text="dark" style={{ fontSize: "1rem" }}>
                  {counts[index]}
                </Badge>
                <Button variant="secondary" onClick={() => increment(index)}>
                  +
                </Button>
              </div>
              <Button
                variant="primary"
                style={{ marginRight: "10px" }}
                onClick={() => addToCartHandler(item, counts[index])}
              >
                ADD TO CART
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SearchOffcanvas;
