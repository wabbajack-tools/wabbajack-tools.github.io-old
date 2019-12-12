import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore, history } from './store';
//import * as serviceWorker from './serviceWorker';

import './assets/scss/wabbajack.scss';

const store = configureStore();

ReactDOM.render(<App store={store} history={history}/>, document.getElementById('root'));

//if(process.env.NODE_ENV === "production"){
//  serviceWorker.register();
//}
