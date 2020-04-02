import { POST_MOVIES_NOWPLAYING } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const postMoviesNowPlaying = (state = initialState, action) => {
  switch(action.type) {
    case POST_MOVIES_NOWPLAYING: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default postMoviesNowPlaying;
