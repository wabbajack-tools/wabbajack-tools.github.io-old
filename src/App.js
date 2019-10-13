import React, {Component} from 'react';
import Copyright from './components/Copyright';
import Album from './components/Album';
import { CssBaseline, makeStyles } from '@material-ui/core';
import AppBarComponent from './components/AppBarComponent';

export class App extends Component {
  classes = makeStyles(theme => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    }
  }));
  render(){
  return (
    <React.Fragment>
    <CssBaseline/>
    <AppBarComponent/>
    <main>
    <Album/>
      <footer className={this.classes.footer}>
      <Copyright/>
      </footer>
    </main>
    </React.Fragment>
  );
  }
}

export default App;
