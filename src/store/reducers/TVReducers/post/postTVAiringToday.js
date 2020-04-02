import { POST_TV_AIRING_TODAY } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const intialState = {
  results: []
};

const postTVAiringToday = (state = intialState, action) => {
  switch(action.type) {
    case POST_TV_AIRING_TODAY: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default postTVAiringToday;
