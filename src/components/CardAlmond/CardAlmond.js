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
        <Card
          bg="dark"
          text="white"
          style={{ width: "18rem", marginBottom: "20px" }}
          key={index}
        >
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.Name}</Card.Title>
            <Card.Text>Price: ${item.Price}</Card.Text>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Button variant="secondary">-</Button>
              <Badge pill bg="light" text="dark" style={{ fontSize: "1rem" }}>
                hii
              </Badge>
              <Button variant="secondary">+</Button>
            </div>
            <Button variant="primary" style={{ marginRight: "10px" }}>
              Buy Now
            </Button>
            <Button variant="danger">Remove</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardAlmond;
