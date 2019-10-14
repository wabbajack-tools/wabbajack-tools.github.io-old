import React, {Component} from 'react';
import 'typeface-roboto';
import { CssBaseline } from '@material-ui/core';
import globalStyle from './assets/components/globalStyle';
import AppBarComponent from './components/AppBarComponent';
import Copyright from './components/Copyright';
import Album from './components/Album';

export class App extends Component {
  render(){
  return (
    <React.Fragment>
    <CssBaseline/>
    <AppBarComponent
      color="transparent"
      title="Wabbajack"
      fixed
      changeColorOnScroll={{
        height: 400,
        color: 'white'
      }}/>
    <main>
    {/*<Album/>*/}
    <footer className={globalStyle.footer}>
      <Copyright/>
    </footer>
    </main>
    </React.Fragment>
  );
  }
}

export default App;
