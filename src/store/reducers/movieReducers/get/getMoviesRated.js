import { GET_MOVIES_RATED } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const getMoviesRated = (state= initialState, action) => {
  switch(action.type) {
    case GET_MOVIES_RATED: return updateObject(state, action.payload)
    default:
      return state;
  }
}

export default getMoviesRated;
