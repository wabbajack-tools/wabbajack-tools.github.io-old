import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import modlists from './modlists';
import modlistInfo from './modlistInfo';
import docsPage from './docsPage';

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    modlists,
    modlistInfo,
    docsPage
  });
}
