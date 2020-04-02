import { DELETE_SESSION } from '../actionTypes';

const saveDeleteSession = payload => ({
  type: DELETE_SESSION,
  payload
});

export const deleteSession = (url, sessionId) => {
  return dispatch => {
    fetch(url, {
      method: 'DELETE',
      headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
      body: JSON.stringify({
        session_id: sessionId
      })
    })
    .then(res => res.json())
    .then(data => dispatch(saveDeleteSession(data)))
    .catch(error => console.log(error))
  };
};
