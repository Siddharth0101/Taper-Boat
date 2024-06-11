import { useState } from "react";
import { Button, Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const CardAlmond = () => {
  const datas = useSelector((state) => state.Data.items);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {datas.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
};

const ItemCard = ({ item }) => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((prev) => prev + 1);
  };

  const decrement = () => {
    setNumber((prev) => prev - 1);
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
        <Button variant="primary" style={{ marginRight: "10px" }}>
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardAlmond;
