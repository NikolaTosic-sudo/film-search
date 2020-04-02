import { GET_TV_RATED } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const getTVRated = (state = initialState, action) => {
  switch(action.type) {
    case GET_TV_RATED: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getTVRated;
