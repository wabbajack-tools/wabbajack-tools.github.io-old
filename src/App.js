import React, {Component} from 'react';
import 'typeface-roboto';
import { CssBaseline } from '@material-ui/core';
import globalStyle from './assets/components/globalStyle';
import AppBarComponent from './components/AppBarComponent';
import Parallax from './components/Parallax';
import Copyright from './components/Copyright';
import Album from './components/Album';

export class App extends Component {
  render(){
  return (
    <React.Fragment>
    <CssBaseline/>
    <main>
    <AppBarComponent
      color="transparent"
      title="Wabbajack"
      fixed
      changeColorOnScroll={{
        height: 400,
        color: 'white'
      }}/>
    <Parallax filter image={require('./assets/banner.png')}>
      <div>
      </div>
    </Parallax>
    {<Album/>}
    <footer className={globalStyle.footer}>
      <Copyright/>
    </footer>
    </main>
    </React.Fragment>
  );
  }
}

export default App;
