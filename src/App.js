import React, {Component} from 'react';
import Copyright from './components/Copyright';
import Album from './components/Album';
import globalStyle from './assets/components/globalStyle';
import { CssBaseline } from '@material-ui/core';
import AppBarComponent from './components/AppBarComponent';

export class App extends Component {
  render(){
  return (
    <React.Fragment>
    <CssBaseline/>
    {/*<AppBarComponent/>*/}
    <main>
    <Album/>
    <footer className={globalStyle.footer}>
      <Copyright/>
    </footer>
    </main>
    </React.Fragment>
  );
  }
}

export default App;
