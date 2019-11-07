import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createRootReducer from '../reducers';

const history = createBrowserHistory();

const rootReducer = createRootReducer(history);

const configureStore = () => {
  const middleware = [thunk];

  const router = routerMiddleware(history);
  middleware.push(router);

  const enhancer = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return createStore(rootReducer, {}, enhancer);
};

export default { configureStore, history };
