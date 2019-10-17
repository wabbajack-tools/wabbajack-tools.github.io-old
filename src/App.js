import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header/Header';
import Footer from './components/Extra/Footer';
import Parallax from './components/Extra/Parallax';

import InfoSection from './sections/InfoSection';
import CarouselSection from './sections/CarouselSection';
import AlbumSection from './sections/AlbumSection';

import styles from './assets/js/indexStyle';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        title="Wabbajack"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}/>
      <Parallax image={require("./assets/img/banner_dark.png")}>
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
        {/*<CarouselSection/>*/}
        <AlbumSection/>
      </div>
      <Footer/>
    </div>
  );
}

