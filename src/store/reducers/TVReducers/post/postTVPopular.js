import { POST_TV_POPULAR } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const postTVPopular = (state = initialState, action) => {
  switch(action.type) {
    case POST_TV_POPULAR: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default postTVPopular;
