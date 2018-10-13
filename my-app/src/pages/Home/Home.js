import React from "react";
import { Col, Row, Container } from "../../components/Grid";

const Home = () => (
  <div>
    <Container>
      <Row>
        <Col size="md-4 sm-12">
          <h1>Home Page</h1>
        </Col>
        <Col size="md-4 sm-12">
          <h1>Steve</h1>
        </Col>
        <Col size="md-4 sm-12">
          <h1>Krispy</h1>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
