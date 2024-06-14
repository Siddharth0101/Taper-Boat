import React, { useState, useEffect } from "react";
import { Button, Badge, Alert } from "react-bootstrap"; // Import Alert from react-bootstrap
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { CartSliceActions } from "../../store/CartSlice";

const CardAlmond = () => {
  const datas = useSelector((state) => state.Data.items);
  const cartData = useSelector((state) => state.CartData.items);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {datas.map((item, index) => (
        <ItemCard key={index} item={item} cartData={cartData} />
      ))}
    </div>
  );
};

const ItemCard = ({ item, cartData }) => {
  const [number, setNumber] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
  const dispatch = useDispatch();

  useEffect(() => {
    const existingItem = cartData?.find((cartItem) => cartItem.Id === item.Id);
    if (!existingItem) {
      setNumber(0);
    } else {
      setNumber(existingItem.Amount);
    }
  }, [cartData, item.Id]);

  const increment = () => {
    setNumber((prev) => prev + 1);
  };

  const decrement = () => {
    if (number > 0) {
      setNumber((prev) => prev - 1);
    }
  };

  const buyHandler = () => {
    if (number <= 0) return;

    const newItem = {
      ...item,
      Amount: number,
    };

    dispatch(CartSliceActions.ADD(newItem));

    setNumber(0);

    setShowAlert(true); // Show the alert
  };

  return (
    <div>
      {" "}
      <Card
        style={{
          width: "18rem",
          marginBottom: "20px",
          backgroundColor: "#343a40",
          color: "white",
          border: "1px solid #dee2e6",
          borderRadius: "10px",
          transition: "transform 0.2s ease-in-out",
          transform: hovered ? "scale(1.02)" : "scale(1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Card.Img
          variant="top"
          src={item.image}
          style={{
            borderRadius: "10px 10px 0 0",
            height: "250px",
            objectFit: "cover",
          }}
        />
        <Card.Body style={{ padding: "1.5rem" }}>
          <Card.Title
            style={{
              fontSize: "1.5rem",
              marginBottom: "10px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {item.Name}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "1.2rem",
              marginBottom: "10px",
              color: "#ced4da",
            }}
          >
            Price: ₹{item.Price}
          </Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Button
              variant="light"
              onClick={decrement}
              style={{
                fontSize: "1rem",
                backgroundColor: "#6c757d",
                borderColor: "#6c757d",
                color: "white",
              }}
            >
              -
            </Button>
            <Badge
              pill
              bg="light"
              text="dark"
              style={{
                fontSize: "1rem",
                backgroundColor: "#f8f9fa",
                color: "#343a40",
                padding: "8px",
                minWidth: "40px",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
              }}
            >
              {number}
            </Badge>
            <Button
              variant="light"
              onClick={increment}
              style={{
                fontSize: "1rem",
                backgroundColor: "#6c757d",
                borderColor: "#6c757d",
                color: "white",
              }}
            >
              +
            </Button>
          </div>
          <Button
            variant="primary"
            style={{
              fontSize: "1rem",
              backgroundColor: "#007bff",
              borderColor: "#007bff",
              width: "100%",
              transition: "background-color 0.3s ease",
            }}
            onClick={buyHandler}
          >
            Buy Now
          </Button>

          {/* Alert Component */}
        </Card.Body>
      </Card>
      <Alert
        show={showAlert}
        variant="success"
        onClose={() => setShowAlert(false)}
        dismissible
        style={{ marginTop: "10px" }}
      >
        {`${item.Name} added to cart!`}
      </Alert>
    </div>
  );
};

export default CardAlmond;
