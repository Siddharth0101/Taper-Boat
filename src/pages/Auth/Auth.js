import React, { useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { TokenSliceActions } from "../../store/TokenSlice";

const Auth = (props) => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLKz4YyiCc2HS-nLD1Czl8a4iO8wXs92M",
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
      if (response.ok) {
        const data = await response.json();
        dispatch(TokenSliceActions.LogIn(data.idToken));
        localStorage.setItem("token", data.idToken);
        props.onHide();
      }
    } catch (error) {
      console.log(error);
    }
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
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              Login
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
                style={{ borderRadius: "0.5rem", borderColor: "#ced4da" }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
                style={{ borderRadius: "0.5rem", borderColor: "#ced4da" }}
              />
              <Form.Text className="text-muted">
                We'll never share your password with anyone else.
              </Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{ borderRadius: "0.5rem" }}
            >
              Submit
            </Button>
            <Button
              variant="dark"
              style={{ margin: "20px", borderRadius: "0.5rem" }}
            >
              Forgot Password?
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Auth;
