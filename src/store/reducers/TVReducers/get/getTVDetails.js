import { GET_TV_DETAILS } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {};

const getTVDetails = (state = initialState, action) => {
  switch(action.type) {
    case GET_TV_DETAILS: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getTVDetails;
