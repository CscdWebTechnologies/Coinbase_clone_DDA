import React from "react"
import {Container, Row, Col, Jumbotron} from "react-bootstrap"

const Section1=()=>{
    return (
      <Container>
        <Row>
          <Col md="5">
              <a href="#">Jump start your portfolio</a>
            <Jumbotron>
              <h1>Jump start your crypto portfolio</h1>
              <p>
              Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.
              </p>
              <p>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
}
export default Section1