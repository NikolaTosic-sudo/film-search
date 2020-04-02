import { GET_MOVIE_TRAILERS } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const getMovieTrailers = (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIE_TRAILERS: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getMovieTrailers;
