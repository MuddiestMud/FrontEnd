import axios from "axios";

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const Link = "";

///////////////////   Users  ////////////////////

// Post User
const POST_USER_START = "POST_USER_START";
const POST_USER_SUCCESS = "POST_USER_SUCCESS";
const POST_USER_FAIL = "POST_USER_FAIL";

export const postUser = user => dispatch => {
  dispatch({ type: POST_USER_START });
  axios
    .post(`${Link}/user`, user)
    .then(res => {
      dispatch({ type: POST_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_USER_FAIL, payload: err.response.data.message });
    });
};

// Get User by ID
const FETCH_USER_START = "FETCH_USER_START";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAIL = "FETCH_USER_FAIL";

export const getUserById = id => dispatch => {
  dispatch({ type: FETCH_USER_START });
  axios
    .get(`${Link}/user/${id}`)
    .then(res => {
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USER_FAIL, payload: err.response.data.message });
    });
};

// Get Users
const FETCH_USERS_START = "FETCH_USERS_START";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

export const getUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  axios
    .get(`${Link}/user`)
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_FAIL, payload: err });
    });
};

// Update User
const UPDATE_USER_START = "UPDATE_USER_START";
const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const updateUser = (id, user) => dispatch => {
  dispatch({ type: UPDATE_USER_START });
  axios
    .put(`${Link}/user/${id}`, user)
    .then(res => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAIL, payload: err.response.data.message });
    });
};

// Delete User
const DELETE_USER_START = "DELETE_USER_START";
const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER_START });
  axios
    .delete(`${Link}/user/${id}`)
    .then(res => {
      dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_USER_FAIL, payload: err.response.data.message });
    });
};
