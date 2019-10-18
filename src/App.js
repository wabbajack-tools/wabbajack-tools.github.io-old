import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header/Header';
import Parallax from './components/Extra/Parallax';

import styles from './assets/js/indexStyle';

const useStyles = makeStyles(styles);

export default function App() {
  const classes = useStyles();
  return (
    <div>
    <Header
      color="transparent" // can change to dark
      changeColorOnScroll={{
        height: 400,
        color: "dark" // can change to transparent
      }}/>
      <Parallax /*filter*/ image={require("./assets/img/banner_dark.png")}/>
      <div className={clsx(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        </div>
      </div>
    </div>
  );
}

