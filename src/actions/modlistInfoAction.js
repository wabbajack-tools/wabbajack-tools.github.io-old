import axios from 'axios';

export const FETCH_README = 'FETCH_README';
export const SET_MODLIST = 'SET_MODLIST';

export const fetchReadme = (readme) => dispatch => {
  axios.get(readme)
    .then(res => res.data)
    .then(readme =>
      dispatch({
        type: FETCH_README,
        payload: readme
      })
    );
};

export const setModlist = (modlist) => dispatch => {
  dispatch({
    type: SET_MODLIST,
    payload: modlist
  })
}
