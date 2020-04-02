import { combineReducers } from 'redux';
import postMDBConfigReducer from './postMDBConfigReducer';

import getRequestToken from './authenticationReducers/get/getRequestToken';
import getSession from './authenticationReducers/get/getSession';
import deleteSession from './authenticationReducers/deleteSession';
import getGuestSession from './authenticationReducers/get/getGuestSession';
import toggleLogInStatus from './authenticationReducers/toggleLogInStatus';
import getUserDetails from './authenticationReducers/get/getUserDetails';

import postMovieGenres from './movieReducers/post/postMovieGenres';
import postTVGenres from './TVReducers/post/postTVGenres';

import setItemType from './seItemType';
import toggleNav from './toggleNav';
import searchData from './searchData';
import postSearchResults from './postSearchResults';

import postMoviesNowPlaying from './movieReducers/post/postMoviesNowPlaying';
import postMoviesPopular from './movieReducers/post/postMoviesPopular';
import postMoviesTopRated from './movieReducers/post/postMoviesTopRated';
import postMoviesUpcoming from './movieReducers/post/postMoviesUpcoming';
import getMovieDetails from './movieReducers/get/getMovieDetails';
import getMovieCredits from './movieReducers/get/getMovieCredits';
import getMovieTrailers from './movieReducers/get/getMovieTrailers';
import getMovieReviews from './movieReducers/get/getMovieReviews';
import getMovieFavorites from './movieReducers/get/getMovieFavorites';
import getMoviesRated from './movieReducers/get/getMoviesRated';
import rateMovie from './movieReducers/rateMovie';

import postTVAiringToday from './TVReducers/post/postTVAiringToday';
import postTVPopular from './TVReducers/post/postTVPopular';
import postTVOnTheAir from './TVReducers/post/postTVOnTheAir';
import postTVTopRated from './TVReducers/post/postTVTopRated';
import getTVDetails from './TVReducers/get/getTVDetails';
import getTVCredits from './TVReducers/get/getTVCredits';
import getTVTrailers from './TVReducers/get/getTVTrailers';
import getTVReviews from './TVReducers/get/getTVReviews';
import getTVFavorites from './TVReducers/get/getTVFavorites';
import getTVRated from './TVReducers/get/getTVRated';

import getPeopleDetails from './peopleReducers/getPeopleDetails';
import getPeopleCombinedCredits from './peopleReducers/getPeopleCombinedCredits';
import getPeoplePopular from './peopleReducers/getPeoplePopular';

import getDiscover from './getDiscover';

const rootReducer = combineReducers({
  PostMDBConfig: postMDBConfigReducer,

  getRequestToken,
  getSession,
  deleteSession,
  getGuestSession,
  toggleLogInStatus,
  getUserDetails,

  setItemType,
  toggleNav,
  searchData,
  postSearchResults,

  postMovieGenres,
  postTVGenres,

  postMoviesNowPlaying,
  postMoviesPopular,
  postMoviesTopRated,
  postMoviesUpcoming,
  getMovieDetails,
  getMovieCredits,
  getMovieTrailers,
  getMovieReviews,
  getMovieFavorites,
  getMoviesRated,
  rateMovie,

  postTVAiringToday,
  postTVPopular,
  postTVOnTheAir,
  postTVTopRated,
  getTVDetails,
  getTVCredits,
  getTVTrailers,
  getTVReviews,
  getTVFavorites,
  getTVRated,

  getPeopleDetails,
  getPeopleCombinedCredits,
  getPeoplePopular,

  getDiscover,
});

export default rootReducer;
