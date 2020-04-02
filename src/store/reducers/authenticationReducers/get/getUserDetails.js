import { GET_USER_DETAILS } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {};

const getUserDetails = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_DETAILS: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getUserDetails;
