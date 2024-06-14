import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AdbIcon from "@mui/icons-material/Adb";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Auth from "../../pages/Auth/Auth";
import AuthReg from "../../pages/Auth/AuthReg";
import { useDispatch, useSelector } from "react-redux";
import { TokenSliceActions } from "../../store/TokenSlice";
import CartOffcanvas from "../CartOffcanvas/CartOffcanvas";
import SearchOffcanvas from "../searchOffcanvas/searchOffcanvas";
import { SearchSliceAction } from "../../store/SearchSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowReg, setModalShowReg] = React.useState(false);
  const isLogged = useSelector((state) => state.LoginStore.isLogged);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(TokenSliceActions.LogOut());
    localStorage.clear("token");
    navigate("/");
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    setSearchSubmitted(false);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      setSearchSubmitted(true);
      handleShowSearch();
    }
  };

  const [showSearch, setShowSearch] = useState(false);
  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => {
    setShowSearch(true);
  };

  const [searchTerm, setSearchTerm] = useState("");
  dispatch(SearchSliceAction.enteredSentenceInput(searchTerm));
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
          <Navbar.Brand as={NavLink} to="/">
            PAPER BOAT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Nuts" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/almond">
                  Almonds
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/aboutus">
                About Us
              </Nav.Link>
            </Nav>
            <Form inline className="mr-3" onSubmit={(e) => e.preventDefault()}>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchSubmit}
                  />
                </Col>
              </Row>
            </Form>

            <div className="d-flex align-items-center">
              <div className="d-md-none ml-auto">
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
                <IconButton
                  icon={<ShoppingCartIcon fontSize="large" />}
                  onClick={handleShow}
                  variant="ghost"
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
                        {!isLogged && (
                          <div>
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
                          </div>
                        )}
                        {isLogged && (
                          <MenuItem>
                            <Button onClick={logoutHandler}>LogOut</Button>
                          </MenuItem>
                        )}
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
      <CartOffcanvas show={show} handleClose={handleClose} />
      {searchSubmitted && (
        <SearchOffcanvas
          showSearch={showSearch}
          handleCloseSearch={handleCloseSearch}
        />
      )}
      <Outlet />
    </div>
  );
};

export default Header;
