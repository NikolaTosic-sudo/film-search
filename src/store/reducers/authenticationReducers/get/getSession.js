import { GET_SESSION } from '../../../actions/actionTypes'
import { updateObject } from '../../../../shared/utility';

const initialState = {};

const getSession = (state = initialState, action) => {
  switch(action.type) {
    case GET_SESSION: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getSession;
