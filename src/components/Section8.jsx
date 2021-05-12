import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import earth_astro from "./assets/earth_astro.jpg";

const Section8 = () => {
  return (
    <Container>
      <Row>
        <Col sm={{ span: "6" }} xs={{ span: "6" }}></Col>
        <Col sm={{ span: "6" }} xs={{ span: "6" }}>
          <img src={earth_astro} alt="earth logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Section8;
