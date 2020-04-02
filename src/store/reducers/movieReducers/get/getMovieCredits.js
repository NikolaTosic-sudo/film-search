import { GET_MOVIE_CREDITS } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  cast: []
};

const getMovieCredits = (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIE_CREDITS: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getMovieCredits;
