import * as actionTypes from '../actionTypes';

const saveMovieCredits = payload => ({
  type: actionTypes.GET_MOVIE_CREDITS,
  payload
});

export const getMovieCredits = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMovieCredits(data)))
    .catch(error => console.log(error))
  };
};

const saveMovieDetails = payload => ({
    type: actionTypes.GET_MOVIE_DETAILS,
    payload
  });
  
export const getMovieDetails = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMovieDetails(data)))
      .catch(error => console.log(error))
    }
  };

  const saveMovieFavorites = payload => ({
    type: actionTypes.GET_MOVIE_FAVORITES,
    payload
  });
  
  export const getMovieFavorites = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMovieFavorites(data)))
      .catch(error => console.log(error))
    }
  };

  const saveMovieReviews = payload => ({
    type: actionTypes.GET_MOVIE_REVIEWS,
    payload
  });
  
  export const getMovieReviews = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json(res))
      .then(data => dispatch(saveMovieReviews(data)))
      .catch(error => console.log(error))
    };
  };

  const saveMoviesRated = payload => ({
    type: actionTypes.GET_MOVIES_RATED,
    payload
  });
  
  export const getMoviesRated = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMoviesRated(data)))
      .catch(error => console.log(error))
    };
  };

  const saveMovieTrailers = payload => ({
    type: actionTypes.GET_MOVIE_TRAILERS,
    payload
  });
  
  export const getMovieTrailers = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMovieTrailers(data)))
      .catch(error => console.log(error))
    };
  };