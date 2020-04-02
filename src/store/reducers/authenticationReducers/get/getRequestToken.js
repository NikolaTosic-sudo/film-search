import { GET_REQUEST_TOKEN } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {};

const getRequestToken = (state = initialState, action) => {
  switch(action.type) {
      case GET_REQUEST_TOKEN: return updateObject(state, action.payload)
      default:
        return state;
  }
};

export default getRequestToken;
