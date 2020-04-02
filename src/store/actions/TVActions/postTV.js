import *as actionTypes from '../actionTypes';

const saveTVAiringToday = payload => ({
  type: actionTypes.POST_TV_AIRING_TODAY,
  payload
});

export const postTVAiringToday = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveTVAiringToday(data)))
    .catch(error => console.log(error))
  }
};

const saveTVGenres = payload => ({
    type: actionTypes.POST_TV_GENRES,
    payload
  });
  
  export const postTVGenres = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveTVGenres(data)))
      .catch(error => console.log(error))
    }
  };

  const saveTVOnTheAir = payload => ({
    type: actionTypes.POST_TV_ON_THE_AIR,
    payload
  });
  
  export const postTVOnTheAir = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveTVOnTheAir(data)))
      .catch(error => console.log(error))
    }
  };

  const saveTVPopular = payload => ({
    type: actionTypes.POST_TV_POPULAR,
    payload
  });
  
  export const postTVPopular = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveTVPopular(data)))
      .catch(error => console.log(error))
    }
  };

  const saveTVTopRated = payload =>({
    type: actionTypes.POST_TV_TOP_RATED,
    payload
  });
  
  export const postTVTopRated = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveTVTopRated(data)))
      .catch(error => console.log(error))
    }
  }