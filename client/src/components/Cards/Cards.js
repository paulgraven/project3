import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardText,
  CardImg,
  Button
} from "reactstrap";

const Cards = props => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h2>{}</h2>
              <h3>{}</h3>
            </CardHeader>
            <CardImg></CardImg>
            <CardText>{}</CardText>
            <Button className="likebtn"></Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
