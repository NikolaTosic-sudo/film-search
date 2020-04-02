import { GET_PEOPLE_COMBINED_CREDITS } from '../../actions/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {
  cast: []
};

const getPeopleCombinedCredits = (state = initialState, action) => {
  switch(action.type) {
    case GET_PEOPLE_COMBINED_CREDITS: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getPeopleCombinedCredits;
