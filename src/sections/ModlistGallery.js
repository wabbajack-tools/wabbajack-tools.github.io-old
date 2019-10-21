import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import { getGameName } from './../utils/Games';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import CardGallery from './../components/Card/CardGallery';

import style from './../assets/js/sections/modlistGalleryStyle';

import underscore from 'underscore';

class ModlistGallery extends Component {
  state = {
    modlists: [],
    game: '',
    gamesCache: []
  };

  componentDidMount() {
    axios
    .get('https://raw.githubusercontent.com/wabbajack-tools/mod-lists/master/modlists.json')
    .then(res => {
      this.setState({modlists: res.data}, () => {
        let templist = [];
        underscore.map(this.state.modlists, (modlist) => {
          if(!templist.includes(modlist.game)){
            templist.push(modlist.game);
          }
        });
        this.setState({gamesCache: templist});
      });
    });
  }

  handleChange = event => {
    this.setState({game: event.target.value});
  }

  render(){
  const { classes } = this.props;
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Featured Modlists</h2>
      <div className={classes.searchOptions}>
      <FormControl className={classes.formControl}>
        <Select
          className={classes.select}
          value={this.state.game}
          onChange={this.handleChange}
          inputProps={{
            name: 'game',
            id: 'select-game'
          }}>
          <MenuItem value="">All</MenuItem>
          {underscore.map(this.state.gamesCache, (gameInCache) => {
            return(
              <MenuItem value={gameInCache} key={uuid.v4()}>{getGameName(gameInCache)}</MenuItem>
            );
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

        {underscore.map(this.state.modlists, (modlist) => {
          if(modlist.game === this.state.game || this.state.game === "")
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
}

ModlistGallery.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(style)(ModlistGallery);
