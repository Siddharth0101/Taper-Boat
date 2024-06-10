import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Auth = (props) => {
  const [login, setLogin] = useState(true);
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div style={{ textAlign: "center", width: "100%" }}>
            <Modal.Title id="contained-modal-title-vcenter">
              {login ? "Login" : "Register"}
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Auth;
