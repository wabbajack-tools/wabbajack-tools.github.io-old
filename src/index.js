import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/scss/wabbajack.scss';

ReactDOM.render(<App />, document.getElementById('root'));

if(process.env.NODE_ENV === "production"){
  serviceWorker.register();
}
