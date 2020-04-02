import { GET_MOVIE_DETAILS } from '../../../actions/actionTypes'
import { updateObject } from '../../../../shared/utility';

const initialState = {};

const getMovieDetails = (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIE_DETAILS: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getMovieDetails;
