import { FETCH_README, SET_MODLIST } from './../actions/modlistInfoAction';

const initialState = {
  readme: "",
  item: {links: []}
}

const modlistInfo = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_README:
      return {
        ...state,
        readme: action.payload
      };
    case SET_MODLIST:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}

export default modlistInfo;
