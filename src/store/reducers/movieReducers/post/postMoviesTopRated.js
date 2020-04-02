import { POST_MOVIES_TOP_RATED } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const postMoviesTopRated = (state = initialState, actions) => {
  switch(actions.type) {
    case POST_MOVIES_TOP_RATED: return updateObject(state, actions.payload)
    default:
      return state;
  }
};

export default postMoviesTopRated;
