import { GET_DISCOVER } from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  results: []
};

const getDiscover = (state = initialState, action) => {
  switch(action.type) {
    case GET_DISCOVER: return updateObject(state, action.payload)
    default:
      return state;
  }
}

export default getDiscover;
