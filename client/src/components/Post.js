// import React, { Fragment, useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../actions/postActions";

const Post = ({ getPosts, payload: { posts, loading } }) => {
  //   useEffect(() => {
  //     getPost();
  //   }, [getPost]);
  return <div>{posts}</div>;
};

Post.propTypes = {
  getPosts: PropTypes.func.isRequired,
  payload: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    getPosts: state.posts
});

export default connect(mapStateToProps, { getPosts })(Post);
