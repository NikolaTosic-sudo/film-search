import { POST_TV_ON_THE_AIR } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const postTVOnTheAir = (state = initialState, action) => {
  switch(action.type) {
    case POST_TV_ON_THE_AIR: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default postTVOnTheAir;
