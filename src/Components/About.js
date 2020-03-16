import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Image from "react-bootstrap/Image";
import about from "../Shared/about.json";
import marco_venturi from "../Images/marco_venturi.jpg";

class About extends Component {
  render() {
    return (
      <Row>
        <Col md="6">
          <h1>{about.title}</h1>
          <p>{about.body}</p>
        </Col>
        <Col md="6">
          <Image src={marco_venturi} alt="Marco Venturi" fluid />
        </Col>
      </Row>
    );
  }
}

export default About;
