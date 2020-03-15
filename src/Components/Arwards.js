import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Col,
  Row,
  Button
} from "reactstrap";
import { GiAchievement } from "react-icons/gi";
import arwards from "../Shared/arwards.json";

const getData = arwards;

const CardList = props => (
  <React.Fragment>
    {" "}
    {getData.map(profile => (
      <CardArward {...profile} />
    ))}{" "}
  </React.Fragment>
);

class CardArward extends React.Component {
  render() {
    const profile = this.props;
    return (
      <Col md="4">
        <br />
        <Card>
          <CardBody>
            <h1>
              <GiAchievement />
            </h1>
            <CardTitle>
              <b> {profile.prize} </b>
            </CardTitle>{" "}
            <CardText> {profile.prizeDetails} </CardText>{" "}
            <a target="_blank" href={profile.resource}>
              <Button color="danger">Scopri di più</Button>
            </a>
          </CardBody>{" "}
        </Card>{" "}
      </Col>
    );
  }
}

export default class Arwards extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs="12">
            <h2>Riconoscimenti</h2>
          </Col>
        </Row>
        <Row>
          <CardList />
        </Row>
        <br />
      </React.Fragment>
    );
  }
}
