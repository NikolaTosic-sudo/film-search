import { DELETE_SESSION } from '../../actions/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {};

const deleteSession = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_SESSION: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default deleteSession;
