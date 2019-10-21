import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

// Components
import Header from './components/Header/Header';
import Parallax from './components/Extra/Parallax';
import Footer from './components/Extra/Footer';

// Sections
import InfoSection from './sections/InfoSection';
import ModlistGallery from './sections/ModlistGallery';
import ModlistInfo from './sections/ModlistInfo';
import DocsSection from './sections/DocsSection';

import styles from './assets/js/indexStyle';

const useStyles = makeStyles(styles);

export default function App() {
  const classes = useStyles();
  return (
    <Router>
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
        <Route exact path="/" render={(props) => (<InfoSection/>)}/>
        <Route path="/gallery" render={(props) => (<ModlistGallery/>)}/>
        <Route path="/modlist/:url" render={(props) => (<ModlistInfo {...props}/>)}/>
        <Route path="/docs" render={(props) => (<DocsSection/>)}/>
        <Route path="/docs/:page" render={(props) => (<React.Fragment {...props}/>)}/>
        </div>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

