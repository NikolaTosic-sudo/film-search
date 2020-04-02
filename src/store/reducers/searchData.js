import { SEARCH_DATA } from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  results: []
};

const searchData = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_DATA: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default searchData;
