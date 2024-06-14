import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { CartSliceActions } from "../../store/CartSlice";

const SearchOffcanvas = ({ showSearch, handleCloseSearch }) => {
  const dispatch = useDispatch();
  const filterDisplay = useSelector((state) => state.SearchData.items);
  const [counts, setCounts] = useState(Array(filterDisplay.length).fill(0));
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

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
    dispatch(CartSliceActions.ADD(itemWithCount));
    setAlertMessage(`${item.Name} added to cart`);
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
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
            style={{ marginBottom: "20px" }}
            className="shadow"
          >
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>Price: ₹{item.Price}</Card.Text>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Button
                  variant="outline-light"
                  onClick={() => decrement(index)}
                >
                  -
                </Button>
                <Badge pill bg="light" text="dark" className="fs-5">
                  {counts[index]}
                </Badge>
                <Button
                  variant="outline-light"
                  onClick={() => increment(index)}
                >
                  +
                </Button>
              </div>
              <Button
                variant="primary"
                onClick={() => addToCartHandler(item, counts[index])}
                className="w-100"
              >
                ADD TO CART
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Offcanvas.Body>
      <Alert
        show={showAlert}
        variant="success"
        onClose={handleAlertClose}
        dismissible
      >
        {alertMessage}
      </Alert>
    </Offcanvas>
  );
};

export default SearchOffcanvas;
