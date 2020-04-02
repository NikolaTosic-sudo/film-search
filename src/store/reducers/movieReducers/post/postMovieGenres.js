import { POST_MOVIE_GENRES } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = [];

const postMovieGenres = (state = initialState, action) => {
  switch(action.type) {
    case POST_MOVIE_GENRES: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default postMovieGenres;
