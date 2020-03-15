import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { FiHeart } from "react-icons/fi";
import { FaReact, FaLinkedin } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <Row className="myFooter">
        <Col xs="12">
          Fatto con <FiHeart /> e <FaReact /> da Marco Venturi
        </Col>
        <Col xs="12">
          Teniamoci in contatto:{" "}
          <a target="_blank" href="https://www.linkedin.com/in/marcoventuri/">
            <FaLinkedin />
          </a>
        </Col>
      </Row>
    );
  }
}

export default Footer;
