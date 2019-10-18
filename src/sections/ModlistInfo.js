import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import styles from './../assets/js/sections/modlistInfoStyle';

const useStyles = makeStyles(styles);

export default function ModlistInfo(props){
  const classes = useStyles();
  const { name, description, author, game, verified, links } = props;
  const { image, readme, download, machine } = links;
  return(<div></div>);
}

ModlistInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
  verified: PropTypes.bool,
  links: PropTypes.array
}
