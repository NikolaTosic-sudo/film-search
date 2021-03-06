import { RATE_MOVIE } from '../actionTypes'

const saveRateMovie = payload => ({
  type: RATE_MOVIE,
  payload
});

export const rateMovie = (url, value) => {
  return dispatch => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ value }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => dispatch(saveRateMovie(data)))
    .catch(error => console.log(error))
  };
};
