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
        className="navbar-center nav-text2 nav-text1"
      >
        <Nav className="navbar-center">
          <Nav.Link href="#home">
            <span className="nav-text1">Prices</span>
          </Nav.Link>
          <Nav.Link href="#home">
            <span className="nav-text1">Learn</span>
          </Nav.Link>
          <section className="sec-learn">
            <div className="sec-learn2">
              <div className="sec-col">
                <a href="##" title="Tips & Tutorials">
                  <span>
                    <svg
                      class=""
                      width="8"
                      height="11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z"
                        fill="#050F19"
                      ></path>
                    </svg>
                    <div>
                      <h4 className="nav-text2">Tips & Tutorials</h4>
                    </div>
                  </span>
                </a>
                <a href="##" title="Crypto Basics">
                  <span>
                    <svg
                      class=""
                      width="8"
                      height="11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z"
                        fill="#050F19"
                      ></path>
                    </svg>
                    <div>
                      <h4>Crypto Basics</h4>
                    </div>
                  </span>
                </a>
                <a href="##" title="Market updates">
                  <span>
                    <svg
                      class=""
                      width="8"
                      height="11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z"
                        fill="#050F19"
                      ></path>
                    </svg>
                    <div>
                      <h4>Market updates</h4>
                    </div>
                  </span>
                </a>
              </div>
            </div>
          </section>
          <Nav.Link href="#home">
            <span className="nav-text1">Individuals</span>
          </Nav.Link>
          <NavDropdown
            title="Businesses"
            id="basic-nav-dropdown"
            className="nav-text1"
          >
            <NavDropdown.Item href="#action/3.1" className="">
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
