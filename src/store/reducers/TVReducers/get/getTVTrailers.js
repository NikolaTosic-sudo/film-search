import { GET_TV_TRAILERS } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const getTVTrailers = (state = initialState, action) => {
  switch(action.type) {
    case GET_TV_TRAILERS: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getTVTrailers;
