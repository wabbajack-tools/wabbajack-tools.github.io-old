import { FETCH_MODLISTS, SET_SELECTEDGAME, SET_SELECTIONGAMES } from './../actions/modlistsAction';

const initialState = {
  items: [],
  games: [],
  game: ""
}

const modlists = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MODLISTS:
      return {
        ...state,
        items: action.payload
      };
    case SET_SELECTEDGAME:
      return {
        ...state,
        game: action.payload
      };
    case SET_SELECTIONGAMES:
      return {
        ...state,
        games: action.payload
      };
    default:
      return state;
  }
}

export default modlists;
