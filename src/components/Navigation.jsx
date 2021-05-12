import React from "react";
import { Navbar, NavDropdown, Button, Nav } from "react-bootstrap";
import logo from "./assets/logo.svg";

const Navigation = () => {
  return (
    <Navbar bg="light-custom" expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} alt="coinbase logo" width="112" height="20" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="navbar-center nav-text2"
      >
        <Nav className="navbar-center">
          <Nav.Link href="#home">
            <span className="nav-text1">Prices</span>
          </Nav.Link>
          <Nav.Link href="#home">
            <span className="nav-text1">Learn</span>
          </Nav.Link>
          <Nav.Link href="#home">
            <span className="nav-text1">Individuals</span>
          </Nav.Link>
          <NavDropdown title="Businesses" id="basic-nav-dropdown" className="nav-text1">
            <NavDropdown.Item href="#action/3.1">
              Businesses
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Developers"
            id="basic-nav-dropdown"
            className="nav-text1"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Company"
            id="basic-nav-dropdown"
            className="nav-text1"
          >
            <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="navbar-right">
          <Nav.Link>
            <span className="nav-text2">Sign in</span>
          </Nav.Link>
          <Nav.Link>
            <Button variant="primary" className="right-nav-btn">
              Get Started
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
