import React, { Component } from 'react';
import PropTypes from "prop-types";
import { makeStyles, Hidden } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styles from '../assets/components/appBarStyle';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export default function AppBarComponent(props) {
  const classes = useStyles();
  React.useEffect(() => {
    window.addEventListener("scroll", headerColorChange);
    return function cleanup(){
      window.removeEventListener("scroll", headerColorChange);
    };
  });
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }
  const { color, rightLinks, title, fixed, absolute } = props;
  const appBarClasses = clsx({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  return(
    <AppBar className={appBarClasses}>
    <Toolbar className={classes.container}>
      <Button className={classes.title}>{title}</Button>
      <Hidden smDown implementation="css">
        {rightLinks}
      </Hidden>
    </Toolbar>
    </AppBar>
  );
}

AppBarComponent.propTypes = {
  color: PropTypes.oneOf([
    'transparent',
    'white',
    'dark'
  ]),
  title: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  rightLinks: PropTypes.node,
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      'transparent',
      'white',
      'dark'
    ]).isRequired
  })
};
