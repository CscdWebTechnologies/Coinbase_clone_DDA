import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import dashboard from "./assets/dashboard.jpg"
import JumboHeader from "./JumboHeader"

const Section4=()=>{
    return (
      <Container>
        <JumboHeader header="Create your cryptocurrency portfolio today" 
        text="Coinbase has a variety of features that make it the best place to start trading"
        />

        <Container>
          <Row>
            <Col md={{ span: "8", order: "last" }} xs="12">
              <img className="img-fluid" src={dashboard} alt="dashboard" />
            </Col>
            <Col md={{ span: "4", order: "first" }}>
              <Row>
                <svg width="30" height="32" viewBox="0 0 30 32">
                    <g fill="none" fill-rule="evenodd">
                        <path fill="#D4EEFF" d="M10 32h10V10H10z"></path>
                        <path fill="#1752F0" d="M20 32h10V0H20z"></path><path fill="#55B4FC" d="M0 32h10V19H0z"></path>
                    </g>
                </svg>
                  <h1>Hello World</h1>
                  <p>
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </p>
              </Row>
              <Row>
                <Col md={{span:2}}>
                    <h2>1</h2>
                </Col>
                <Col md={{span:10}}>
                  <h1>Hello World</h1>
                  <p>
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={{span:2}}>
                    <h2>1</h2>
                </Col>
                <Col md={{span:10}}>
                  <h1>Hello World</h1>
                  <p>
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={{span:2}}>
                    <h2>1</h2>
                </Col>
                <Col md={{span:10}}>
                  <h1>Hello World</h1>
                  <p>
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    );
}
export default Section4