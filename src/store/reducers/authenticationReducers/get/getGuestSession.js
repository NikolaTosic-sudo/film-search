import { GET_GUEST_SESSION } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {};

const getGuestSession = (state = initialState, action) => {
  switch(action.type) {
    case GET_GUEST_SESSION: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getGuestSession;
