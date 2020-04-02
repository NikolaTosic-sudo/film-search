import { POST_TV_TOP_RATED } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const postTVTopRated = (state = initialState, action) => {
  switch(action.type) {
    case POST_TV_TOP_RATED: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default postTVTopRated;
