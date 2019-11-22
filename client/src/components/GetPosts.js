import axios from "axios";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost } from "../actions/postActions";
import Cards from "./Cards/Cards";
import List from "./List";
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
    this.getPosts();
  }

  getPosts = () => {
    return axios
      .get("/api/posts")
      .then(res =>
        this.setState({
          posts: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Row>
        {this.props.isAuthenticated ? (
          <div>
            {this.state.posts.length ? (
              <div>
                {this.state.posts.map(post => (
                  <div>
                    key={post._id}
                    user={post.user}
                    country={post.country}
                    country={post.country}
                    city={post.city}
                    photo={post.photo}
                    {/* // authors={post.authors.join(", ")} */}
                    description={post.description}
                  </div>
                ))}
              </div>
            ) : (
              <h2 className="text-center">No posts have been made</h2>
            )}
          </div>
        ) : (
          <h4 className="mb-3 ml-4">Please log in to manage posts</h4>
        )}
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPost })(GetPosts);
