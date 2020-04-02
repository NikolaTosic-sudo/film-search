import { GET_TV_REVIEWS } from '../../../actions/actionTypes';
import { updateObject } from '../../../../shared/utility';

const initialState = {
  results: []
};

const getTVReviews = (state = initialState, action) => {
  switch(action.type) {
      case GET_TV_REVIEWS: return updateObject(state, action.payload)
      default:
        return state;
  }
};

export default getTVReviews;
