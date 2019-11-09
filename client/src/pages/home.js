import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} 
from "reactstrap"
import Cards from "./components/Cards"

class Home extends Component {
    render() {
        return (
        <Row>
            <Col>
                <h2 id= "welcome-message">Welcom to the Tribe</h2>
            </Col>
        </Row>
        )
    }
}

export default Home;
