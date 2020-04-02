import { TOGGLE_LOG_IN_STATUS } from '../../actions/actionTypes';
import { updateObject } from '../../../shared/utility'

const initialState = {
  status: false
};

const toggleLogInStatus = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_LOG_IN_STATUS: return updateObject(state, action.status)
    default:
      return state;
  }
};

export default toggleLogInStatus;
