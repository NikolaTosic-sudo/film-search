import { GET_TV_FAVORITES } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const getTVFavorites = (state = initialState, action) => {
  switch(action.type) {
    case GET_TV_FAVORITES: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getTVFavorites;
