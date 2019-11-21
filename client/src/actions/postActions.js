import axios from "axios";

import {
  ADD_POST,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST
} from "./types";

import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

// Add Post
export const addPost = postData => (dispatch, getState) => {
  // Headers

  // Request body
  // const postData = JSON.stringify({ country, city, photo, description });

  dispatch(clearErrors());
  axios
    .post("/api/posts", postData, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Posts
export const getPosts = postData => (dispatch, getState) => {
  dispatch(setPostLoading());
  axios
    .get("/api/posts", postData, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

// Get Post
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};

// Delete Post
export const deletePost = id => (dispatch, getState) => {
  axios
    .delete(`/api/posts/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Like
export const addLike = id => (dispatch, getState) => {
  axios
    .post(`/api/posts/like/${id}`, tokenConfig(getState))
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Remove Like
export const removeLike = id => (dispatch, getState) => {
  axios
    .post(`/api/posts/unlike/${id}`, tokenConfig(getState))
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Comment--if we want to have "comment" as part of functionality...
// export const addComment = (postId, commentData) => (dispatch, getState) => {
//   dispatch(clearErrors());
//   axios
//     .post(`/api/posts/comment/${postId}`, commentData, tokenConfig(getState))
//     .then(res =>
//       dispatch({
//         type: GET_POST,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Delete Comment--if we want to have "comment" as part of functionality...
// export const deleteComment = (postId, commentId) => (dispatch, getState) => {
//   axios
//     .delete(`/api/posts/comment/${postId}/${commentId}`, tokenConfig(getState))
//     .then(res =>
//       dispatch({
//         type: GET_POST,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
