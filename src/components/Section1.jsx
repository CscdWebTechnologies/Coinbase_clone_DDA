import React from "react";
import { Container, Row, Col, Jumbotron, Form, Button } from "react-bootstrap";
import image1 from "./assets/image1.svg";
import IphoneMock from "./IphoneMock";

const Section1 = () => {
  return (
    <Container className="containersec1">
      <Row>
        <Col md="5" xs="12" className="subsection1">
          <a href="#" class="blueTxt">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="bitcoinBlue"
            >
              <path
                d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
                fill="#1652F0"
              ></path>
              <path
                d="M17.274 10.515c.235-1.572-.962-2.417-2.599-2.981l.531-2.13-1.296-.323-.517 2.074c-.34-.086-.69-.165-1.039-.245l.521-2.087L11.58 4.5l-.53 2.13c-.283-.065-.56-.128-.829-.196l.002-.007-1.788-.446-.345 1.385s.962.22.942.234c.525.13.62.478.603.754L9.03 10.78c.036.01.083.023.135.043l-.137-.034-.848
                 3.4c-.064.158-.227.398-.595.307.014.019-.941-.235-.941-.235L6 15.745l1.688.42c.313.08.62.162.923.239l-.537
                 2.154 1.296.322.53-2.13c.355.096.698.184 1.034.268l-.53 2.121 1.297.323.536-2.15c2.211.419 3.873.25 4.573-1.75.564-1.61-.028-2.538-1.191-3.144.847-.195 1.485-.752 1.655-1.903zm-2.963 4.153c-.4 1.61-3.11.74-3.99.522l.713-2.854c.879.22 3.697.654 3.277 2.332zm.402-4.176c-.365 1.464-2.621.72-3.353.537l.645-2.587c.731.182 3.089.522 2.708 2.05z"
                fill="#fff"
              ></path>
            </svg>
            Jump start your portfolio
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#1652F0"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5
                 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
          <Jumbotron>
            <h1 className="jumboText">
              <span>
                Jump start
                <br /> your crypto
                <br /> portfolio
              </span>
            </h1>
            <p className="jumboSubText">
              Coinbase is the easiest place to buy and sell cryptocurrency. Sign
              up and get started today.
            </p>
          </Jumbotron>
          <Row>
            <Col md={{ span: 7 }} className="formField">
              <Form.Control
                className="fieldCustom"
                placeholder="Email address"
              ></Form.Control>
            </Col>
            <Col md={{ span: 5 }}>
              <Button size="lg" className="getStartedBtn">
                Get Started
              </Button>
            </Col>
            <a href="#" class="tcText">
              *Terms apply
            </a>
          </Row>
        </Col>
        <Col xs={{ span: 7 }}>
          <IphoneMock />
        </Col>
      </Row>
    </Container>
  );
};
export default Section1;
