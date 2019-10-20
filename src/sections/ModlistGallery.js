import React from 'react';
import axios from 'axios';
import uuid from 'uuid';

import { getGameName } from './../utils/Games';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import CardGallery from './../components/Card/CardGallery';

import style from './../assets/js/sections/modlistGalleryStyle';

const useStyles = makeStyles(style);
const _ = require('underscore');

export default function ModlistGallery() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    game: ''
  });
  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
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
      <div className={classes.searchOptions}>
      <FormControl className={classes.formControl}>
        <Select
          className={classes.select}
          value={values.game}
          onChange={handleChange}
          inputProps={{
            name: 'game',
            id: 'select-game'
          }}>
          <MenuItem value="">All</MenuItem>
          {_.map(modlists, (modlist) => {
            return (
              <MenuItem value={modlist.game}>{getGameName(modlist.game)}</MenuItem>
            )
          })}
        </Select>
        <FormHelperText className={classes.formControlText}>Filter by game</FormHelperText>
      </FormControl>
      </div>
      <Grid
        container
        direction="row"
        spacing={3}
        justify="space-around"
        alignItems="center">

        {_.map(modlists, (modlist) => {
          return (
            <Grid item xs={12} sm={12} md={5} key={uuid.v4()}>
              <CardGallery modlist={modlist}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
