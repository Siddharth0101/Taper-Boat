import React, { useState } from "react";
import { Button, Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { CartSliceActions } from "../../store/CartSlice";

const CardAlmond = () => {
  const datas = useSelector((state) => state.Data.items);
  const [cartData, setCartData] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {datas.map((item, index) => (
        <ItemCard
          key={index}
          item={item}
          setCartData={setCartData}
          cartData={cartData}
        />
      ))}
    </div>
  );
};

const ItemCard = ({ item, setCartData, cartData }) => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch(); // Correct use of useDispatch

  const increment = () => {
    setNumber((prev) => prev + 1);
  };

  const decrement = () => {
    if (number > 0) {
      setNumber((prev) => prev - 1);
    }
  };

  const buyHandler = () => {
    const data = {
      ...item,
      Amount: number,
    };
    const updatedCartData = [...cartData, data];
    setCartData(updatedCartData);
    dispatch(CartSliceActions.DISPLAY(updatedCartData));
  };

  return (
    <Card
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
          <Button variant="secondary" onClick={decrement}>
            -
          </Button>
          <Badge pill bg="light" text="dark" style={{ fontSize: "1rem" }}>
            {number}
          </Badge>
          <Button variant="secondary" onClick={increment}>
            +
          </Button>
        </div>
        <Button
          variant="primary"
          style={{ marginRight: "10px" }}
          onClick={buyHandler}
        >
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
  setCartData: PropTypes.func.isRequired,
  cartData: PropTypes.array.isRequired,
};

export default CardAlmond;
