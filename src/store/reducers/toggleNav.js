import { TOGGLE_NAV } from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  navStatus: false
};

const toggleMav = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_NAV: return updateObject(state, { navStatus: state.navStatus ? false : true })
    default:
      return state;
  }
}

export default toggleMav;
