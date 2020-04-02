import { GET_PEOPLE_DETAILS } from '../../actions/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {
  results: []
};

const getPeopleDetails = (state = initialState, action) => {
  switch(action.type) {
    case GET_PEOPLE_DETAILS: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getPeopleDetails;
