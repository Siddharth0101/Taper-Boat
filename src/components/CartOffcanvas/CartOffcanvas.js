import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import CartEditModal from "../CartEditModal/CartEditModal";
import { CartSliceActions } from "../../store/CartSlice";

const CartOffcanvas = ({ show, handleClose }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const handleEditModalClose = () => setShowEditModal(false);
  const handleEditModalShow = () => setShowEditModal(true);
  const cartData = useSelector((state) => state.CartData.items);
  const cartTotal = useSelector((state) => state.CartData.totalAmount);
  const dispatch = useDispatch();

  const editHandler = (item) => {
    setSelectedItem(item);
    handleEditModalShow();
  };

  const removeHandler = (id) => {
    dispatch(CartSliceActions.Remove(id));
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{ fontWeight: "bold", color: "#343a40" }}>
          Shopping Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body style={{ padding: "1.5rem" }}>
        {cartData.length === 0 ? (
          <p
            style={{ textAlign: "center", fontStyle: "italic", color: "#888" }}
          >
            Your cart is empty
          </p>
        ) : (
          cartData.map((item, index) => (
            <Card
              key={index}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "1rem",
              }}
            >
              <Card.Body>
                <Row>
                  <Col
                    xs={4}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                  <Col xs={8}>
                    <Card.Title style={{ fontSize: "1.2rem" }}>
                      {item.title}
                    </Card.Title>
                    <Card.Text>
                      <div style={{ marginBottom: "0.5rem" }}>
                        <strong>Price:</strong> ${item.Price}
                      </div>
                      <div>
                        <strong>Amount:</strong> {item.Amount}
                      </div>
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "1rem",
                      }}
                    >
                      <Button
                        variant="warning"
                        onClick={() => editHandler(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => removeHandler(item.Id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))
        )}
        <div
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginTop: "1rem",
            textAlign: "right",
          }}
        >
          <strong>Total:</strong> ${cartTotal}
        </div>
        <Button
          variant="success"
          style={{ fontWeight: "bold", width: "100%", marginTop: "1rem" }}
        >
          Check Out
        </Button>
      </Offcanvas.Body>
      <CartEditModal
        show={showEditModal}
        handleClose={handleEditModalClose}
        item={selectedItem}
      />
    </Offcanvas>
  );
};

export default CartOffcanvas;
