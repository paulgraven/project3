// get current profile action 

import axios from "axios";

import {
  //ADD_POST,
  GET_ERRORS,
  //CLEAR_ERRORS,
  //GET_POSTS,
  //GET_POST,
  
  DASH_LOADING,
  DASH_ERROR
} from "./types";

import { tokenConfig } from "./authActions";
//import { returnErrors } from "./errorActions";
//import {clearErrors} from "./errorActions"


// should access post from a specific User based on login and User id 
//need to change route after coding the actual get route for Users --> me --> connect to Users object 
export const getCurrentProfile = () => async dispatch => {try {
    const res = await axios.get(`/api/profile/me`);

    dispatch({
        type: DASH_LOADING,
        payload: res.data
    })
} catch (error) {
    dispatch({
        type: DASH_ERROR,
        payload:{msg: error.response.statusText, status: error.response.status}
    })
}}


export const getUserLikes = () => async dispatch => {try {
    const res = await axios.get(`/api/profile/me/likes`);

    dispatch({
        type: DASH_LOADING,
        payload: res.data
    })
} catch (error) {
    dispatch({
        type: DASH_ERROR,
        payload:{msg: error.response.statusText, status: error.response.status}
    })
}}













//     dispatch();
//     axios
//       .post(`/api/posts/${id}`, postData, tokenConfig(getState))
//       .then(res =>
//         dispatch({
//           type: DASH_LOADING,
//           payload: res.data
//         })
//       )
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   };

//   export const getUserLikes = postData => (dispatch, getState) => {
//     dispatch();
//     axios
//       .post(`/api/posts/${like}`, postData, tokenConfig(getState))
//       .then(res =>
//         dispatch({
//           type: DASH_LOADING,
//           payload: res.data
//         })
//       )
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   };