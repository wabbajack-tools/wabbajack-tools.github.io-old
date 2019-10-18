import React from 'react';
import clsx from 'clsx';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import CardGallery from './../components/Card/CardGallery';

import style from './../assets/js/sections/modlistGalleryStyle';

const useStyles = makeStyles(style);
const _ = require('underscore');

export default function ModlistGallery() {
  const classes = useStyles();
  let modlists = {};
  if (process.env.NODE_ENV === "production"){
    axios
      .get('https://raw.githubusercontent.com/wabbajack-tools/wabbajack-tools.github.io/code/src/assets/states/modlistState.json')
      .then(res => {modlists = res.data});
  }else{
    modlists = require('./../assets/states/modlistState.json');
  }
  return(
    <div className={classes.section}>
      <h2 className={classes.title}>Featured Modlists</h2>
      <Grid
        container
        direction="row"
        spacing={3}
        justify="space-around"
        alignItems="center">

        {_.map(modlists, (modlist) => {
          {console.log(modlist)}
          return (
            <Grid item xs={12} sm={12} md={5}>
              <CardGallery modlist={modlist}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
