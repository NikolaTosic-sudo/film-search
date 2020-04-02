import * as actionTypes from '../actionTypes';

const saveMovieGenres = payload => ({
  type: actionTypes.POST_MOVIE_GENRES,
  payload
});

export const postMovieGenres = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMovieGenres(data)))
    .catch(error => console.log(error))
  }
};

const saveMoviesNowPlaying = payload => ({
    type: actionTypes.POST_MOVIES_NOWPLAYING,
    payload
  });
  
export const postMoviesNowPlaying = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMoviesNowPlaying(data)))
      .catch(error => console.log(error));
    };
  };

const saveMoviesPopular = payload => ({
    type: actionTypes.POST_MOVIES_POPULAR,
    payload
  });
  
export const postMoviesPopular = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMoviesPopular(data)))
      .catch(error => {
        console.log(error);
      })
    }
  };

  const saveMoviesTopRated = payload => ({
    type: actionTypes.POST_MOVIES_TOP_RATED,
    payload
  });
  
export const postMoviesTopRated = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMoviesTopRated(data)))
      .catch(error => console.log(error))
    }
  }

  const saveMoviesUpcoming = payload => ({
    type: actionTypes.POST_MOVIES_UPCOMING,
    payload
  });
  
export const postMoviesUpcoming = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMoviesUpcoming(data)))
      .catch(error => console.log(error))
    }
  };