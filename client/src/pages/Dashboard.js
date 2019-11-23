import "./../../src/App.css";
import axios from "axios";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost } from "./../actions/postActions";
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

class GetPosts extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  state = {
    posts: []
  };

  componentDidMount() {
    this.getPostsbyUser();
  }

  getPostsbyUser = () => {
    return axios
      .get("/api/posts/user")
      .then(res =>
        this.setState({
          posts: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        {this.props.isAuthenticated ? (
          <div>
            {this.state.posts.length ? (
              <Row>
                {this.state.posts.map(post => (
                  // <ul className="posts">

                  <Card className="card" width="10px" key={post._id}>
                    {/* user={post.user} */}
                    {/* // authors={post.authors.join(", ")} */}
                    <CardHeader>
                      {post.city}, {post.country}
                    </CardHeader>
                    <CardHeader>{post.continent}</CardHeader>
                    <CardImg
                      className="img-responsive"
                      src={post.photo}
                      alt="photo"
                    ></CardImg>
                    <CardText className="cardText">{post.description}</CardText>
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

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPost })(GetPosts);
