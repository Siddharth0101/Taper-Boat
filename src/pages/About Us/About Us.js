import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import car01 from "../../asset/Images/Caro-1.png";
import car02 from "../../asset/Images/Caro-2.png";

const AboutUs = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", margin: "0", padding: "0" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={car01}
            alt="First slide"
            style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
          />
          <Carousel.Caption
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "10px",
              padding: "10px 20px",
              color: "white",
              textAlign: "center",
            }}
          ></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={car02}
            alt="Second slide"
            style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
          />
          <Carousel.Caption
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "10px",
              padding: "10px 20px",
              color: "white",
              textAlign: "center",
            }}
          ></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AboutUs;
