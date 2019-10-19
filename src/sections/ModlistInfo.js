import React, { useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import uuid from 'uuid';
import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import styles from './../assets/js/sections/modlistInfoStyle';

const useStyles = makeStyles(styles);
const _ = require('underscore');

export default function ModlistInfo(props){
  const classes = useStyles();
  const machineURL = props.match.params.url;
  let modlists = {};
  const [readmeMD, setReadmeMD] = useState("NOTFOUND");
  if (process.env.NODE_ENV === "production"){
    axios
      .get('https://raw.githubusercontent.com/wabbajack-tools/wabbajack-tools.github.io/code/src/assets/states/modlistState.json')
      .then(res => {modlists = res.data});
  }else{
    modlists = require('./../assets/states/modlistState.json');
  }
  const modlist = _.find(modlists, (current) => {
    return current.links.machineURL === machineURL
  });
  const { title, description, author, game, official, links } = modlist;
  const { image, readme, download } = links;
  axios.get(readme)
  .then(res => {
    setReadmeMD(res.data);
  });
  let gameName = game;
  switch (game){
    case 'skyrim': gameName = 'Skyrim'; break;
    case 'oblivion': gameName = 'Oblivion'; break;
    case 'skyrimspecialedition': gameName = 'Skyrim Special Edition'; break;
    case 'fallout4': gameName = 'Fallout 4'; break;
    case 'morrowind': gameName = 'Morrowind'; break;
  }
  return(
    <div className={classes.section}>
    <h2 className={classes.title}>{title}</h2>
    <img src={image} className={classes.image}/>
    <Typography variant="caption">Created by {author}</Typography>
    <div className={classes.chips}>
        <Chip
          key={uuid.v4()}
          label={gameName}
          className={classes.chip}
          size="small"
          />
        {official ?
          <Chip
            key={uuid.v4()}
            label="Official"
            className={classes.chip}
            size="small"/>
          : (<React.Fragment/>)}
      </div>
      <Divider className={classes.divider}/>
      <Typography variant="body1" className={classes.description}>{description}</Typography>
      <Divider className={classes.divider}/>
      {/*<div><Typography variant="body2" className={classes.readme}>{readmeMD}</Typography></div>*/}
      <div>
      <Markdown
          children={readmeMD}
          />
      </div>
    </div>
  );
}
