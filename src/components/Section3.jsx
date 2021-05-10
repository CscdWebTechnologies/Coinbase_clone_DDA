import React from "react"
import {Container, Row, Col, Jumbotron, Button} from "react-bootstrap"

const Section3=()=>{
    return (
      <Container>
        <Row>
          <Col sm={{ span: "4" }} xs={{span:"6"}}>
            <Jumbotron>
              <h3>Earn up to $28 worth of crypto</h3>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                  <Button variant="primary" size="sm">Start earning</Button>
              </p>
            </Jumbotron>
          </Col>
          <Col md={{ span: "4" }}></Col>
        </Row>
      </Container>
    );
}
export default Section3