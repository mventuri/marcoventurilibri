import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import quote from "../Shared/quote.json";

const Quotes = props => {
  return (
    <Row>
      <Col xs="12">
        <Jumbotron>
          <blockquote className="lead">
            <i>"{quote.quote}"</i>
            <footer>{quote.author}</footer>
          </blockquote>
          <hr className="my-2" />
        </Jumbotron>
      </Col>
    </Row>
  );
};

export default Quotes;
