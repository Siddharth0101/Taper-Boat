import Alert from "react-bootstrap/Alert";
const AlertLogin = () => {
  return (
    <div>
      <Alert variant="danger" dismissible>
        <Alert.Heading>You got an error!</Alert.Heading>
        <p> Login or Register before proceeding</p>
      </Alert>
    </div>
  );
};
export default AlertLogin;
