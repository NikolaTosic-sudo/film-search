import { POST_MOVIES_POPULAR } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const postMoviesPopular = (state = initialState, action) => {
  switch(action.type) {
    case POST_MOVIES_POPULAR: return updateObject(state, action.payload)
    default:
      return state;
  }
}

export default postMoviesPopular;
