import React from "react";
import homeImage from "../../asset/Images/Creatives_2000x750_9dd6fd6d-35a1-4736-b88d-ea34f385041e_2100x.webp";
import Image from "react-bootstrap/Image";

const Home = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "93vh",
    background:
      "linear-gradient(to bottom, rgba(255, 126, 95, 0.8), rgba(254, 180, 123, 0.8)), url('../../asset/Images/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
    margin: "0",
    position: "relative",
    zIndex: -1, // Ensure the Home component is behind the Header
    opacity: 0.9, // Adjust opacity as needed
  };

  const imageStyle = {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    borderRadius: "15px",
    animation: "fadeIn 2s ease-in-out",
    maxWidth: "90%",
    height: "auto",
  };

  const fadeInAnimation = `
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{fadeInAnimation}</style>
      <Image src={homeImage} fluid style={imageStyle} />
    </div>
  );
};

export default Home;
