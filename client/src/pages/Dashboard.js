import "./../../src/App.css";
import axios from "axios";
import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import {Button, Container, CardHeader, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
// import AppNavbar from '../components/AppNavbar';
import Card from "../components/Cards/Cards"
import { getCurrentProfile } from '../actions/DashAction'

class Dashboard extends Component {
  static propTypes = {
    auth: propTypes.object.isRequired,
    isAuthenticated: propTypes.bool
  };

  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    return axios
      .get("/api/posts/user/_id")
      .then(res =>
        this.setState({
          posts: res.data.User
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        {this.props.isAuthenticated ? (
          <div>
            {this.state.posts.User ? (
              <Row>
                {this.state.posts.User.map(post => (
                  // <ul className="posts">
                  <Card className="card" width="10px">
                    <CardHeader>
                      {post.User.city}, {post.User.country}
                    </CardHeader>
                    <CardHeader>{post.User.continent}</CardHeader>
                    <CardImg
                      className="img-responsive"
                      src={post.photo}
                      alt="photo"
                    ></CardImg>
                    <CardText className="cardText">{post.User.description}</CardText>
                    <Button className="likebtn"></Button>
                  </Card>
                  // </ul>
                ))}
              </Row>
            ) : (
              <h2 className="text-center">No posts have been made</h2>
            )}
          </div>
        ) : (
          <h4 className="mb-3 ml-4">Please log in to manage posts</h4>
        )}
      </Container>
    );
  }
}

// eslint-disable-next-line default-case
 Dashboard.propTypes = {
   getCurrentProfile: propTypes.func.isRequired,
   getUserLikes: propTypes.func.isRequired,
   isAuthenticated: propTypes.object.isRequired,
   profile: propTypes.object.isRequired
 }

 const mapStateToProps = state => ({
   isAuthenticated: state.auth,
   profile: state.profile
 });

 export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
