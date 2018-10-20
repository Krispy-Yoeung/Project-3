import React, { Component } from "react";

import { Col, Row, Container } from "../Grid";
import ComicCharacters from "../ComicCharacters";
import Youtube from "../Youtube";
import "./Superhero.css";

class Superhero extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-7">
            <ComicCharacters />
          </Col>
          <Col size="md-4">
            <Youtube />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Superhero;
