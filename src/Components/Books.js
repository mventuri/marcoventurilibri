import React, { Component, useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { FaBookOpen } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import books from "../Shared/books.json";

const getData = books;

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
              <FaBookOpen />
            </h1>
            <CardTitle>
              <b> {profile.title} </b>
            </CardTitle>{" "}
            <CardText>
              <span>{profile.cover}</span>
              <br />
              <span>{profile.publisher}</span>
              <br />
              <span>{profile.collection}</span>
              <br />
              <span>{profile.ISBN}</span>
              <br />
              <span>{profile.ISBN13}</span>
            </CardText>{" "}
            <a target="_blank" href={profile.resource}></a>
            <BookDetails
              buttonLabel="Dettagli"
              text={profile.abstract}
              link={profile.resource}
              amazon={profile.amazon}
              title={profile.title}
            />
          </CardBody>{" "}
        </Card>{" "}
      </Col>
    );
  }
}

//modal
class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="md"
        >
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>{this.props.text}</ModalBody>
          <ModalFooter>
            <a target="_blank" href={this.props.link}>
              <Button color="primary" onClick={this.toggle}>
                Scheda
              </Button>
            </a>{" "}
            <a target="_blank" href={this.props.amazon}>
              <Button color="warning" onClick={this.toggle}>
                Guarda su <FaAmazon />
              </Button>
            </a>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
//modal

export default class Team extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs="12">
            <h2>Pubblicazioni</h2>
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
