import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import earth_astro from "./assets/earth_astro.jpg";

const Section8 = () => {
  return (
    <Container fluid className="earth-container">
      <Row>
        <Col sm={{ span: "4", offset: "1" }} xs={{ span: "2" }}>
          <div className="earth-text-grid">
            <h2 className="earth-font display-text">
              Earn up to $28 worth of crypto
            </h2>
            <p className="earth-font-p display-text">
              Discover how specific cryptocurrencies work — and get a bit of
              each crypto to try out for yourself.
            </p>
            <Button variant="primary" size="sm" className="start-earn-btn margin">
              Start earning
            </Button>
          </div>
        </Col>
        <Col sm={{ span: "2", offset: "1" }} xs={{ span: "3" }}>
          <img src={earth_astro} alt="earth logo" className="earth-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default Section8;
