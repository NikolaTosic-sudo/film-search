import { RATE_MOVIE } from '../../actions/actionTypes'
import { updateObject } from '../../../shared/utility';

const initialState = {};

const rateMovie = (state = initialState, action) => {
  switch(action.type) {
    case RATE_MOVIE: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default rateMovie;
