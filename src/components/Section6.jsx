import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Section6=()=>{
    return (
      <Container fluid className="custom-background">
        <Row>
          <Col md={{ span: 3, offset:1 }} >
            <h1 className="text-center header">$335B</h1>
            <p className="text-center subtext">Quarterly volume traded</p>
          </Col>
          <Col  md={{ span: 3 }} >
            <h1 className="text-center header">100+</h1>
            <p className="text-center subtext">Quarterly volume traded</p>
          </Col>
          <Col  md={{ span: 3 }} >
            <h1 className="text-center header">56+M</h1>
            <p className="text-center subtext">Quarterly volume traded</p>
          </Col>
        </Row>
       </Container>
    );
}
export default Section6