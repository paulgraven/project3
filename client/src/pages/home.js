import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
//import AppNavbar from "./components/AppNavbar";
import Cards from "../components/Cards/Cards";
class home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>Welocme to the Tribe</Col>
        </Row>
        <Row>
          <Col>
            <Cards />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default home;