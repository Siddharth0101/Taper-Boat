import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { CartSliceActions } from "../../store/CartSlice";

const CartEditModal = ({ show, handleClose, item }) => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (item) {
      setAmount(item.Amount);
    }
  }, [item]);

  const incrementAmount = () => {
    setAmount(amount + 1);
  };

  const decrementAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const saveChangesHandler = () => {
    dispatch(CartSliceActions.EDIT({ id: item.Id, Amount: amount }));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header
        closeButton
        style={{
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #dee2e6",
        }}
      >
        <Modal.Title style={{ color: "#007bff" }}>Edit Cart Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-3">
          <strong style={{ fontSize: "1.2rem" }}>Change Amount:</strong>
        </div>
        <InputGroup className="mb-3">
          <Button variant="outline-secondary" onClick={decrementAmount}>
            -
          </Button>
          <FormControl
            className="text-center"
            value={amount}
            readOnly
            style={{ minWidth: "3rem", fontSize: "1.2rem", fontWeight: "bold" }}
          />
          <Button variant="outline-secondary" onClick={incrementAmount}>
            +
          </Button>
        </InputGroup>
      </Modal.Body>
      <Modal.Footer
        style={{
          borderTop: "1px solid #dee2e6",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="secondary"
          onClick={handleClose}
          style={{ width: "8rem" }}
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={saveChangesHandler}
          style={{ width: "8rem" }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartEditModal;
