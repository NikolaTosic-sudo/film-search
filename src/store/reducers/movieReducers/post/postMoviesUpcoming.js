import { POST_MOVIES_UPCOMING } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const postMoviesUpcoming = (state = initialState, action) => {
  switch(action.type) {
    case POST_MOVIES_UPCOMING: return updateObject(state, action.payload)
    default:
      return state
  }
};

export default postMoviesUpcoming;
