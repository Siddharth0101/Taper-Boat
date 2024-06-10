import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AdbIcon from "@mui/icons-material/Adb";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Auth from "../../pages/Auth/Auth";
import AuthReg from "../../pages/Auth/AuthReg";
const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowReg, setModalShowReg] = React.useState(false);
  return (
    <div>
      <Navbar bg="primary" expand="md" variant="dark">
        <Container>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              color: "#c0c0c0",
              fontSize: 32,
            }}
          />

          <Navbar.Brand href="#home">PAPER BOAT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Nuts" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Almonds</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Cashews</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">About Us</Nav.Link>
            </Nav>
            <Form inline>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                </Col>
              </Row>
            </Form>
            <div className="d-flex align-items-center">
              <div className="d-md-none ml-auto">
                <CircleNotificationsIcon
                  sx={{
                    fontSize: 32,
                    marginLeft: 2,
                  }}
                />
                <AccountCircleIcon
                  sx={{
                    fontSize: 32,
                    marginLeft: 2,
                  }}
                />
                <ShoppingCartIcon
                  sx={{
                    fontSize: 32,
                    marginLeft: 2,
                  }}
                />
              </div>
              <div className="d-none d-md-flex">
                <CircleNotificationsIcon
                  sx={{
                    fontSize: 32,
                    marginLeft: 2,
                  }}
                />
                <ShoppingCartIcon
                  sx={{
                    fontSize: 32,
                    marginLeft: 2,
                  }}
                />
                <Menu>
                  <MenuButton as={Button} colorScheme="pink">
                    <AccountCircleIcon
                      sx={{
                        fontSize: 32,
                        marginLeft: 2,
                      }}
                    />
                  </MenuButton>
                  <MenuList>
                    <Card>
                      <Card.Body>
                        <MenuItem>
                          <Button onClick={() => setModalShow(true)}>
                            Login
                          </Button>
                        </MenuItem>
                        <MenuItem>
                          <Button onClick={() => setModalShowReg(true)}>
                            Register
                          </Button>
                        </MenuItem>
                        {/* <MenuItem>My Account</MenuItem>
                        <MenuItem>LogOut</MenuItem> */}
                      </Card.Body>
                    </Card>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Auth show={modalShow} onHide={() => setModalShow(false)} />
      <AuthReg show={modalShowReg} onHide={() => setModalShowReg(false)} />
      <Outlet />
    </div>
  );
};

export default Header;
