import { GET_MOVIE_REVIEWS } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const getMovieReviews = (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIE_REVIEWS: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getMovieReviews;
