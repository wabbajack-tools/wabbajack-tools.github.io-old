import axios from 'axios';

export const FETCH_MODLISTS = 'FETCH_MODLISTS';
export const SET_SELECTEDGAME = 'SET_SELECTEDGAME';
export const SET_SELECTIONGAMES = 'SET_SELECTIONGAMES';

export const fetchModlists = () => dispatch => {
  axios.get('https://raw.githubusercontent.com/wabbajack-tools/mod-lists/master/modlists.json')
    .then(res => res.data)
    .then(modlists =>
      dispatch({
        type: FETCH_MODLISTS,
        payload: modlists
      })
    );
};

export const setSelectedGame = (selectedGame) => dispatch => {
  dispatch({
    type: SET_SELECTEDGAME,
    payload: selectedGame
  })
}

export const setSelectionGames = (selectionGames) => dispatch => {
  dispatch({
    type: SET_SELECTIONGAMES,
    payload: selectionGames
  })
}
