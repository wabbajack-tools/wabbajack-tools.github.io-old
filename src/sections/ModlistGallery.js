import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchModlists, setSelectedGame, setSelectionGames } from './../actions/modlistsAction';

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
  componentDidMount() {
    this.props.fetchModlists();
  }

  componentDidUpdate(prevProps){
    if(prevProps.modlists !== this.props.modlists){
      let templist = [];
      underscore.map(this.props.modlists, (modlist) => {
        if(!templist.includes(modlist.game))
          templist.push(modlist.game);
      });
      this.props.setSelectionGames(templist);
      this.props.setSelectedGame("");
    }
  }

  handleChange = event => {
    this.props.setSelectedGame(event.target.value);
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
          value={this.props.selectedGame}
          onChange={this.handleChange}
          inputProps={{
            name: 'game',
            id: 'select-game'
          }}>
          <MenuItem value="">All</MenuItem>
          {underscore.map(this.props.selectionGames, (gameInCache) => {
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

        {underscore.map(this.props.modlists, (modlist) => {
          if(modlist.game === this.props.selectedGame || this.props.selectedGame === ""){
          return (
            <Grid item xs={12} sm={12} md={5} key={uuid.v4()}>
              <CardGallery modlist={modlist}/>
            </Grid>
          );
          }
        })}
      </Grid>
    </div>
  );
  }
}

ModlistGallery.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchModlists: PropTypes.func.isRequired,
  setSelectedGame: PropTypes.func.isRequired,
  setSelectionGames: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  modlists: state.modlists.items,
  selectedGame: state.modlists.game,
  selectionGames: state.modlists.games
});

export default connect(mapStateToProps, { fetchModlists, setSelectedGame, setSelectionGames })(withStyles(style)(ModlistGallery));
