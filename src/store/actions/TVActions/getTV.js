import * as actionTypes from '../actionTypes';

const saveTVCredits = payload => ({
  type: actionTypes.GET_TV_CREDITS,
  payload
});

export const getTVCredits = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveTVCredits(data)))
    .catch(error => console.log(error))
  };
};

const saveTVDetails = payload => ({
    type: actionTypes.GET_TV_DETAILS,
    payload
  });
  
  export const getTVDetails = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveTVDetails(data)))
      .catch(error => console.log(error))
    };
  };

  const saveTVFavorites = payload => ({
    type: actionTypes.GET_TV_FAVORITES,
    payload
  });
  
  export const getTVFavorites = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveTVFavorites(data)))
      .catch(error => console.log(error));
    };
  };

  const saveTVRated = payload => ({
    type: actionTypes.GET_TV_RATED,
    payload
  });
  
  export const getTVRated = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveTVRated(data)))
      .catch(error => console.log(error));
    }
  };

  const saveTVReviews = payload => ({
    type: actionTypes.GET_TV_REVIEWS,
    payload
  });
  
  export const getTVReviews = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveTVReviews(data)))
      .catch(error => console.log(error))
    };
  };

  const saveTVTrailers = payload => ({
    type: actionTypes.GET_TV_TRAILERS,
    payload
  });
  
  export const getTVTrailers = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveTVTrailers(data)))
      .catch(error => console.log(error))
    };
  };