import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

const AuthReg = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLKz4YyiCc2HS-nLD1Czl8a4iO8wXs92M",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );
    } catch (error) {
      console.log(error);
    }
    props.onHide();
  };

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
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Register
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body style={{ padding: "20px" }}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
                style={{ fontSize: "16px", padding: "10px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
                style={{ fontSize: "16px", padding: "10px" }}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", fontSize: "18px", padding: "10px" }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AuthReg;
