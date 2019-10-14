import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";

import styles from '../assets/components/parallaxStyles.js';

const useStyles = makeStyles(styles);

export default function Parallax(props){
  let windowScrollTop;
  if (window.innerWidth >= 768){
    windowScrollTop = window.pageYOffset / 3;
  }else{
    windowScrollTop = 0;
  }

  const [transform, setTransform] = React.useState(
    "translate3d(0,"+windowScrollTop+"px,0)"
  );
  React.useEffect(() => {
    if(window.innerWidth >= 768){
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup(){
      if(window.innerWidth >= 768){
        window.removeEventListener("scroll", resetTransform)l
      }
    };
  });
  const resetTransform = () => {
    let windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0,"+windowScrollTop+"px,0)");
  };
  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = clsx({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
        transform: transform
      }}>
      {children}
  </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool
};
