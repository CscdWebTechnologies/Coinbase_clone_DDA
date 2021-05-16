import React from "react"
import { Container, Navbar,NavDropdown, Nav,Button,Row,Col } from "react-bootstrap"
import logo from "./assets/logo.svg";
import dp1 from "./assets/dp1.svg";
import dp2 from "./assets/dp2.svg";
import dp3 from "./assets/dp3.svg";

const Navi=()=>{
    return (
        <Navbar bg="light-custom" expand="lg">
          <Navbar.Brand href="#home">
            <img src={logo} alt="coinbase logo" width="112" height="20" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav >
              <Nav.Link href="#home">Prices</Nav.Link>
              <NavDropdown title="Learn" id="basic-nav-dropdown">
                  <Container className="dropdown-container">
                      <Row>
                          <Col md={{span:3, offset:2}}>
                              <Row>
                              <p> &gt; Tips & Tutorial</p>
                              <p> &gt; Tips & Tutorial</p> 
                              <p> &gt; Tips & Tutorial</p>
                              </Row>
                         </Col>
                         <Col md={{span:4}}>
                            <Row>
                            <p>Crypto questions, answered</p> 
                            <p>Guides and explainers for your crypto questions</p>
                            <a>See all articles</a>
                            </Row>
                         </Col>
                      </Row>
                  </Container>
              </NavDropdown>
              <NavDropdown title="Individuals" id="basic-nav-dropdown">
                <Container>
                    <Row>
                        <Col md={{span:3, offset:1}}>
                            <Row>
                                <Col md={{span:2}}>
                                    <img src={dp1} height="40" width="40"/>
                                </Col>
                                <Col md={{span:6}}>
                                    <p>Buy and selll</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{span:2}}>
                                    <img src={dp2} height="40" width="40"/>
                                </Col>
                                <Col md={{span:6}}>
                                    <p>Buy and selll</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{span:2}}>
                                    <img src={dp3} height="40" width="40"/>
                                </Col>
                                <Col md={{span:6}}>
                                    <p>Buy and selll</p>
                                </Col>
                            </Row>


                        </Col>
                        <Col  md={{span:3}}>
                        </Col>
                        <Col  md={{span:3}}>
                        </Col>
                    </Row>
                </Container>
              </NavDropdown>
              <NavDropdown title="Businesses" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Developers" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Company" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="navbar-right">
              <Nav.Link>Sign In</Nav.Link>
              <Nav.Link>
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}
export default Navi