import React from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header/Header';
import Footer from './components/Extra/Footer';
import GridContainer from './components/Grid/GridContainer';
import GridItem from './components/Grid/GridItem';
import Parallax from './components/Extra/Parallax';
import CardCarousel from './components/Card/CardCarousel';

import InfoSection from './sections/InfoSection';

import styles from './assets/js/indexStyle';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export default function App() {
  const classes = useStyles();
  let modlists = {};
  if(process.env.NODE_ENV === "production"){
    axios
      .get('https://raw.githubusercontent.com/wabbajack-tools/wabbajack-tools.github.io/code/src/assets/states/modlistState.json')
      .then(res => {
        modlists = res.data;
      })
  }else{
    modlists = require('./assets/states/modlistState.json');
  }
  return (
    <div>
      <Header
        color="black"
        title="Wabbajack"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}/>
      <Parallax image={require("./assets/img/banner.png")}>
        {/*<div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Wabbajack</h1>
              <h4>
                An automated modlist installer for TES/Fallout games.
              </h4>
            </GridItem>
          </GridContainer>
      </div>*/}
      </Parallax>
      <div className={clsx(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <InfoSection/>
        </div>
        <CardCarousel cards={modlists}/>
      </div>
      <Footer/>
    </div>
  );
}

