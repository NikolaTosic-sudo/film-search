import * as actionTypes from './actionTypes';

const saveDiscover = payload => ({
  type: actionTypes.GET_DISCOVER,
  payload
});

export const getDiscover = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveDiscover(data)))
    .catch(error => console.log(error));
  };
};

const saveMDBConfig = payload => ({
    type: actionTypes.POST_MDB_CONFIG,
    payload
  });
  
  export const postMDBConfig = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMDBConfig(data)))
      .catch(error => console.log(error));
    }
  };

  export const postSearchResults = payload => ({
    type: actionTypes.POST_SEARCH_RESULTS,
    payload
  });

  const saveData = payload => ({
    type: actionTypes.SEARCH_DATA,
    payload
  });
  
  export const searchData = url => {
    return dispatch => {
      fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveData(data)))
      .catch(error => console.log(error))
    };
  };

  export const setItemType = type => ({
    type: type === 'TV' ? actionTypes.SET_ITEM_TYPE_TV : actionTypes.SET_ITEM_TYPE_MOVIE
  });

  export const toggleNav = () => ({
    type: actionTypes.TOGGLE_NAV
  });