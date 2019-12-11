import { FETCH_PAGE } from './../actions/docsPageAction';

const initialState = {
  markdown: ""
}

const docsPage = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        markdown: action.payload
      };
    default:
      return state;
  }
}

export default docsPage;
