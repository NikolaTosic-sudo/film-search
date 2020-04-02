import * as actionTypes from '../actionTypes';

const saveGuestSession = payload => ({
  type: actionTypes.GET_GUEST_SESSION,
  payload
});

export const getGuestSession = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveGuestSession(data)))
    .catch(error => console.log(error));
  };
};

const saveRequestToken = payload => ({
    type: actionTypes.GET_REQUEST_TOKEN,
    payload
  });
  
  export const getRequestToken = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveRequestToken(data)))
      .catch(error => console.log(error))
    };
  };

  const saveSession = payload => ({
    type: actionTypes.GET_SESSION,
    payload
  });
  
  export const getSession = (url, token) => {
    return dispatch => {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({ request_token: token }),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => dispatch(saveSession(data)))
      .catch(error => console.log(error))
    };
  };
  
  const saveUserDetails = payload => ({
    type: actionTypes.GET_USER_DETAILS,
    payload
  });
  
  export const getUserDetails = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveUserDetails(data)))
      .catch(error => console.log(error))
    };
  };
