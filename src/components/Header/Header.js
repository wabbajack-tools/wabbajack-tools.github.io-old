import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from "@material-ui/core/AppBar";
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import styles from './../../assets/js/components/headerStyle';

const useStyles = makeStyles(styles);

export default function Header(props){
  const classes = useStyles();
  const { color, changeColorOnScroll } = props;
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const headerColorChange = () => {
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
  };
  const appBarClasses = clsx({
    [classes.appBar]: true,
    [classes[color]]: color
  });
  return (
    <AppBar className={appBarClasses}>
    <ToolBar className={classes.container}>
      <Button className={classes.title}>Wabbajack</Button>
    </ToolBar>
    </AppBar>
  )
}

Header.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "white",
    "dark"
  ]),
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "transparent",
      "white",
      "dark"
    ]).isRequired
  })
};
