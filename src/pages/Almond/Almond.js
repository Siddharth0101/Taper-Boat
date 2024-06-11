import React from "react";
import Form from "react-bootstrap/Form";
import CardAlmond from "../../components/CardAlmond/CardAlmond";

const Almond = () => {
  return (
    <div style={{ margin: "20px", color: "white" }}>
      <h2 style={{ textAlign: "center" }}>Almond</h2>
      <Form style={{ marginBottom: "20px" }}>
        <div
          className="mb-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Form.Check
            type="radio"
            id="high-to-low-radio"
            label="High to Low"
            style={{ marginRight: "20px", color: "white" }}
          />
          <Form.Check
            type="radio"
            id="low-to-high-radio"
            label="Low to High"
            style={{ color: "white" }}
          />
        </div>
      </Form>
      <CardAlmond />
    </div>
  );
};

export default Almond;
