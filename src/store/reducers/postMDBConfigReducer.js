import { POST_MDB_CONFIG } from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  apiKey: '12a5356516535d4d67654a936a088c1b'
};

const PostMDBConfig = (state = initialState, action) => {
  switch (action.type) {
    case POST_MDB_CONFIG: return updateObject(state, action.payload)
    default:
      return state;
  }
}

export default PostMDBConfig;
