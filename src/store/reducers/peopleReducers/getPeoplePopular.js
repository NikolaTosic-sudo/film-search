import { GET_PEOPLE_POPULAR } from '../../actions/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {
  results: []
};

const getPeoplePopular = (state = initialState, action) => {
  switch(action.type) {
    case GET_PEOPLE_POPULAR: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getPeoplePopular;
