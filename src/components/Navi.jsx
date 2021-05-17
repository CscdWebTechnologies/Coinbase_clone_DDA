import React from "react"
import { Container, Navbar,NavDropdown, Nav,Button,Row,Col } from "react-bootstrap"
import logo from "./assets/logo.svg";
import dp1 from "./assets/dp1.svg";
import dp2 from "./assets/dp2.svg";
import dp5 from "./assets/dp5.svg";
import dp3 from "./assets/dp3.svg";
import dp4 from "./assets/dp4.svg";
import dp9 from "./assets/dp9.svg";
import dp8 from "./assets/dp8.svg";
import dp7 from "./assets/dp7.svg";
import dp6 from "./assets/dp6.svg";

const Navi=()=>{
    return (
      <Navbar bg="light-custom" expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="coinbase logo" width="112" height="20" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Prices</Nav.Link>
            <NavDropdown title="Learn" id="basic-nav-dropdown">
              <Container className="dropdown-container">
                <Row>
                  <Col md={{ span: 3, offset: 2 }}>
                    <Row>
                      <p> &gt; Tips & Tutorial</p>
                      <p> &gt; Tips & Tutorial</p>
                      <p> &gt; Tips & Tutorial</p>
                    </Row>
                  </Col>
                  <Col md={{ span: 4 }}>
                    <Row>
                      <p>Crypto questions, answered</p>
                      <p>Guides and explainers for your crypto questions</p>
                      <a href="##">See all articles</a>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>
            <NavDropdown title="Individuals" id="basic-nav-dropdown">
              <Container className="dropdown-container">
                <Row>
                  <Col md={{ span: 4, offset: 1 }}>
                    <Row className="droprow">
                      <Col md={{ span: 2 }}>
                        <img src={dp1} height="40" width="40" alt="dp1 svg" />
                      </Col>
                      <Col md={{ span: 8 }}>
                        <p  className="droprow-header">Buy and sell</p>
                        <p className="droprow-text">Buy, sell and use crypto</p>
                      </Col>
                    </Row>
                    <Row className="droprow">
                      <Col md={{ span: 2 }} className="dp-svg">
                        <img src={dp2} height="40" width="40" alt="dp2 svg" />
                      </Col>
                      <Col md={{ span: 8 }}>
                        <p className="droprow-header">Earn free crypto</p>
                        <p className="droprow-text">Learn and earn crypto</p>
                      </Col>
                    </Row>
                    <Row className="droprow">
                      <Col md={{ span: 2 }} className="dp-svg">
                        <img src={dp3} height="40" width="40" alt="dp3 svg" />
                      </Col>
                      <Col md={{ span: 10 }}>
                        <p className="droprow-header">Private clients</p>
                        <p className="droprow-text">For trusts, family offices, UHNWIs</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={{ span: 4 }}>
                    <Row className="droprow">
                      <Col md={{ span: 2 }} className="dp-svg">
                        <img src={dp4} height="40" width="40" alt="d4 svg" />
                      </Col>
                      <Col md={{ span: 9 }}>
                        <p className="droprow-header">Wallet</p>
                        <p className="droprow-text">The best self-hosted crypto wallet</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={{ span: 2 }} className="dp-svg">
                        <img src={dp5} height="40" width="40" alt="d5 svg" />
                      </Col>
                      <Col md={{ span: 8 }}>
                        <p className="droprow-header">Card</p>
                        <p className="droprow-text">Spend crypto, earn rewards</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={{ span: 3 }}>
                  <Row>
                      <p className="droprow-header">Crypto tools for everyone</p>
                      <p className="droprow-text2">Buy, sell, and spend crypto on the
                    world's most trusted crypto exchange</p>
                      <a href="##" className="view-text">See all products</a>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>
            <NavDropdown title="Businesses" id="basic-nav-dropdown">
            <Container className="dropdown-container">
                <Row>
                  <Col md={{ span: 4, offset: 1 }}>
                    <Row className="droprow">
                      <Col md={{ span: 2 }} className="dp-svg" >
                        <img src={dp6} height="40" width="40" alt="dp6 svg" />
                      </Col>
                      <Col md={{ span: 8 }}>
                        <p className="droprow-header">Prime</p>
                        <p className="droprow-text">The prime brokerage platform</p>
                      </Col>
                    </Row>
                    <Row className="droprow">
                      <Col md={{ span: 2 }} className="dp-svg">
                        <img src={dp7} height="40" width="40" alt="dp7 svg" />
                      </Col>
                      <Col md={{ span: 9 }}>
                        <p className="droprow-header">Custody</p>
                        <p className="droprow-text">Institutional-grade offline storage</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={{ span: 4 }}>
                    <Row className="droprow">
                      <Col md={{ span: 2 }} className="dp-svg">
                        <img src={dp8} height="40" width="40" alt="dp8 svg" />
                      </Col>
                      <Col md={{ span: 9 }}>
                        <p className="droprow-header">Commerce</p>
                        <p className="droprow-text">Accept crypto from anyone</p>
                      </Col>
                    </Row>
                    <Row className="droprow">
                      <Col md={{ span: 2 }} className="dp-svg">
                        <img src={dp9} height="40" width="40" alt="dp9 svg" />
                      </Col>
                      <Col md={{ span: 9 }}>
                        <p className="droprow-header">Asset Hub</p>
                        <p className="droprow-text">List your asset on coinbase</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={{ span: 3 }}>
                  <Row>
                      <p>Crypto tools for everyone</p>
                      <p>Buy, sell, and spend crypto on the
                    world's most trusted crypto exchange</p>
                      <a href="##" className="view-text">See all products</a>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>
            <NavDropdown title="Developers" id="basic-nav-dropdown">
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
            <NavDropdown title="Company" id="basic-nav-dropdown">
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