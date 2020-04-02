import { POST_TV_GENRES } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {};

const postTVGenres = (state = initialState, action) => {
  switch(action.type) {
    case POST_TV_GENRES: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default postTVGenres;
