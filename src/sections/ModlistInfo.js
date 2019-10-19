import React from 'react';
import clsx from 'clsx';
import axios from 'axios';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import styles from './../assets/js/sections/modlistInfoStyle';

const useStyles = makeStyles(styles);
const _ = require('underscore');

export default function ModlistInfo(props){
  const classes = useStyles();
  const machineURL = props.match.params.url;
  let modlists = {};
  if (process.env.NODE_ENV === "production"){
    axios
      .get('https://raw.githubusercontent.com/wabbajack-tools/wabbajack-tools.github.io/code/src/assets/states/modlistState.json')
      .then(res => {modlists = res.data});
  }else{
    modlists = require('./../assets/states/modlistState.json');
  }
  const modlist = _.findWhere(modlists, (current) => {
    return current.links.machineURL === machineURL
  });
  const { name, description, author, game, official, links } = modlist;
  const { image, readme, download } = links;
  return(
    <div>
    </div>
  );
}
