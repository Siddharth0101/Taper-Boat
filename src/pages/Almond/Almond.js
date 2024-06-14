import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import CardAlmond from "../../components/CardAlmond/CardAlmond";
import { DataSliceActions } from "../../store/DataSlice";

const Almond = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    const { id } = event.target;
    setSelectedOption(id);
    if (id === "high-to-low-radio") {
      dispatch(DataSliceActions.HighToLow());
    } else if (id === "low-to-high-radio") {
      dispatch(DataSliceActions.LowToHigh());
    }
  };

  useEffect(() => {
    if (selectedOption === "high-to-low-radio") {
      dispatch(DataSliceActions.HighToLow());
    } else if (selectedOption === "low-to-high-radio") {
      dispatch(DataSliceActions.LowToHigh());
    }
  }, [dispatch, selectedOption]);

  return (
    <div
      style={{
        margin: "20px",
        color: "#495057",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "2rem", color: "#495057" }}>
        Almond
      </h2>
      <Form style={{ marginBottom: "20px", textAlign: "center" }}>
        <div
          className="mb-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Form.Check
            type="radio"
            id="high-to-low-radio"
            label="High to Low"
            name="price-order"
            checked={selectedOption === "high-to-low-radio"}
            onChange={handleRadioChange}
            style={{
              marginRight: "20px",
              color: "#495057",
              fontSize: "1rem",
            }}
          />
          <Form.Check
            type="radio"
            id="low-to-high-radio"
            label="Low to High"
            name="price-order"
            checked={selectedOption === "low-to-high-radio"}
            onChange={handleRadioChange}
            style={{
              color: "#495057",
              fontSize: "1rem",
            }}
          />
        </div>
      </Form>
      <CardAlmond />
    </div>
  );
};

export default Almond;
