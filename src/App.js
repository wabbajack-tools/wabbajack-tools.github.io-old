import React, {Component} from 'react';
import 'typeface-roboto';
import { CssBaseline } from '@material-ui/core';
import styles from './assets/components/globalStyle';
import AppBarComponent from './components/AppBarComponent';
import Parallax from './components/Parallax';
import Copyright from './components/Copyright';
import Album from './components/Album';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

export default function App() {
  const classes = useStyles();
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
    <footer className={classes.footer}>
      <Copyright/>
    </footer>
    </main>
    </React.Fragment>
  );
}

