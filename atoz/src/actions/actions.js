import axios from 'axios'
import { axiosWithAuth } from "../axiosWithAuth";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";


export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post('https://atoz-backend.herokuapp.com/api/register', creds)
    .then(res => {
      console.log('RES form AXIOS REGISTER', res.data)
      localStorage.setItem("token", res.data.token);
      dispatch({ 
        type: REGISTER_SUCCESS, 
        payload: res.data.newUser, 
        message: res.data.message});
     })
    .catch(err => {
      console.log('ERROR from AXIOS REGISTER:', err.message)
      dispatch({ type: REGISTER_ERROR, payload: err.message });
    });
 };


export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";


export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://atoz-backend.herokuapp.com/api/login', creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ 
        type: LOGIN_SUCCESS, 
        payload: res.data.user,
        message: res.data.message});
    })
    .catch(err => {
      console.log('ERROR from AXIOS LOGIN:', err.message)
      dispatch({ type: LOGIN_ERROR, payload: err.message });
    });
 };


export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";


export const getUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  axiosWithAuth()
 .get('/users')
 .then(res => {
   console.log('RES GET CALL from AXIOS', res)
   dispatch({type: FETCH_USERS_SUCCESS, payload: res.data.users})
 })
  .catch(err => {
    dispatch({type: FETCH_USERS_ERROR})
  })
};


export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";


export const getUserById = id => dispatch => {
  dispatch({ type: FETCH_USER_START });
  axiosWithAuth()
 .get(`/users/${id}`)
 .then(res => {
   console.log('RES GET CALL from AXIOS', res)
   dispatch({type: FETCH_USER_SUCCESS, payload: res.data.user})
 })
  .catch(err => {
    dispatch({type: FETCH_USER_ERROR})
  })
};




export const POSTING_START = "POSTING_START";
export const POSTING_SUCCESS = "POSTING_SUCCESS";
export const POSTING_ERROR = "POSTING_ERROR";


export const postExperience = experience => {
  const newExperience =  axiosWithAuth()
  .post(`/friends`, experience);
   return dispatch => {
    dispatch({ type: POSTING_START });
    newExperience
      .then(res => {
        dispatch({ type: POSTING_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: POSTING_ERROR, payload: err });
      });
  };
};


// export const DELETE_START = "DELETE_START";
// export const DELETE_SUCCESS = "DELETE_SUCCESS";
// export const DELETE_ERROR = "DELETE_ERROR";
// export const USER_UNAUTHORIZED = 'USER_UNAUTHORIZED';


// export const deleteFriend = id => dispatch => {
//   dispatch({ type: DELETE_START });
//   axios
//     .delete(`http://localhost:5000/api/friends/${id}`, {
//       headers: { Authorization: localStorage.getItem('token') }
//     })
//     .then(res => {
//       dispatch({ type: DELETE_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       console.log('call failed: ', err.response);
//       if (err.response.status === 403) {
//         dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
//       } else {
//         dispatch({ type: DELETE_ERROR, payload: err.response });
//       }
//     });
// };


// export const EDIT_FRIEND_START = 'EDIT_FRIEND_START';
// export const EDIT_FRIEND_SUCCESS = 'EDIT_FRIEND_SUCCESS';
// export const EDIT_FRIEND_FAILURE = 'EDIT_FRIEND_FAILURE';

// export const editFriend = friend => dispatch => {
//   dispatch({ type: EDIT_FRIEND_START });
//   return axios
//     .put(`http://localhost:5000/api/friends/${friend.id}`, friend, {
//       headers: { Authorization: localStorage.getItem('token') }
//     })
//     .then(res => {
//       dispatch({ type: EDIT_FRIEND_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       if (err.response.status === 403) {
//         dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
//       } else {
//         dispatch({ type: EDIT_FRIEND_FAILURE, payload: err.response });
//       }
//     });
// };





 
/////////////////////////////////////////////////////////////

// //GET CALL WITH THE AUTH IN ONE PLACE
// // export default function getFriends() {
// //   return dispatch => {
// //     dispatch({ type: FETCH_FRIENDS_START });

// //     const token = localStorage.token
// //     const headers = {
// //       Authorization: token
// //     }
// //     axios
// //       .get("http://localhost:5000/api/friends/", {headers})
// //       .then(res => {
// //         console.log(res);
// //         dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
// //       })
// //       .catch(err => {
// //         console.log(err);
// //         dispatch({ type: FETCH_FRIENDS_ERROR, payload: err.response.data });
// //       });
// //   };
// // }




