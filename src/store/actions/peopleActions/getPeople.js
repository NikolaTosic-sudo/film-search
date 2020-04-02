import * as actionTypes from '../actionTypes';

const savePeopleCombinedCredits = payload => ({
  type: actionTypes.GET_PEOPLE_COMBINED_CREDITS,
  payload
});

export const getPeopleCombinedCredits = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(savePeopleCombinedCredits(data)))
    .catch(error => console.log(error))
  };
};

const savePeopleDetails = payload => ({
    type: actionTypes.GET_PEOPLE_DETAILS,
    payload
  });
  
  export const getPeopleDetails = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(savePeopleDetails(data)))
      .catch(error => console.log(error))
    };
  };

  const savePeoplePopular = payload => ({
    type: actionTypes.GET_PEOPLE_POPULAR,
    payload
  });
  
  export const getPeoplePopular = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(savePeoplePopular(data)))
      .catch(error => console.log(error))
    };
  };