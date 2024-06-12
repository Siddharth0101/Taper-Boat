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
      <Modal.Header closeButton>
        <Modal.Title>Edit Cart Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-3">
          <strong>Change Amount:</strong>
        </div>
        <InputGroup className="mb-3">
          <Button variant="outline-secondary" onClick={decrementAmount}>
            -
          </Button>
          <FormControl className="text-center" value={amount} readOnly />
          <Button variant="outline-secondary" onClick={incrementAmount}>
            +
          </Button>
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={saveChangesHandler}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartEditModal;
