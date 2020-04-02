import { GET_MOVIE_FAVORITES } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const getMovieFavorites = (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIE_FAVORITES: return updateObject(state, action.payload)
    default:
      return state;
  }
};

export default getMovieFavorites;
