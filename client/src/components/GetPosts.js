import React, { Component } from "react";
import axios from "axios";
import { tokenConfig } from "./../actions/authActions";
import { returnErrors } from "./../actions/errorActions";
import {
  ADD_POST,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST
} from "./../actions/types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addPost } from "../actions/postActions";
import { getPost } from "../actions/postActions";
import PropTypes from "prop-types";

const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

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

  // getPosts = () => (dispatch, getState) => {
  //   dispatch(setPostLoading());
  //   axios
  //     .get("/api/posts", tokenConfig(getState))
  //     .then(res =>
  //       dispatch({
  //         type: GET_POSTS,
  //         posts: res.data
  //       })
  //     )
  //     .catch(err =>
  //       dispatch({
  //         type: GET_POSTS,
  //         posts: null
  //       })
  //     );
  // };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <div>
            {this.state.posts.length ? (
              <div>
                {this.state.posts.map(post => (
                  <div>
                    key={post._id}
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPost })(GetPosts);