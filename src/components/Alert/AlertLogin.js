import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertLogin = () => {
  const alertStyle = {
    backgroundColor: "#f8d7da",
    color: "#721c24",
    fontWeight: "bold",
    maxWidth: "500px",
    margin: "auto",
    marginTop: "20px", // Adding some top margin for spacing
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", // Adding a subtle box shadow
    border: "1px solid #f5c6cb", // Lighter border color
    borderRadius: "5px", // Rounded corners
    padding: "15px", // Padding inside the alert
  };

  return (
    <div style={alertStyle}>
      <Alert variant="danger" dismissible style={{ border: "none" }}>
        <Alert.Heading style={{ marginBottom: "10px" }}>
          You got an error!
        </Alert.Heading>
        <p style={{ marginBottom: "0" }}>Login or Register before proceeding</p>
      </Alert>
    </div>
  );
};

export default AlertLogin;
