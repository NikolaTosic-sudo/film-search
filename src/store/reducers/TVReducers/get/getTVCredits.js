import { GET_TV_CREDITS } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  cast: []
};

const getTVCredits = (state = initialState, action) => {
  switch(action.type) {
    case GET_TV_CREDITS: return updateObject(state, action.payload)
    default:
      return state;
  }
};

 export default getTVCredits;
