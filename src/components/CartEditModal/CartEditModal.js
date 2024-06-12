import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CartEditModal = ({ show, handleClose, item }) => {
  console.log(item);
  const changesHandler = () => {};

  // Check if item exists before accessing its properties
  const itemAmount = item ? item.Amount : 0;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Cart Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <strong>Change Amount: {itemAmount}</strong>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={changesHandler}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartEditModal;
