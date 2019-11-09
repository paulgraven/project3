import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from "reactstrap"
import AppNavbar from "./components/AppNavbar";
import Card from "./components/Card"

class home extends Component {
    render() {
        return (
            <Container>
                <AppNavbar />
                <Row>
                    <Col></Col>
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
